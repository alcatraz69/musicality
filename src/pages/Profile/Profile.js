import "./Profile.css";
import Navbar from "../../components/NavBar/Navbar";
import Leftbar from "../../components/LeftBar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/RightBar/Rightbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profileContainer">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="/Asset/posts/3.jpeg" alt="" className="coverPic" />
              <img src="/Asset/user/1.jpeg" alt="" className="profilePic" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Alexandra Borke</h4>
              <span className="profileInfoDesc">Hello Friends! </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
