import "./Register.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAsync } from "../../features/auth/auth.service";
import { useHistory, Link } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = userData;
    try {
      let user = await dispatch(
        registerAsync({
          name,
          email,
          password,
          cpassword,
        })
      );

      if (user) {
        console.log("register success");
        history.push("/");
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
          <form className="registerBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              name="name"
              required
              className="loginInput"
              value={userData.name}
              onChange={handleChange}
            />
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
            <input
              placeholder="Password Again"
              name="cpassword"
              required
              type="password"
              minLength="6"
              className="loginInput"
              value={userData.cpassword}
              onChange={handleChange}
            />
            <button type="submit" className="loginButton">
              Sign Up
            </button>
            <span className="loginForgot">Already on Musicality?</span>
            <Link to="/login" className="linkStyle">
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
