import { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import CommentButton from "./CommentButton";

const Comment = ({ comments, user }) => {
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState("");
  const [likedComments, setLikedComments] = useState({});
  const [replies, setReplies] = useState({});

  const handleReply = (commentId, replyText, user) => {
    setReplies((prevReplies) => ({
      ...prevReplies,
      [commentId]: [
        ...(prevReplies[commentId] || []),
        { user, text: replyText },
      ],
    }));
  };

  useEffect(() => {
    setCommentList(comments);
  }, [comments]);

  const handleCommentSubmit = () => {
    if (newComment.trim() === "") return;
    const newCommentData = {
      id: commentList.length + 1,
      user: "Bạn",
      text: newComment,
    };
    setCommentList([...commentList, newCommentData]);
    setNewComment("");
  };

  const handleLike = (commentId) => {
    setLikedComments((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  return (
    <>
      {/* in ra phần cmt */}
      <div className="comments-list">
        {commentList.map((comment) => (
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

              {/* in ra phần trả lời cmt */}
              {replies[comment.id] && (
                <div className="replies">
                  {replies[comment.id].map((reply, index) => (
                    <div key={index} className="reply">
                      <FaRegUserCircle className="comment-avatar" />
                      <p className="reply-text">
                        {/* <strong>{reply.user}:</strong> {reply.text} */}
                        <strong>Bạn:</strong> {reply.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* thêm cmt cho bài viết */}
      <div className="comment-input">
        <textarea
          className="comment-input"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Viết bình luận..."
        ></textarea>
        <button onClick={handleCommentSubmit}>
          <IoSend />
        </button>
      </div>
    </>
  );
};

export default Comment;
