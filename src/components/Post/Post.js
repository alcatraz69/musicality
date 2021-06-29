import "./Post.css";
import { BsThreeDots } from "react-icons/bs";
const Post = () => {
  return (
    <div className="postContainer">
      <div className="postTop">
        <div className="postTopLeft">
          <img src="/Asset/user/8.jpeg" alt="" className="postProfileImg" />
          <span className="postUserName">Alexandra Kobu</span>
          <span className="postDate">5 mins ago</span>
        </div>
        <div className="postTopRight">
          <BsThreeDots style={{ fontSize: "20px" }} />
        </div>
      </div>
      <div className="postCenter">
        <span className="postCaption">Hey! Its my first post :)</span>
        <img src="/Asset/posts/5.jpeg" alt="" className="postImg" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img src="/Asset/like.png" alt="" className="likeBtn" />
          <img src="/Asset/heart.png" alt="" className="likeBtn" />
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
