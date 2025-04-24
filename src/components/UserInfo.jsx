import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";

const UserInfo = ({
  username,
  lastName,
  avatar,
  description,
  gmail,
  follower,
}) => {
  return (
    <>
      <div className="user-info">
        <div className="user-name">
          <h3>
            {username} {lastName}
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

      <div className="other">
        <p>{follower}</p>
        <div className="icons">
          <span>
            <FaInstagramSquare />
          </span>
          <span>
            <IoStatsChart />
          </span>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
