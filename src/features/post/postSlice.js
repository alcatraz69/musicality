import { createSlice } from "@reduxjs/toolkit";
import {
  getPostsAsync,
  getTimelineAsync,
  createPostAsync,
  likePostAsync,
  deletePostAsync,
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
        const timelinePostIndex = state.timeline.findIndex(
          (post) => post._id === action.payload._id
        );
        if (timelinePostIndex !== -1) {
          state.timeline[timelinePostIndex].likes = action.payload.likes;
        }
        const postIndex = state.posts.findIndex(
          (post) => post._id === action.payload._id
        );
        if (postIndex !== -1) {
          state.posts[postIndex].likes = action.payload.likes;
        }
      })
      .addCase(likePostAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deletePostAsync.pending, (state) => {
        state.status = "posts-loading";
      })
      .addCase(deletePostAsync.fulfilled, (state, action) => {
        state.status = "success";
        const postIndex = state.posts.findIndex(
          (post) => post._id === action.meta.arg
        );
        if (postIndex !== -1) {
          state.posts.splice(postIndex, 1);
        }
      })
      .addCase(deletePostAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectPost = (state) => state.post;
export const { resetPosts } = postSlice.actions;
export default postSlice.reducer;
