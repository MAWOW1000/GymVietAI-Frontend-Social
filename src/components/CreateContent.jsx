import React, { useRef, useState } from "react";
import avatar from "../assets/images/avatar-1.jpg";
import Wrapper from "../assets/wrappers/CreateContentWrapper";
import { CiCircleMore } from "react-icons/ci";
import { RiDraftLine } from "react-icons/ri";
import { FaImage } from "react-icons/fa";
import { MdEmojiEmotions, MdGifBox } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useDashboardContext } from "../pages/Dashboard";
import { privateAxios } from "../api/client";

const CreateContent = ({ onPostCreated }) => {
  const [showCreateContent, setShowCreateContent] = useState(false);
  const { user } = useDashboardContext();
  const [postImage, setPostImage] = useState(null);
  const [postContent, setPostContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPostImage({ file, objectUrl });
    }
  };

  const handlePostSubmit = async () => {
    if (!postContent.trim() && !postImage) {
      alert("Vui lòng nhập nội dung hoặc chọn ảnh trước khi đăng!");
      return;
    }

    setIsSubmitting(true);
    try {
      const imageUrls = postImage ? [postImage.objectUrl] : [];

      const payload = {
        content: postContent,
        mediaUrls: imageUrls,
        isPublic: true,
        isRepost: false,
      };

      const response = await privateAxios.post("/posts", payload);
      const newPost = response.data.data.post;

      const formattedPost = {
        id: newPost.id,
        avatar: newPost.profile?.profilePicture || avatar,
        username:
          newPost.profile?.displayName ||
          newPost.profile?.username ||
          "unknown",
        content: newPost.content || "",
        mediaUrls: newPost.mediaUrls || "[]",
        comments: [],
        initialLikes: newPost.likeCount || 0,
        isLiked: newPost.isLiked || false,
      };

      // Gọi callback
      onPostCreated?.(formattedPost);

      setPostContent("");
      setPostImage(null);
      setShowCreateContent(false);
    } catch (error) {
      console.error("Lỗi khi đăng bài:", error.response?.data || error.message);
      alert("Không thể đăng bài. Vui lòng thử lại!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper style={{ width: "100%" }}>
      <div className="row-post" onClick={() => setShowCreateContent(true)}>
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
              onClick={() => setShowCreateContent(false)}
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
              <p>{user?.username}</p>
            </div>

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
                    src={postImage.objectUrl}
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
              onClick={handlePostSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Đang đăng..." : "Đăng"}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateContent;
