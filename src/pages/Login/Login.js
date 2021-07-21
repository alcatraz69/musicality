import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../features/auth/auth.service";
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    try {
      let user = await dispatch(
        loginAsync({
          email,
          password,
        })
      );
      history.push("/");

      if (user.status === 200) {
        console.log("login success");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Musicality</h3>
          <span className="loginDesc">
            Share your musical work and connect with friends and the world
            around you on Musicality.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              name="email"
              required
              type="email"
              className="loginInput"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              name="password"
              required
              type="password"
              minLength="6"
              className="loginInput"
              value={userData.password}
              onChange={handleChange}
            />
            <button type="submit" className="loginButton">
              Log In
            </button>
            <span className="loginForgot">New to Musicality?</span>
            <Link
              to="/register"
              className="linkStyle"
              style={{ color: "white" }}
            >
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
