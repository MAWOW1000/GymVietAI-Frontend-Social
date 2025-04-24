import { useState, useRef } from "react";
import { IoIosMore } from "react-icons/io";
import Wrapper from "./PostWrapper";
import DropdownMenu from "../DropdownMenu";
import InteractButtons from "../InteractButtons";
import PostPopup from "../PostPopup/PostPopup";
import { useLike } from "../../../../components";

const Post = ({ post, onDelete }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const { likes, liked, handleLikeClick } = useLike(
    post.id,
    Number(post.initialLikes) || Number(post.likeCount) || 0,
    post.isLiked
  );

  const buttonRef = useRef(null);

  const handleCommentClick = () => {
    setPopupOpen(true);
  };

  const mediaUrl = JSON.parse(post.mediaUrls || "[]")?.[0] || null;

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
            {post.displayName ||
              post.profile?.displayName ||
              post.username ||
              post.profile?.username}{" "}
            {post.lastName || ""}
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
            isOwner={post.isOwner}
            postId={post.id}
            onDelete={onDelete}
          />
        </div>

        {/* post content */}
        <div className="post-content">
          <p>{post.content}</p>
          {mediaUrl && (
            <img src={mediaUrl} alt="post" className="popup-image" />
          )}
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
            initialLikes: likes,
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
