import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "./features/auth/authSlice";
import { loadUserAsync } from "./features/user/user.service";
function App() {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch;
  useEffect(() => {
    (async () => {
      if (auth.isLoggedIn) {
        console.log("isLoggedIn:", auth.isLoggedIn);
        const response = await dispatch(loadUserAsync());
        console.log(response);
      }
    })();
  }, [auth.isLoggedIn, dispatch]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
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
