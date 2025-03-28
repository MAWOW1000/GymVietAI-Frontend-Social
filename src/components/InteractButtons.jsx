import { FaRegHeart } from "react-icons/fa";
import { TfiComment } from "react-icons/tfi";
import { TbShare3 } from "react-icons/tb";
import { BiRepost } from "react-icons/bi";

const InteractButtons = () => {
  return (
    <div className="interact" onClick={(e) => e.stopPropagation()}>
      <button>
        <FaRegHeart />
        <p>301</p>
      </button>
      <button>
        <TfiComment />
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
