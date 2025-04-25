import Wrapper from "./PostWrapper";
import InteractButtons from "../../../Home/components/InteractButtons";
import Comment from "../../../Home/components/Comment";
import { useLike } from "../../../../components";

const Post = ({
  post,
  comments,
  onLoadMore,
  canLoadMore,
  addComment,
  deleteComment,
  postId,
}) => {
  const { likes, liked, handleLikeClick } = useLike(
    post.id,
    post.initialLikes,
    post.isLiked
  );

  return (
    <Wrapper>
      <div className="share">
        <div className="header">
          <img src={post.avatar} alt="avatar" className="avatar" />
          <p>{post.username}</p>
        </div>
        <div className="body">
          <p>{post.content}</p>
          {post.image && <img src={post.image} alt="post" className="image" />}
        </div>
        <div className="footer">
          <InteractButtons
            initialLikes={likes}
            liked={liked}
            onLikeClick={handleLikeClick}
            postId={post.id}
          />
        </div>

        <div className="post-comment">
          <Comment
            comments={comments}
            postId={post.id}
            addComment={addComment}
            deleteComment={deleteComment}
          />
          {canLoadMore && (
            <button onClick={onLoadMore} className="load-more-btn">
              Tải thêm bình luận
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Post;
