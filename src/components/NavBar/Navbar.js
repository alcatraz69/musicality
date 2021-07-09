import "./Navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io";
import { GiMusicSpell } from "react-icons/gi";
import { Link } from "react-router-dom";
import { logoutUser } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

const Navbar = () => {
  const { userDetails } = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(logoutUser());
    history.push("/login");
  };
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <GiMusicSpell />
            Musicality
          </span>
        </Link>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <BiSearchAlt2 className="searchIcon" />
          <input type="text" placeholder="Search " className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarIconItem">
          <BsFillPersonPlusFill className="rightIcon" />
          <span className="iconBadge">1</span>
        </div>
        <div className="navbarIconItem">
          <IoMdChatboxes className="rightIcon" />
          <span className="iconBadge">2</span>
        </div>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <img src={userDetails?.profilePicture} alt="" className="userImage" />
        </Link>
        <p onClick={clickHandler}>logout</p>
      </div>
    </div>
  );
};

export default Navbar;
