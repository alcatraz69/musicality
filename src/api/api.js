import axios from "axios";

const API = axios.create({
   baseURL: "https://musicality-backend.herokuapp.com",
  //baseURL: "http://localhost:5000",
});

const config = () => {
  return {
    headers: {
      authorization:
        "Bearer " + JSON.parse(localStorage.getItem("MusicalityAuth"))?.token,
    },
  };
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

export const getUser = (id) => API.get(`/user/getuser/${id}`, config());

export const getUserSuggestions = () =>
  API.get("/user/getUserSuggestions", config());

export const getCurrentUser = () => API.get("/user/getcurrentuser", config());

export const getUserPosts = (id) =>
  API.get(`/post/getuserpost/${id}`, config());

export const getTimelinePosts = () =>
  API.get("/post/getTimelinePosts", config());

export const followUser = (id) =>
  API.put(`/user/followuser/${id}`, {}, config());
export const unfollowUser = (id) =>
  API.put(`/user/unfollowuser/${id}`, {}, config());

export const uploadPost = (data) =>
  axios.post("https://api.cloudinary.com/v1_1/premcloud/image/upload", data);

export const uploadPostToServer = (data) => API.post("/post/createPost", data);

export const likePost = (id) => API.put(`/post/likePost/${id}`, {}, config());

export const deletePost = (id) =>
  API.delete(`/post/deletePost/${id}`, {}, config());

export const updateUser = (data) =>
  API.put("/user/updateuser", { data }, config());
