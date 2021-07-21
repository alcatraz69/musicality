import { useState, useEffect } from "react";
import "./Modal.css";
import { MdCancel } from "react-icons/md";
import { uploadPost } from "../../api/api";
import { useDispatch } from "react-redux";
import { updateUserAsync } from "../../features/user/user.service";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

const Modal = ({ show, setShow }) => {
  const { userDetails } = useSelector(selectUser);
  const dispatch = useDispatch();
  const [about, setAbout] = useState(userDetails?.about);
  const [city, setCity] = useState(userDetails?.city);
  const [from, setFrom] = useState(userDetails?.from);
  const [interests, setInterest] = useState(userDetails?.interests);
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (imgUrl) {
      const finalUpload = async () => {
        await dispatch(
          updateUserAsync({
            about,
            city,
            from,
            interests,
            profilePicture: imgUrl,
          })
        );
      };
      finalUpload();
    }
  }, [imgUrl, about, city, interests, from, dispatch]);

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
    setShow(!show);
    setFile(null);
  };

  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <form className="modal-content" onSubmit={submitPost}>
        <div className="modal-top">
          <p> Edit Profile</p>
          <button onClick={() => setShow(!show)}>x</button>
        </div>
        <div className="editProfileForm">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="">About:</label>
            <input
              type="text"
              placeholder="Enter something about you"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="">City:</label>
            <input
              type="text"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="">Form:</label>
            <input
              type="text"
              placeholder="Where are you from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="">Interests:</label>
            <input
              type="text"
              placeholder="What are your Interests"
              value={interests}
              onChange={(e) => setInterest(e.target.value)}
            />
          </div>
          {file && (
            <div className="profileImgContainer">
              <img
                src={URL.createObjectURL(file)}
                alt=""
                className="profileImgDisplay"
              />
              <MdCancel
                className="postImgCancel"
                onClick={() => setFile(null)}
              />
            </div>
          )}
          <div style={{ display: "none" }}>
            <input
              type="file"
              id="profilePic"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        </div>
        <div className="modal-top">
          <label htmlFor="profilePic"> Upload profile Picture</label>
          <button className="updateBtn" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
