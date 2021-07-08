import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

const config = {
  headers: {
    authorization:
      "Bearer " + JSON.parse(localStorage.getItem("MusicalityAuth")).token,
  },
};

export const register = ({ name, email, password, cpassword }) =>
  API.post("/auth/register", {
    name,
    email,
    password,
    cpassword,
  });

export const login = ({ email, password }) =>
  API.post("/auth/login", {
    email,
    password,
  });

export const getUser = () => API.get("/user/getuser", config);

export const getUserPosts = () => API.get("/post/getuserpost", config);
