import "./CreatePost.css";
import { FcAddImage } from "react-icons/fc";
import { FaSmileWink } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

const CreatePost = () => {
  const { userDetails } = useSelector(selectUser);
  return (
    <div className="createPostContainer">
      <div className="createPostTop">
        <img src={userDetails?.profilePicture} alt="" className="userIcon" />
        <input placeholder="What's on your mind?" className="createPostInput" />
      </div>
      <hr className="createPostHr" />
      <div className="createPostBottom">
        <div className="createPostOption">
          <FcAddImage className="shareIcon" />
          <span className="createPostText">Photo/Video</span>
        </div>
        <div className="createPostOption">
          <FaSmileWink style={{ color: "goldenrod" }} className="shareIcon" />
          <span className="createPostText">Feelings</span>
        </div>
        <div className="createPostOption">
          <ImLocation style={{ color: "green" }} className="shareIcon" />
          <span className="createPostText">Location</span>
        </div>
        <button className="postBtn">Post!</button>
      </div>
    </div>
  );
};

export default CreatePost;
