import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import People from "./pages/People/People";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "./features/auth/authSlice";
import {
  loadUserAsync,
  getUserSuggestionsAsync,
} from "./features/user/user.service";
import { getPostsAsync, getTimelineAsync } from "./features/post/post.service";
import { resetUser } from "./features/user/userSlice";
import { resetPosts } from "./features/post/postSlice";

function App() {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (auth.isLoggedIn) {
        const response = await dispatch(loadUserAsync());
        dispatch(getPostsAsync(response.payload?._id));
        dispatch(getUserSuggestionsAsync());
        dispatch(getTimelineAsync());
      } else {
        dispatch(resetUser());
        dispatch(resetPosts());
      }
    })();
  }, [auth.isLoggedIn, dispatch]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {auth.isLoggedIn ? <Home /> : <Login />}
        </Route>
        <Route path="/profile/:id">
          {auth.isLoggedIn ? <Profile /> : <Login />}
        </Route>
        <Route path="/profile">
          {auth.isLoggedIn ? <Profile /> : <Login />}
        </Route>
        <Route path="/people">{auth.isLoggedIn ? <People /> : <Login />}</Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
