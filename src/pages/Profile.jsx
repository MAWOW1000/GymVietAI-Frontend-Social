import React from "react";
import { useDashboardContext } from "./Dashboard";
import avatar from "../assets/images/avatar-1.jpg";
import { EditProfile, ProfileTabs, UserInfo } from "../components";
import Wrapper from "../assets/wrappers/ProfileWrapper";

const Profile = () => {
  const { user } = useDashboardContext();

  return (
    <Wrapper>
      <UserInfo
        name={user.name}
        gmail={user.gmail.split("@")[0]}
        lastName={user.lastName}
        avatar={avatar}
        description={user.description}
      />

      <div className="btn-container">
        <EditProfile />
      </div>

      <div className="tabbar">
        <ProfileTabs />
      </div>
    </Wrapper>
  );
};

export default Profile;
