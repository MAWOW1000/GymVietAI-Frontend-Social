import { FaRegHeart, FaHeart } from "react-icons/fa";
import { TfiComment } from "react-icons/tfi";
import { TbShare3 } from "react-icons/tb";
import { BiRepost } from "react-icons/bi";

const InteractButtons = ({
  initialLikes,
  liked,
  onLikeClick,
  onCommentClick,
}) => {
  return (
    <div className="interact" onClick={(e) => e.stopPropagation()}>
      <button onClick={onLikeClick}>
        {liked ? <FaHeart color="white" /> : <FaRegHeart color="white" />}
        <p>{initialLikes}</p>
      </button>
      <button>
        <TfiComment onClick={onCommentClick} />
        <p>25</p>
      </button>
      <button>
        <TbShare3 />
        <p>13</p>
      </button>
      <button>
        <BiRepost />
        <p>27</p>
      </button>
    </div>
  );
};

export default InteractButtons;
