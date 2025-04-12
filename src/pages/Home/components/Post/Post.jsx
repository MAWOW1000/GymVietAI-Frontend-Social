import { useState, useRef } from "react";
import { IoIosMore } from "react-icons/io";
import Wrapper from "./PostWrapper";
import DropdownMenu from "../DropdownMenu";
import InteractButtons from "../InteractButtons";
import PostPopup from "../PostPopup/PostPopup";

const Post = ({ post }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false); //popup post
  const [likes, setLikes] = useState(post.initialLikes); //tổng số lượt like
  const [liked, setLiked] = useState(false); //check like chưa

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
          <img src={post.avatar} alt="avatar" />
          <p>
            {post.name} {post.lastName}
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
          <p>{post.content}</p>
          <img src={post.image} alt="post" />
        </div>

        {/* interact buttons */}
        <InteractButtons
          initialLikes={likes}
          liked={liked}
          onLikeClick={handleLikeClick}
          onCommentClick={handleCommentClick}
          postId={post.id}
        />
      </div>

      {/* popup */}
      {popupOpen && (
        <PostPopup
          post={{
            ...post,
            initialLikes: likes, // ghi đè lại số like hiện tại
            liked: liked,
          }}
          onClose={() => setPopupOpen(false)}
          className={popupOpen ? "active" : ""}
          onLikeClick={handleLikeClick}
        />
      )}
    </Wrapper>
  );
};

export default Post;
