import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Wrapper from "./PostPopupWrapper";
import InteractButtons from "../InteractButtons";
import Comment from "../Comment";
import { privateAxios } from "../../../../api/client";

const PostPopup = ({ post, onClose, className, onLikeClick }) => {
  const {
    avatar,
    content,
    initialLikes,
    liked,
    mediaUrls,
    profile,
    displayName,
    id: postId,
  } = post;

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 10;

  const mediaUrl = JSON.parse(mediaUrls || "[]")?.[0] || null;

  const fetchComments = async () => {
    if (!postId) {
      setError("Bài viết không hợp lệ!");
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const response = await privateAxios.get(
        `/comments/post/${postId}?page=${page}&limit=${limit}`
      );
      // console.log("API response:", response.data);
      const fetchedComments = response.data.data.comments || [];

      setComments((prev) => {
        const newComments = fetchedComments.filter(
          (newComment) => !prev.some((comment) => comment.id === newComment.id)
        );
        return [...prev, ...newComments];
      });
      setError(null);
    } catch (error) {
      if (error.response?.status === 404) {
        setError("Không tìm thấy bình luận cho bài viết này!");
      } else {
        setError("Không thể tải bình luận. Vui lòng thử lại!");
      }
      console.error(
        "Error fetching comments:",
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
    fetchComments();
  }, [postId]);

  useEffect(() => {
    if (page > 1) {
      fetchComments();
    }
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Wrapper className={className}>
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>
            <IoClose />
          </button>

          <div className="popup-header">
            <img src={avatar} alt="avatar" className="avatar" />
            <p>
              {post.username ||
                displayName ||
                profile?.displayName ||
                profile?.username ||
                "Unknown"}
            </p>
          </div>

          <div className="popup-body">
            <p>{content}</p>
            {mediaUrl && (
              <img src={mediaUrl} alt="post" className="popup-image" />
            )}
          </div>

          <div className="popup-footer">
            <InteractButtons
              initialLikes={initialLikes}
              liked={liked}
              onLikeClick={onLikeClick}
              postId={postId}
            />
          </div>

          <div className="comments-section">
            {loading && page === 1 ? (
              <p>Đang tải bình luận...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : (
              <>
                <Comment
                  comments={comments}
                  postId={postId}
                  addComment={addComment}
                  deleteComment={deleteComment}
                />
                {comments.length >= page * limit && (
                  <button onClick={handleLoadMore} disabled={loading}>
                    {loading ? "Đang tải..." : "Tải thêm bình luận"}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PostPopup;
