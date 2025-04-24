import { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import CommentButton from "./CommentButton";
import { useDashboardContext } from "../../Dashboard";
import { privateAxios } from "../../../api/client";

const Comment = ({ comments = [], postId }) => {
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likedComments, setLikedComments] = useState({});
  const [replies, setReplies] = useState({});
  const { user } = useDashboardContext();

  useEffect(() => {
    if (Array.isArray(comments)) {
      const uniqueComments = Array.from(
        new Map(comments.map((c) => [c.id, c])).values()
      );
      const mapped = uniqueComments.map((c) => ({
        id: c.id,
        user: c.profile?.displayName || c.profile?.username || "Ẩn danh",
        text: c.content,
      }));
      setCommentList(mapped);
    } else {
      console.warn("Dữ liệu 'comments' không hợp lệ:", comments);
      setCommentList([]);
    }
  }, [comments]);

  // Gửi comment mới
  const handleCommentSubmit = async () => {
    if (newComment.trim() === "") return;

    try {
      const response = await privateAxios.post("/posts", {
        content: newComment,
        mediaUrls: [],
        parentId: postId,
      });

      const newCommentData = {
        id: response.data.data.post.id,
        user:
          response.data.data.post.profile?.displayName ||
          response.data.data.post.profile?.username ||
          user?.displayName ||
          user?.username ||
          "Ẩn Danh",
        text: response.data.data.post.content,
      };

      setCommentList((prev) => {
        // Loại bỏ trùng lặp trước khi thêm
        const uniqueList = Array.from(
          new Map([...prev, newCommentData].map((c) => [c.id, c])).values()
        );
        return uniqueList;
      });
      setNewComment("");
    } catch (error) {
      console.error(
        "Error posting comment:",
        error.response?.data || error.message
      );
      alert("Không thể gửi bình luận. Vui lòng thử lại!");
    }
  };

  const handleReply = (commentId, replyText) => {
    setReplies((prev) => ({
      ...prev,
      [commentId]: [
        ...(prev[commentId] || []),
        { user: user?.username || "Bạn", text: replyText },
      ],
    }));
  };

  const handleLike = (commentId) => {
    setLikedComments((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  return (
    <>
      <div className="comments-list">
        {commentList.length === 0 ? (
          <p>Chưa có bình luận nào.</p>
        ) : (
          commentList.map((comment) => (
            <div key={comment.id} className="comment-item">
              <FaRegUserCircle className="comment-avatar" />
              <div className="comment-content">
                <p className="comment-user">{comment.user}</p>
                <p className="comment-text">{comment.text}</p>

                <CommentButton
                  commentId={comment.id}
                  isLiked={likedComments[comment.id] || false}
                  onLike={handleLike}
                  onReply={handleReply}
                  user={user}
                />

                {replies[comment.id] && (
                  <div className="replies">
                    {replies[comment.id].map((reply, index) => (
                      <div
                        key={`${comment.id}-reply-${index}`}
                        className="reply"
                      >
                        <FaRegUserCircle className="comment-avatar" />
                        <p className="reply-text">
                          <strong>{reply.user}:</strong> {reply.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="comment-input">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Viết bình luận..."
        ></textarea>
        <button onClick={handleCommentSubmit} disabled={!newComment.trim()}>
          <IoSend />
        </button>
      </div>
    </>
  );
};

export default Comment;
