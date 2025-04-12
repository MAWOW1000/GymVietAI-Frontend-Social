import Wrapper from "../assets/wrappers/PostWrapper";
import InteractButtons from "../pages/Home/components/InteractButtons";
import Comment from "../pages/Home/components/Comment";
import image from "../assets/images/post-img.jpg";

const Post = ({ post }) => {
  return (
    <Wrapper>
      <div className="share">
        <div className="header">
          <img src={post.avatar} alt="avatar" className="avatar" />
          <p>
            {post.name} {post.lastName}
          </p>
        </div>
        <div className="body">
          <p>{post.content}</p>
          {image && <img src={post.image} alt="post" className="image" />}
        </div>
        <div className="footer">
          <InteractButtons
            initialLikes={post.likes}
            liked={post.liked}
            onLikeClick={post.onLikeClick}
            postId={post.id}
          />
        </div>

        <div className="post-comment">
          <Comment comments={post.comments} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Post;
