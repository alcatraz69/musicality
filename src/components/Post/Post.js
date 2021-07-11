import "./Post.css";
import { BsThreeDots } from "react-icons/bs";
import { format } from "timeago.js";
import like from "../../Asset/like.png";
import heart from "../../Asset/heart.png";
import { useDispatch } from "react-redux";
import { likePostAsync } from "../../features/post/post.service";
const Post = ({ post }) => {
  const dispatch = useDispatch();
  const likeHandler = async () => {
    try {
      await dispatch(likePostAsync(post._id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="postContainer">
      <div className="postTop">
        <div className="postTopLeft">
          <img
            src={post?.user?.profilePicture}
            alt=""
            className="postProfileImg"
          />
          <span className="postUserName">{post?.user?.name}</span>
          <span className="postDate">{format(post?.createdAt)}</span>
        </div>
        <div className="postTopRight">
          <BsThreeDots style={{ fontSize: "20px" }} />
        </div>
      </div>
      <div className="postCenter">
        <span className="postCaption">{post?.desc}</span>
        <img src={post.img} alt="" className="postImg" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img src={like} alt="" className="likeBtn" onClick={likeHandler} />
          <img src={heart} alt="" className="likeBtn" />
          <span className="postLikes">{post.likes.length} likes</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">5 comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
