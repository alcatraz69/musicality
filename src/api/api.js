import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

const config = {
  headers: {
    authorization:
      "Bearer " + JSON.parse(localStorage.getItem("MusicalityAuth"))?.token,
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

export const getUser = (id) => API.get(`/user/getuser/${id}`, config);

export const getCurrentUser = () => API.get("/user/getcurrentuser", config);

export const getUserFriends = () => API.get("/user/getuserfriends", config);

export const getUserPosts = (id) => API.get(`/post/getuserpost/${id}`, config);

export const getTimelinePosts = () =>
  API.get("/post//getTimelinePosts", config);
