import React from "react";

const UserInfo = ({ name, lastName, avatar, description, gmail }) => {
  return (
    <>
      <div className="user-info">
        <div className="user-name">
          <h3>
            {name} {lastName}
          </h3>
          <h5>{gmail}</h5>
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
