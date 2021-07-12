import "./Rightbar.css";
import { BsThreeDots } from "react-icons/bs";
import gift from "../../Asset/gift.png";
import mad from "../../Asset/mad.png";
import pic8 from "../../Asset/user/8.jpeg";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { useState, useEffect } from "react";
import {
  unfollowUserAsync,
  followUserAsync,
} from "../../features/user/user.service";
import noAvatar from "../../Asset/noAvatar.png";

const Rightbar = ({ profile }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userDetails } = useSelector(selectUser);
  const [followed, setFollowed] = useState(false);
  const friends = userDetails?.following;
  const profileFriends = profile?.following;

  useEffect(() => {
    friends?.map((friend) => {
      if (friend?._id === profile?._id) {
        return setFollowed(true);
      } else {
        return null;
      }
    });
  }, [profile?._id, friends]);

  const handleClick = async () => {
    try {
      if (followed) {
        await dispatch(unfollowUserAsync(id));
      } else {
        await dispatch(followUserAsync(id));
      }
    } catch (error) {}
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
            <span className="rightbarInfoValue">{profile.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{profile.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Interests:</span>
            <span className="rightbarInfoValue">{profile.interest}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {profileFriends?.map((friend) => {
            return (
              <Link
                to={`/profile/${friend._id}`}
                style={{ textDecoration: "none", color: "Black" }}
              >
                <div className="rightbarFollowing" key={friend._id}>
                  <img
                    src={
                      friend?.profilePicture ? friend.profilePicture : noAvatar
                    }
                    alt=""
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">{friend.name}</span>
                </div>
              </Link>
            );
          })}
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
