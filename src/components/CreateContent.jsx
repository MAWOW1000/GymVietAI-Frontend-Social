import React, { useRef, useState } from "react";
import avatar from "../assets/images/avatar-1.jpg";
import Wrapper from "../assets/wrappers/CreateContentWrapper";
import { CiCircleMore } from "react-icons/ci";
import { RiDraftLine } from "react-icons/ri";
import { FaImage } from "react-icons/fa";
import { MdEmojiEmotions, MdGifBox } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useDashboardContext } from "../pages/Dashboard";

const CreateContent = () => {
  const [showCreateContent, setShowCreateContent] = useState(false);
  const { user } = useDashboardContext();
  const [postImage, setPostImage] = useState(null);
  const [postContent, setPostContent] = useState("");

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostImage(URL.createObjectURL(file)); // tạo đường dẫn tạm thời để hiển thị ảnh
    }
  };

  return (
    <Wrapper style={{ width: "100%" }}>
      <div
        className="row-post"
        // onClick={() => setShowCreateContent((prev) => !prev) }
        onClick={() => {
          setShowCreateContent((prev) => !prev);
          console.log("showCreateContent:", !showCreateContent);
        }}
      >
        <img src={avatar} alt="avatar" />
        <p>Có gì mới?</p>
        <button>Đăng</button>
      </div>

      <div
        className={showCreateContent ? "post show-post" : "post"}
        style={{ display: showCreateContent ? "flex" : "none" }}
      >
        <div className="post-container">
          <div className="post-header">
            <button
              className="btn btn-close"
              onClick={() => {
                setShowCreateContent((prev) => !prev);
              }}
            >
              Hủy
            </button>
            <p>Đăng bài mới</p>
            <div className="icons">
              <span>
                <RiDraftLine />
              </span>
              <span>
                <CiCircleMore />
              </span>
            </div>
          </div>

          <div className="post-content">
            <div className="post-user">
              <img src={avatar} alt="avatar" />
              <p>
                {user.name} {user.lastName}
              </p>
            </div>

            {/* form input */}
            <div className="post-input">
              <textarea
                placeholder="Có gì mới?"
                rows="1"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />

              {postImage && (
                <div className="preview-image">
                  <img
                    src={postImage}
                    alt="preview"
                    style={{
                      maxWidth: "100%",
                      marginTop: "10px",
                    }}
                  />
                </div>
              )}
              <div className="post-file">
                <span onClick={handleImageClick}>
                  <FaImage style={{ cursor: "pointer" }} />
                </span>
                <MdEmojiEmotions />
                <MdGifBox />
                <IoLocation />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <button
              className="btn-confirm"
              onClick={() => {
                if (!postContent.trim() && !postImage) {
                  alert("Vui lòng nhập nội dung hoặc chọn ảnh trước khi đăng!");
                  return;
                }
                console.log("Nội dung:", postContent);
                console.log("Ảnh:", postImage);
                setPostContent("");
                setPostImage(null);
                setShowCreateContent(false);
              }}
            >
              Đăng
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateContent;
