// useLike.js
import { useState } from "react";
import { privateAxios } from "../api/client";

const useLike = (postId, initialLikes, isLiked) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(isLiked || false);
  const [isLiking, setIsLiking] = useState(false);

  const handleLikeClick = async () => {
    if (isLiking) return;
    setIsLiking(true);

    try {
      const cleanPostId = String(postId).replace(/"/g, "");
      console.log("Post ID gửi đi:", cleanPostId);

      if (liked) {
        await privateAxios.delete(`/likes/${cleanPostId}`);
        setLikes((prev) => prev - 1);
        setLiked(false);
      } else {
        await privateAxios.post(`/likes/${cleanPostId}`);
        setLikes((prev) => prev + 1);
        setLiked(true);
      }
    } catch (error) {
      console.error(
        "Lỗi khi like/unlike bài viết:",
        error.response?.data || error.message
      );
    } finally {
      setIsLiking(false);
    }
  };

  return {
    likes,
    liked,
    handleLikeClick,
  };
};

export default useLike;
