import "./Rightbar.css";
import { BsThreeDots } from "react-icons/bs";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="birthdayContainer">
        <img src="/Asset/gift.png" alt="" className="bdayImg" />
        <span className="bdayText">
          <b>James Conner</b> and <b>2 others</b> have birthdays today
        </span>
      </div>

      <a
        href="https://musicflix.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="sponserContainer"
      >
        <img src="/Asset/mad.png" alt="" className="sponserImg" />
        <div className="sponserTxtContainer">
          <div className="sponserTxt">Best Music Playlists</div>
          <div className="sponserLink">musicflix.com</div>
        </div>
      </a>
      <div className="friendlistTitleContainer">
        <h4 className="friendsTitle">Friends</h4>
        <BsThreeDots style={{ marginRight: "50px" }} />
      </div>

      <ul className="friendList">
        <li className="friendItem">
          <div className="friendProfileImgContainer">
            <img src="/Asset/user/8.jpeg" alt="" className="postProfileImg" />
            <span className="onlineStatus"></span>
          </div>
          <span className="friendUserName">Zac Efron</span>
        </li>
      </ul>
    </div>
  );
};

export default Rightbar;
