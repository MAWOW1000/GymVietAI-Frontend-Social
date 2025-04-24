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

  return (
    <Wrapper>
      <div className="notify">
        <div className="header">
          <img
            src={notify.sender?.profilePicture || defaultImage}
            alt="avt"
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
            <p style={{ color: "#999" }}>{getRelativeTime(notify.createdAt)}</p>
          </div>
          <div className="reason">
            <p>{(notify.type || "notification").toLowerCase()}</p>
          </div>
          <div className="content">
            <p>{notify.message || "No message"}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Notify;
