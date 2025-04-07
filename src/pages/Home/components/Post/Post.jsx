import { useState, useRef } from "react";
import { IoIosMore } from "react-icons/io";
import Wrapper from "./PostWrapper";
import DropdownMenu from "../DropdownMenu";
import InteractButtons from "../InteractButtons";
import PostPopup from "../PostPopup/PostPopup";

const Post = ({
  avatar,
  name,
  lastName,
  content,
  image,
  comments,
  initialLikes,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const buttonRef = useRef(null);

  const handleCommentClick = () => {
    setPopupOpen(true);
  };

  const handleLikeClick = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <Wrapper style={{ width: "100%" }}>
      <div
        className="post-model"
        onClick={() => {
          console.log("Post clicked!");
          setPopupOpen(true);
        }}
      >
        <div className="post-user">
          <img src={avatar} alt="avatar" />
          <p>
            {name} {lastName}
          </p>
          <span
            className="more-icon"
            ref={buttonRef}
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((prev) => !prev);
            }}
          >
            <IoIosMore />
          </span>

          <DropdownMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            buttonRef={buttonRef}
          />
        </div>

        {/* post content */}
        <div className="post-content">
          <p>{content}</p>
          <img src={image} alt="post" />
        </div>

        {/* interact buttons */}
        <InteractButtons
          initialLikes={likes}
          liked={liked}
          onLikeClick={handleLikeClick}
          onCommentClick={handleCommentClick}
        />
      </div>

      {/* popup */}
      {popupOpen && (
        <PostPopup
          avatar={avatar}
          name={name}
          lastName={lastName}
          content={content}
          image={image}
          onClose={() => setPopupOpen(false)}
          className={popupOpen ? "active" : ""}
          comments={comments}
          likes={likes}
          liked={liked} // Truyền trạng thái liked vào PostPopup
          onLikeClick={handleLikeClick} // Truyền hàm onLikeClick vào PostPopup
        />
      )}
    </Wrapper>
  );
};

export default Post;
