import "./Leftbar.css";
import { GoHome } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { BsNewspaper } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="usercard">
        <img src="/Asset/user/4.jpeg" alt="" className="userImageSide" />
        <div className="userDetails">
          <p className="name">Alexandra Borke</p>
          <p className="username">@alexsunshine</p>
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
        <img src="/Asset/ad.png" alt="" className="adImg" />
      </div>
    </div>
  );
};

export default Leftbar;
