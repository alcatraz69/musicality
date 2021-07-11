import "./CreatePost.css";
import { FcAddImage } from "react-icons/fc";
import { FaSmileWink } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { useState, useEffect } from "react";
import { uploadPost } from "../../api/api";
import { createPostAsync } from "../../features/post/post.service";
import { useDispatch } from "react-redux";
import noAvatar from "../../Asset/noAvatar.png";

const CreatePost = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector(selectUser);
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const user = userDetails?._id;
  useEffect(() => {
    if (imgUrl) {
      const finalUpload = async () => {
        await dispatch(
          createPostAsync({
            user,
            desc,
            img: imgUrl,
          })
        );
      };
      finalUpload();
    }
  }, [imgUrl, user, desc, dispatch]);
  const submitPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    file && formData.append("file", file);
    formData.append("upload_preset", "musicality");
    formData.append("cloud_name", "premcloud");
    if (file) {
      const response = await uploadPost(formData);
      setImgUrl(response?.data?.url);
    } else {
      setImgUrl("");
    }
  };
  return (
    <div className="createPostContainer">
      <div className="createPostTop">
        <img
          src={
            userDetails?.profilePicture ? userDetails.profilePicture : noAvatar
          }
          alt=""
          className="userIcon"
        />
        <input
          placeholder="What's on your mind?"
          className="createPostInput"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <hr className="createPostHr" />
      {file && (
        <div className="postImgContainer">
          <img
            src={URL.createObjectURL(file)}
            alt=""
            className="postImgDisplay"
          />
          <MdCancel className="postImgCancel" onClick={() => setFile(null)} />
        </div>
      )}
      <form className="createPostBottom" onSubmit={submitPost}>
        <label htmlFor="file" className="createPostOption">
          <FcAddImage className="shareIcon" />
          <span className="createPostText">Photo/Video</span>
          <input
            type="file"
            id="file"
            accept=".png,.jpeg,.jpg"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
        <div className="createPostOption">
          <FaSmileWink style={{ color: "goldenrod" }} className="shareIcon" />
          <span className="createPostText">Feelings</span>
        </div>
        <div className="createPostOption">
          <ImLocation style={{ color: "green" }} className="shareIcon" />
          <span className="createPostText">Location</span>
        </div>
        <button type="submit" className="postBtn">
          Post!
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
