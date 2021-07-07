import "./Navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io";
import { GiMusicSpell } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
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

        <img src="/Asset/user/4.jpeg" alt="" className="userImage" />
      </div>
    </div>
  );
};

export default Navbar;
