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
  const limit = 10;

  const fetchPostAndComments = async () => {
    try {
      setLoading(true);
      const postRes = await privateAxios.get(`/posts/${postId}`);
      const postData = postRes.data.data.post;

      const commentsRes = await privateAxios.get(
        `/comments/post/${postId}?page=${page}&limit=${limit}`
      );
      // console.log("Comments response:", commentsRes.data);
      const fetchedComments = commentsRes.data.data.comments || [];

      const formattedPost = {
        id: postData.id,
        avatar: postData.profile?.profilePicture || avatar,
        username:
          postData.profile?.displayName ||
          postData.profile?.username ||
          "unknown",
        content: postData.content || "",
        image: JSON.parse(postData.mediaUrls || "[]")[0] || null,
        initialLikes: postData.likeCount || 0,
        isLiked: postData.isLiked || false,
      };

      setPost(formattedPost);
      setComments((prev) => {
        const newComments = fetchedComments.filter(
          (newComment) => !prev.some((comment) => comment.id === newComment.id)
        );
        return [...prev, ...newComments];
      });
    } catch (error) {
      console.error(
        "Lỗi khi lấy bài viết hoặc bình luận:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const addComment = (newComment) => {
    setComments((prev) => {
      const uniqueComments = Array.from(
        new Map([...prev, newComment].map((c) => [c.id, c])).values()
      );
      return uniqueComments;
    });
  };

  const deleteComment = (commentId) => {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
  };

  useEffect(() => {
    setComments([]);
    setPage(1);
    fetchPostAndComments();
  }, [postId]);

  useEffect(() => {
    if (page > 1) {
      fetchPostAndComments();
    }
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading && page === 1) return <p>Loading...</p>;
  if (!post) return <p>Không tìm thấy bài viết</p>;

  return (
    <PostComponent
      post={post}
      comments={comments}
      onLoadMore={handleLoadMore}
      canLoadMore={comments.length >= page * limit}
      addComment={addComment}
      deleteComment={deleteComment}
      postId={postId}
    />
  );
};

export default Post;
