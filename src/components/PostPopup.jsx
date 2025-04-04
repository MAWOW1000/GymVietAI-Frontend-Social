import { IoClose } from "react-icons/io5";
import Wrapper from "../assets/wrappers/PostPopupWrapper";
import InteractButtons from "./InteractButtons";
import Comment from "./Comment";

const PostPopup = ({
  avatar,
  name,
  lastName,
  content,
  image,
  onClose,
  className,
  comments,
  likes,
  liked, // Nhận trạng thái liked từ Post
  onLikeClick,
}) => {
  return (
    <Wrapper className={className}>
      {/* Bấm vào overlay để đóng */}
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          {/* Nút đóng popup */}
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
              initialLikes={likes}
              liked={liked}
              onLikeClick={onLikeClick} // Không cần xử lý sự kiện ở đây
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
