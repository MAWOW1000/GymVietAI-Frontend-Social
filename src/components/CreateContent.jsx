import React, { useState } from "react";
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
              <textarea placeholder="Có gì mới?" rows="1" />
              <div className="post-file">
                <FaImage />
                <MdEmojiEmotions />
                <MdGifBox />
                <IoLocation />
              </div>
            </div>
            <button className="btn-confirm">Đăng</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateContent;
