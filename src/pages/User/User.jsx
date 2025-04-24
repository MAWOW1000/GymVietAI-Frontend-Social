import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import avatar from "../../assets/images/avatar-1.jpg";
import Wrapper from "./UserWrapper";
import UserInfo from "../../components/UserInfo";
import { privateAxios } from "../../api/client";
import { useDashboardContext } from "../Dashboard";

const User = () => {
  const { id: targetProfileId } = useParams();
  const { state } = useLocation();
  const [profile, setProfile] = useState(state?.user || null);
  const [loading, setLoading] = useState(!state?.user);
  const [error, setError] = useState(null);
  const { user } = useDashboardContext();
  const currentUserId = user?.id;
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (state?.user) {
      return;
    }

    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log("Fetching profile with id:", targetProfileId);
        const response = await privateAxios.get(`/profiles/${targetProfileId}`);
        setProfile(response.data.data.profile);
      } catch (err) {
        console.error("Error fetching profile:", err.response?.data);
        setError(
          err.response?.data?.message || "Không thể tải thông tin người dùng."
        );
      } finally {
        setLoading(false);
      }
    };

    const checkFollowingStatus = async () => {
      if (
        currentUserId &&
        targetProfileId &&
        currentUserId !== targetProfileId
      ) {
        try {
          const response = await privateAxios.get(
            `/profiles/${targetProfileId}/following/status`
          );
          setIsFollowing(response.data.isFollowing);
        } catch (error) {
          console.error(
            "Lỗi kiểm tra trạng thái theo dõi:",
            error.response?.data
          );
          setIsFollowing(false);
        }
      } else {
        setIsFollowing(false);
      }
    };

    fetchProfile();
    checkFollowingStatus();
  }, [targetProfileId, currentUserId, state]);

  const handleFollow = async () => {
    if (!profile?.id) return;
    try {
      const response = await privateAxios.post(`/follows/${profile.id}`); // Thay đổi ở đây
      if (response.data.status === "success") {
        setIsFollowing(true);
        console.log("Đã theo dõi thành công");
        setProfile((prevProfile) => ({
          ...prevProfile,
          followerCount: (prevProfile.followerCount || 0) + 1,
        }));
      } else {
        console.error("Lỗi khi theo dõi:", response.data.message);
      }
    } catch (error) {
      console.error("Lỗi gọi API theo dõi:", error);
    }
  };

  const handleUnfollow = async () => {
    if (!profile?.id) return;
    try {
      const response = await privateAxios.delete(
        `/profiles/${profile.id}/unfollow`
      );
      if (response.data.status === "success") {
        setIsFollowing(false);
        console.log("Đã hủy theo dõi thành công");
        setProfile((prevProfile) => ({
          ...prevProfile,
          followerCount: (prevProfile.followerCount || 0) - 1,
        }));
      } else {
        console.error("Lỗi khi hủy theo dõi:", response.data.message);
      }
    } catch (error) {
      console.error("Lỗi gọi API hủy theo dõi:", error);
    }
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error || !profile) {
    return <div>{error || "Không tìm thấy người dùng!"}</div>;
  }

  return (
    <Wrapper>
      <UserInfo
        username={profile.displayName || "Không có tên"}
        lastName={profile.username || ""}
        gmail={profile.username || "Không có gmail"}
        avatar={profile.profilePicture || avatar}
        description={profile.bio || "Chưa có mô tả"}
        follower={profile.followerCount || 0}
      />
      {currentUserId && profile?.id !== currentUserId && (
        <button onClick={isFollowing ? handleUnfollow : handleFollow}>
          {isFollowing ? "Đang theo dõi" : "Theo dõi"}
        </button>
      )}
    </Wrapper>
  );
};

export default User;
