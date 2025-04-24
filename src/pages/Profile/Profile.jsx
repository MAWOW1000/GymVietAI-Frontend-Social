import React, { useState } from "react";
import { useDashboardContext } from "../Dashboard";
import avatar from "../../assets/images/avatar-1.jpg";
import EditProfile from "./components/EditProfile/EditProfile";
import ProfileTabs from "./components/ProfileTabs/ProfileTabs";
import UserInfo from "../../components/UserInfo";
import Wrapper from "./ProfileWrapper";

const Profile = () => {
  const { user } = useDashboardContext();

  return (
    <Wrapper>
      <UserInfo
        username={user.username}
        gmail={user.gmail.split("@")[0]}
        lastName={user.lastName}
        avatar={avatar}
        description={user.description}
        follower={user.follower}
      />

      <EditProfile />

      <div className="tabbar">
        <ProfileTabs />
      </div>
    </Wrapper>
  );
};

export default Profile;
