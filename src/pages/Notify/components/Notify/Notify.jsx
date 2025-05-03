import React from "react";
import Wrapper from "./NotifyWrapper";

const Notify = ({ notify, defaultImage }) => {
  const getRelativeTime = (date) => {
    const now = new Date();
    const diff = (now - new Date(date)) / 1000;
    if (diff < 60) return `${Math.floor(diff)} giây trước`;
    if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
    return `${Math.floor(diff / 86400)} ngày trước`;
  };

  const typeDisplay = {
    COMMENT: "comment",
    LIKE: "like",
    FOLLOW: "follow",
    FOLLOW_REQUEST: "want to follow",
  };

  return (
    <Wrapper>
      <div className="notify">
        <div className="header">
          <img
            src={notify.sender?.profilePicture || defaultImage}
            alt="avatar"
            onError={(e) => (e.target.src = defaultImage)}
          />
        </div>
        <div className="body">
          <div className="name">
            <p>
              {notify.sender?.displayName ||
                notify.sender?.username ||
                "Unknown"}
            </p>
            <p>{getRelativeTime(notify.createdAt)}</p>
          </div>
          <div className="reason">
            <p>{typeDisplay[notify.type] || "thông báo"}</p>
          </div>
          <div className="content">
            <p>{notify.message || "Không có nội dung"}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Notify;
