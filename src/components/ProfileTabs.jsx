import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Wrapper from "../assets/wrappers/ProfileTabsWrapper";
import CreateContent from "./CreateContent";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("social");

  return (
    <Wrapper>
      <div className="container mt-4">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "social" ? "active" : ""}`}
              onClick={() => setActiveTab("social")}
            >
              Social
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "replies" ? "active" : ""}`}
              onClick={() => setActiveTab("replies")}
            >
              Social Trả Lời
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "reposts" ? "active" : ""}`}
              onClick={() => setActiveTab("reposts")}
            >
              Bài Đăng Lại
            </button>
          </li>
        </ul>

        {/* Nội dung của từng tab */}
        <div className="tab-content mt-3">
          {activeTab === "social" && (
            <div>
              <CreateContent />
            </div>
          )}
          {activeTab === "replies" && <div>Nội dung Social Trả Lời</div>}
          {activeTab === "reposts" && <div>Nội dung Bài Đăng Lại</div>}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfileTabs;
