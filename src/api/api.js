import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

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

export const getCurrentUser = () => API.get("/user/getcurrentuser", config());

export const getUserFriends = () => API.get("/user/getuserfriends", config());

export const getUserPosts = (id) =>
  API.get(`/post/getuserpost/${id}`, config());

export const getTimelinePosts = () =>
  API.get("/post//getTimelinePosts", config());

export const followUser = (id) =>
  API.put(`/user/followuser/${id}`, {}, config());
export const unfollowUser = (id) =>
  API.put(`/user/unfollowuser/${id}`, {}, config());

export const uploadPost = (data) =>
  axios.post("https://api.cloudinary.com/v1_1/premcloud/image/upload", data);

export const uploadPostToServer = (data) => API.post("/post/createPost", data);
// API.post("/post//createPost", data);
// export const submitPost = async (post: FormData) => {
// axios.post("https://api.cloudinary.com/v1_1/premcloud",data)
//   const token = getAuthToken();
//   const response = await axios.post(
//     "https://dev-share-api.hntejas.repl.co/post",
//     post,
//     {
//       headers: {
//         Authorization: token,
//         "Content-type": "multipart/form-data",
//       },
//     }
//   );
//   return response;
// };
