import React, { useState, useEffect } from "react";
import Post from "../components/Post/Post";
import avatar from "../../../assets/images/avatar-1.jpg";
import { privateAxios } from "../../../api/client";
import { useDashboardContext } from "../../Dashboard";

const AllPosts = ({ newPost }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useDashboardContext();
  const currentUserId = user.id;

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await privateAxios.get("/posts/feed?limit=20&page=1");
        const fetchedPosts = res.data.data.posts || [];
        const formattedPosts = fetchedPosts.map((post) => {
          const isOwner =
            post.profileId === currentUserId ||
            post.profile?.id === currentUserId;
          return {
            id: post.id,
            avatar: post.profile?.profilePicture || avatar,
            username:
              post.profile?.displayName || post.profile?.username || "unknown",
            content: post.content || "",
            mediaUrls: post.mediaUrls || "[]",
            comments: [],
            initialLikes: post.likeCount || 0,
            isLiked: post.isLiked || false,
            isOwner,
          };
        });
        setPosts(formattedPosts);
      } catch (error) {
        console.error(
          "Lỗi khi lấy danh sách bài viết:",
          error.response?.data || error.message
        );
      }
    };

    if (currentUserId) {
      fetchAllPosts();
    }
  }, [currentUserId]);

  // Thêm bài viết mới khi newPost thay đổi
  useEffect(() => {
    if (newPost) {
      setPosts((prevPosts) => {
        if (prevPosts.some((post) => post.id === newPost.id)) {
          return prevPosts;
        }
        const formattedNewPost = {
          ...newPost,
          isOwner:
            newPost.profileId === currentUserId ||
            newPost.profile?.id === currentUserId,
        };
        // console.log("newPost:", newPost, "isOwner:", formattedNewPost.isOwner);
        return [formattedNewPost, ...prevPosts];
      });
    }
  }, [newPost, currentUserId]);

  // Hàm xử lý xóa bài post
  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <Post post={post} onDelete={handleDeletePost} />
        </div>
      ))}
    </>
  );
};

export default AllPosts;
