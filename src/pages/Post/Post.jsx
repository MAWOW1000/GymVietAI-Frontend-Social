import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post as PostComponent } from "../../components";
import avatar from "../../assets/images/avatar-1.jpg";
import { privateAxios } from "../../api/client";

const Post = () => {
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;

  useEffect(() => {
    const fetchPostById = async () => {
      try {
        setLoading(true);

        const postRes = await privateAxios.get(`/posts/${postId}`);
        const postData = postRes.data.data.post;

        const commentsRes = await privateAxios.get(
          `/posts/${postId}/replies?page=${page}&limit=${limit}`
        );
        const fetchedComments = commentsRes.data.data.replies || [];

        const formattedPost = {
          id: postData.id,
          avatar: postData.profile?.profilePicture || avatar,
          username:
            postData.profile?.displayName ||
            postData.profile?.username ||
            "unknown",
          content: postData.content || "",
          image: JSON.parse(postData.mediaUrls || "[]")[0] || null,
          comments: fetchedComments,
          initialLikes: postData.likeCount || 0,
          isLiked: postData.isLiked || false,
        };

        setPost(formattedPost);
        setComments(fetchedComments);
      } catch (error) {
        console.error(
          "Lỗi khi lấy bài viết hoặc bình luận:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPostById();
  }, [postId, page]);

  // Xử lý tải thêm comment
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Không tìm thấy bài viết</p>;

  return (
    <PostComponent
      post={post}
      comments={comments}
      onLoadMore={handleLoadMore}
      canLoadMore={comments.length >= page * limit}
    />
  );
};

export default Post;
