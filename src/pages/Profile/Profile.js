import "./Profile.css";
import Navbar from "../../components/NavBar/Navbar";
import Leftbar from "../../components/LeftBar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/RightBar/Rightbar";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getUser } from "../../api/api";
import { selectUser } from "../../features/user/userSlice";
import { selectPost } from "../../features/post/postSlice";
import { useSelector } from "react-redux";
import { getUserPosts } from "../../api/api";
import coverPic from "../../Asset/posts/3.jpeg";
import noAvatar from "../../Asset/noAvatar.png";

const Profile = () => {
  const { userDetails } = useSelector(selectUser);
  const { posts } = useSelector(selectPost);
  const { id } = useParams();
  const [profile, setProfile] = useState(userDetails);
  const [post, setPost] = useState(posts);
  useEffect(() => {
    async function fetchUser() {
      const response = await getUser(id);
      if (response) {
        setProfile(response.data);
      }
    }
    async function fetchUserPost() {
      const response = await getUserPosts(id);
      if (response) {
        setPost(response.data);
      }
    }
    if (id) {
      fetchUser();
      fetchUserPost();
    }
  }, [id]);

  useEffect(() => {
    if (!id) {
      setProfile(userDetails);
      setPost(posts);
    }
  }, [id, userDetails, posts]);
  return (
    <>
      <Navbar />
      <div className="profileContainer">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={profile?.coverPicture ? profile.coverPicture : coverPic}
                alt=""
                className="coverPic"
              />
              <img
                src={
                  profile?.profilePicture ? profile.profilePicture : noAvatar
                }
                alt=""
                className="profilePic"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{profile?.name}</h4>
              <span className="profileInfoDesc">{profile?.about}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed posts={post} />
            <Rightbar profile={profile} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
