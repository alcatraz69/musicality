import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserPosts } from "../../api/api";

export const getPostsAsync = createAsyncThunk("post/getUserPosts", async () => {
  try {
    const response = await getUserPosts();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
