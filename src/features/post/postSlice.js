import { createSlice } from "@reduxjs/toolkit";
import { getPostsAsync } from "./post.service";

const initialState = {
  posts: [],
  status: "idle",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    resetPosts: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.pending, (state) => {
        state.status = "posts-loading";
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.posts = action.payload;
      })
      .addCase(getPostsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectPost = (state) => state.post;
export const { resetPosts } = postSlice.actions;
export default postSlice.reducer;
