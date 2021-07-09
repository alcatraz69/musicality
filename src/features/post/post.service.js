import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserPosts, getTimelinePosts } from "../../api/api";

export const getPostsAsync = createAsyncThunk(
  "post/getUserPosts",
  async (id) => {
    try {
      const response = await getUserPosts(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getTimelineAsync = createAsyncThunk(
  "post/getTimelinePosts",
  async () => {
    try {
      const response = await getTimelinePosts();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
