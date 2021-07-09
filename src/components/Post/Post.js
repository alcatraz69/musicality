import "./Post.css";
import { BsThreeDots } from "react-icons/bs";
import { format } from "timeago.js";
import like from "../../Asset/like.png";
import heart from "../../Asset/heart.png";
const Post = ({ post }) => {
  return (
    <div className="postContainer">
      <div className="postTop">
        <div className="postTopLeft">
          <img
            src={post.user.profilePicture}
            alt=""
            className="postProfileImg"
          />
          <span className="postUserName">{post.user.name}</span>
          <span className="postDate">{format(post.createdAt)}</span>
        </div>
        <div className="postTopRight">
          <BsThreeDots style={{ fontSize: "20px" }} />
        </div>
      </div>
      <div className="postCenter">
        <span className="postCaption">{post.desc}</span>
        <img src={post.img} alt="" className="postImg" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img src={like} alt="" className="likeBtn" />
          <img src={heart} alt="" className="likeBtn" />
          <span className="postLikes">69 people like it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">5 comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
