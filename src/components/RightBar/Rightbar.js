import "./Rightbar.css";
import { BsThreeDots } from "react-icons/bs";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/Asset/user/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/Asset/user/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/Asset/user/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/Asset/user/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/Asset/user/7.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/Asset/user/9.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  );
};

export default Rightbar;
