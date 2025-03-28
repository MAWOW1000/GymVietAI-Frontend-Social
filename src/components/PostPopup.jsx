import { IoClose } from "react-icons/io5";
import Wrapper from "../assets/wrappers/PostPopupWrapper";
import InteractButtons from "./InteractButtons";

const PostPopup = ({
  avatar,
  name,
  lastName,
  content,
  image,
  onClose,
  className,
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
            <InteractButtons />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PostPopup;
