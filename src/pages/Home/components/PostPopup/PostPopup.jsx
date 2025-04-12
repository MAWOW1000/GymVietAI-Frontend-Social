import { IoClose } from "react-icons/io5";
import Wrapper from "./PostPopupWrapper";
import InteractButtons from "../InteractButtons";
import Comment from "../Comment";

const PostPopup = ({ post, onClose, className, onLikeClick }) => {
  const {
    avatar,
    name,
    lastName,
    content,
    image,
    comments,
    initialLikes,
    liked,
  } = post;

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
              {name} {lastName}
            </p>
          </div>

          <div className="popup-body">
            <p>{content}</p>
            {image && <img src={image} alt="post" className="popup-image" />}
          </div>

          <div className="popup-footer">
            <InteractButtons
              initialLikes={initialLikes}
              liked={liked}
              onLikeClick={onLikeClick}
            />
          </div>

          <div className="post-comment">
            <Comment comments={comments} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PostPopup;
