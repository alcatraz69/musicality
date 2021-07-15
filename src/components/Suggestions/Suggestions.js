import "./Suggestions.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import noAvatar from "../../Asset/noAvatar.png";
import { Link } from "react-router-dom";
import {
  followUserAsync,
  getUserSuggestionsAsync,
} from "../../features/user/user.service";

const Suggestions = () => {
  const dispatch = useDispatch();
  const { suggestions } = useSelector(selectUser);
  const handleClick = async (id) => {
    try {
      await dispatch(followUserAsync(id));
      dispatch(getUserSuggestionsAsync());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="suggestionsContainer">
      <h1 className="suggestionHead">People you may know</h1>
      {suggestions?.map((person) => {
        return (
          <div className="suggestionItem" key={person._id}>
            <Link to={`/profile/${person._id}`} className="linkStyle">
              <div className="suggestionItemleft">
                <img
                  src={
                    person?.profilePicture ? person.profilePicture : noAvatar
                  }
                  className="suggestionUserIcon"
                  alt=""
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <span className="suggestionName">{person.name}</span>
                  <span className="suggestionAbout">{person.about}</span>
                </div>
              </div>
            </Link>
            <div className="suggestionItemRight">
              <button
                className="suggestionsBtn"
                onClick={() => handleClick(person._id)}
              >
                Follow
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
