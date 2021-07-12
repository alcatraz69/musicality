import { createSlice } from "@reduxjs/toolkit";
import {
  getPostsAsync,
  getTimelineAsync,
  createPostAsync,
  likePostAsync,
} from "./post.service";

const initialState = {
  posts: [],
  timeline: [],
  status: "idle",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    resetPosts: () => {
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
      })
      .addCase(getTimelineAsync.pending, (state) => {
        state.status = "posts-loading";
      })
      .addCase(getTimelineAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.timeline = action.payload;
      })
      .addCase(getTimelineAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(createPostAsync.pending, (state) => {
        state.status = "posts-loading";
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.posts = [action.payload, ...state.posts];
        // state.posts.unshift(action.payload.post);
      })
      .addCase(createPostAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(likePostAsync.pending, (state) => {
        state.status = "posts-loading";
      })
      .addCase(likePostAsync.fulfilled, (state, action) => {
        state.status = "success";
        console.log("see here", action);
      })
      .addCase(likePostAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectPost = (state) => state.post;
export const { resetPosts } = postSlice.actions;
export default postSlice.reducer;
