import { FaRegHeart, FaHeart } from "react-icons/fa";
import { TfiComment } from "react-icons/tfi";
import { TbShare3 } from "react-icons/tb";
import { BiRepost } from "react-icons/bi";

const InteractButtons = ({
  initialLikes,
  liked,
  onLikeClick,
  onCommentClick,
  postId,
}) => {
  const handleShare = () => {
    const postUrl = `${window.location.origin}/post/${postId}`;
    navigator.clipboard
      .writeText(postUrl)
      .then(() => {
        alert("Đã sao chép link bài viết!");
      })
      .catch((err) => {
        console.error("Lỗi sao chép link:", err);
      });
  };

  return (
    <div className="interact" onClick={(e) => e.stopPropagation()}>
      <button onClick={onLikeClick}>
        {liked ? <FaHeart color="white" /> : <FaRegHeart color="white" />}
        <p>{initialLikes}</p>
      </button>
      <button>
        <TfiComment onClick={onCommentClick} />
        <p></p>
      </button>
      <button>
        <TbShare3 onClick={handleShare} />
        <p></p>
      </button>
      <button>
        <BiRepost />
        <p></p>
      </button>
    </div>
  );
};

export default InteractButtons;
