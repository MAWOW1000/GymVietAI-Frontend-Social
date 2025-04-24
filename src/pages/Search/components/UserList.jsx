import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div className="users-list">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <Link
            to={`/user/${user.id}`}
            state={{ user }}
            style={{ display: "flex", gap: "0.75rem", color: "#fff" }}
          >
            <img
              src={user.profilePicture || "/assets/images/avatar-1.jpg"}
              alt={user.username}
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
            <div className="user-info">
              <div className="user-name">{user.displayName}</div>
              <div className="user-email">{user.username}</div>
              <div className="user-desc">{user.bio || "Chưa có mô tả"}</div>
              <div className="user-followers">
                {user.followerCount?.toLocaleString() || 0} người theo dõi
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;
