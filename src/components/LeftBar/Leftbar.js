import "./Leftbar.css";
import { GoHome } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { BsNewspaper } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import ad1 from "../../Asset/ad1.jpg";
import noAvatar from "../../Asset/noAvatar.png";

const Leftbar = () => {
  const { userDetails } = useSelector(selectUser);
  return (
    <div className="leftbar">
      <div className="usercard">
        <img
          src={
            userDetails?.profilePicture ? userDetails.profilePicture : noAvatar
          }
          alt=""
          className="userImageSide"
        />
        <div className="userDetails">
          <p className="name">{userDetails?.name}</p>
          <p className="username">{userDetails?.name}</p>
        </div>
      </div>

      <div className="leftbarListContainer">
        <ul className="leftbarList">
          <li className="leftbarListitem">
            <GoHome className="itemIcon" />
            <span className="itemText">Home</span>
          </li>
          <li className="leftbarListitem">
            <BsNewspaper className="itemIcon" />
            <span className="itemText">Feed</span>
          </li>
          <li className="leftbarListitem">
            <BsBookmarks className="itemIcon" />
            <span className="itemText">Saved</span>
          </li>
          <li className="leftbarListitem">
            <IoIosPeople className="itemIcon" />
            <span className="itemText">People</span>
          </li>
          <li className="leftbarListitem">
            <IoImageOutline className="itemIcon" />
            <span className="itemText">Photos</span>
          </li>
          <li className="leftbarListitem">
            <RiSettingsLine className="itemIcon" />
            <span className="itemText">Settings</span>
          </li>
        </ul>
      </div>

      <div className="adContainer">
        <img src={ad1} alt="" className="adImg" />
      </div>

      <div className="adContainer">
        <img src={ad1} alt="" className="adImg" />
      </div>
    </div>
  );
};

export default Leftbar;
