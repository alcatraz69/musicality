import "./Rightbar.css";
import { BsThreeDots } from "react-icons/bs";
import gift from "../../Asset/gift.png";
import mad from "../../Asset/mad.png";
import pic8 from "../../Asset/user/8.jpeg";
import pic1 from "../../Asset/user/1.jpeg";
import pic2 from "../../Asset/user/2.jpeg";
import pic3 from "../../Asset/user/3.jpeg";
import pic4 from "../../Asset/user/4.jpeg";
import pic7 from "../../Asset/user/7.jpeg";
import pic9 from "../../Asset/user/9.jpeg";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { useState, useEffect } from "react";
import { unfollowUser, followUser } from "../../api/api";

const Rightbar = ({ profile }) => {
  const { id } = useParams();
  const { userDetails } = useSelector(selectUser);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    setFollowed(userDetails?.following?.includes(id));
  }, [userDetails, id]);

  const handleClick = async () => {
    try {
      if (followed) {
        await unfollowUser(id);
      } else {
        await followUser(id);
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  };
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={gift} alt="" className="bdayImg" />
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
          <img src={mad} alt="" className="sponserImg" />
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
              <img src={pic8} alt="" className="postProfileImg" />
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
        {id && (
          <button className="followBtn" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
          </button>
        )}
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
            <span className="rightbarInfoKey">Interests:</span>
            <span className="rightbarInfoValue">Guitar,Voilin</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={pic1} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={pic2} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={pic3} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={pic4} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={pic7} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={pic9} alt="" className="rightbarFollowingImg" />
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
