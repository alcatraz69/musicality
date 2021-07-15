import "./Post.css";
import { BsThreeDots } from "react-icons/bs";
import { format } from "timeago.js";
import like from "../../Asset/like.png";
import heart from "../../Asset/heart.png";
import { useDispatch, useSelector } from "react-redux";
import {
  likePostAsync,
  deletePostAsync,
  getTimelineAsync,
} from "../../features/post/post.service";
import { useState } from "react";
import { selectUser } from "../../features/user/userSlice";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { userDetails } = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isCurrentUser = () => post.user._id === userDetails._id;
  const likeHandler = () => {
    dispatch(likePostAsync(post?._id));
  };

  const deleteHandler = async () => {
    await dispatch(deletePostAsync(post?._id));
    dispatch(getTimelineAsync());
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
          <Link to={`/profile/${post?.user?._id}`} className="linkStyle">
            <span className="postUserName">{post?.user?.name}</span>
          </Link>
          <span className="postDate">{format(post?.createdAt)}</span>
        </div>
        <div className="postTopRight">
          <BsThreeDots
            style={{ fontSize: "20px" }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="postOptions"
          />
          {isOpen && isCurrentUser() && (
            <div id="postOptions" className="postOptionsContent">
              <div onClick={deleteHandler}>Delete</div>
            </div>
          )}
        </div>
      </div>

      <div className="postCenter">
        <div className="postCaption">{post?.desc}</div>
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
