import { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSend, IoEllipsisHorizontal } from "react-icons/io5";
import CommentButton from "./CommentButton";
import { useDashboardContext } from "../../Dashboard";
import { privateAxios } from "../../../api/client";
import { initSocket } from "../../../api/socket";

const Comment = ({ comments = [], postId, addComment, deleteComment }) => {
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likedComments, setLikedComments] = useState({});
  const [replies, setReplies] = useState({});
  const [menuOpen, setMenuOpen] = useState(null);
  const { user } = useDashboardContext();

  useEffect(() => {
    if (!postId || !user?.id) {
      console.log("Post ID or User ID not available, skipping WebSocket");
      return;
    }

    const socket = initSocket();
    if (!socket) {
      console.error("Failed to initialize WebSocket");
      return;
    }

    socket.on("connect_error", (error) => {
      console.error("WebSocket connect error:", error.message);
      if (error.message.includes("Invalid token")) {
        console.log("Invalid token, please check token with backend");
      }
    });

    socket.on("connect", () => {
      console.log("WebSocket connected for comments");
      socket.emit("join", { postId: `post:${postId}` });
      console.log(`Joined room post:${postId}`);
    });

    socket.on("new_comment", (newComment) => {
      console.log("New comment:", newComment);
      const commentData = {
        id: newComment.id,
        content: newComment.content,
        profile: newComment.profile || {
          displayName: "Ẩn Danh",
          username: "Ẩn Danh",
          id: newComment.profile?.id,
        },
      };
      addComment(commentData);
    });

    socket.onAny((event, ...args) => {
      console.log(`Socket event: ${event}`, args);
    });

    return () => {
      socket.offAny();
      socket.off("new_comment");
      socket.off("connect_error");
      socket.off("connect");
    };
  }, [postId, user?.id, addComment]);

  useEffect(() => {
    if (Array.isArray(comments)) {
      const uniqueComments = Array.from(
        new Map(comments.map((c) => [c.id, c])).values()
      );
      const mapped = uniqueComments.map((c) => ({
        id: c.id,
        user: c.profile?.displayName || c.profile?.username || "Ẩn danh",
        text: c.content,
        profileId: c.profile?.id,
      }));
      setCommentList(mapped);
    } else {
      console.warn("Dữ liệu 'comments' không hợp lệ:", comments);
      setCommentList([]);
    }
  }, [comments]);

  const handleCommentSubmit = async () => {
    if (newComment.trim() === "") return;

    try {
      const response = await privateAxios.post("/comments", {
        postId: postId,
        content: newComment,
        mediaUrl: null,
        parentId: null,
      });
      console.log("POST comment response:", response.data);

      const newCommentData = {
        id: response.data.data.comment.id,
        content: response.data.data.comment.content,
        profile: response.data.data.comment.profile || {
          displayName: user?.username || "Ẩn Danh",
          username: user?.lastName || "Ẩn Danh",
          id: user?.id,
        },
      };

      addComment(newCommentData);
      setNewComment("");
    } catch (error) {
      console.error(
        "Error posting comment:",
        error.response?.data || error.message
      );
      alert(
        error.response?.status === 400
          ? "Nội dung bình luận không hợp lệ!"
          : "Không thể gửi bình luận. Vui lòng kiểm tra token hoặc backend!"
      );
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const response = await privateAxios.delete(`/comments/${commentId}`);
      console.log("DELETE comment response:", response.data);
      deleteComment(commentId);
      setMenuOpen(null);
      alert("Bình luận đã được xóa!");
    } catch (error) {
      console.error(
        "Error deleting comment:",
        error.response?.data || error.message
      );
      alert(
        error.response?.status === 403
          ? "Bạn không có quyền xóa bình luận này!"
          : "Không thể xóa bình luận. Vui lòng kiểm tra token hoặc backend!"
      );
    }
  };

  const handleReply = (commentId, replyText) => {
    setReplies((prev) => ({
      ...prev,
      [commentId]: [
        ...(prev[commentId] || []),
        { user: user?.lastName || "Bạn", text: replyText },
      ],
    }));
  };

  const handleLike = (commentId) => {
    setLikedComments((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  const toggleMenu = (commentId) => {
    setMenuOpen((prev) => (prev === commentId ? null : commentId));
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
                <div className="comment-header">
                  <p className="comment-user">{comment.user}</p>
                  {user?.id === comment.profileId && (
                    <div className="comment-menu">
                      <button
                        className="menu-button"
                        onClick={() => toggleMenu(comment.id)}
                      >
                        <IoEllipsisHorizontal />
                      </button>
                      {menuOpen === comment.id && (
                        <div className="menu-dropdown">
                          <button
                            className="menu-item"
                            onClick={() => handleDeleteComment(comment.id)}
                          >
                            Xóa bình luận
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
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
