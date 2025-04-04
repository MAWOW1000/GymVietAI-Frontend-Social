import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoMdChatbubbles } from "react-icons/io";
import { IoSend } from "react-icons/io5";

const CommentButton = ({ commentId, isLiked, onLike, onReply, user }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleReplySubmit = () => {
    if (replyText.trim() === "") return;
    onReply(commentId, replyText, user); // Gửi tên người trả lời
    setReplyText("");
    setIsReplying(false);
  };

  return (
    <div className="comment-buttons">
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => onLike(commentId)} className="heart-button">
          {isLiked ? <AiFillHeart color="white" /> : <AiOutlineHeart />}
        </button>
        <button
          className="reply-button"
          onClick={() => setIsReplying(!isReplying)}
        >
          <IoMdChatbubbles />
        </button>
      </div>

      {isReplying && (
        <div className="reply-input">
          <textarea
            value={replyText}
            onChange={handleReplyChange}
            placeholder="Viết trả lời..."
          />
          <button onClick={handleReplySubmit}>
            <IoSend />
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentButton;
