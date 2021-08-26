import "./Navbar.css";
import { useState, useEffect, useCallback } from "react";
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
import noAvatar from "../../Asset/noAvatar.png";
import { searchUser } from "../../api/api";

const Navbar = () => {
  const { userDetails } = useSelector(selectUser);
  const [enteredWord, setEnteredWord] = useState("");
  const [filteredata, setFilteredData] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(logoutUser());
    history.push("/login");
  };

  const searchUserCall = useCallback(
    async (username) => {
      const result = await searchUser(username);
      setFilteredData(result.data);
      if (enteredWord === "") {
        setFilteredData([]);
      }
    },
    [enteredWord]
  );

  useEffect(() => {
    const timer = setTimeout(() => searchUserCall(enteredWord), 600);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredWord, searchUserCall]);

  const handleChange = (e) => {
    let searchWord = e.target.value;
    setEnteredWord(searchWord);

    if (searchWord === "") {
      setFilteredData([]);
    }
  };

  const handleSearchItemClick = (e) => {
    setFilteredData([]);
    setEnteredWord("");
  };
  return (
    <>
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
            <input
              type="text"
              placeholder="Search user"
              value={enteredWord}
              onChange={handleChange}
              className="searchInput"
            />
          </div>
          {filteredata.length !== 0 && (
            <div className="searchResult">
              {filteredata.map((item, i) => {
                return (
                  <Link
                    to={`/profile/${item._id}`}
                    key={i}
                    className="linkStyle"
                  >
                    <div className="searchItem" onClick={handleSearchItemClick}>
                      <img
                        src={
                          item.profilePicture ? item.profilePicture : noAvatar
                        }
                        alt="dp"
                        className="userImageSide"
                      />
                      <p style={{ marginLeft: "20px" }}> {item.name} </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
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
            <img
              src={
                userDetails?.profilePicture
                  ? userDetails.profilePicture
                  : noAvatar
              }
              alt=""
              className="userImage"
            />
          </Link>
          <p onClick={clickHandler}>logout</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
