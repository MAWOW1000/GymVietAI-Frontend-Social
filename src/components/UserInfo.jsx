import React from "react";

const UserInfo = ({ name, lastName, avatar, description }) => {
  return (
    <>
      <div className="user-info">
        <div className="user-name">
          <h3>
            {name} {lastName}
          </h3>
        </div>
        <div className="user-avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </>
  );
};

export default UserInfo;
