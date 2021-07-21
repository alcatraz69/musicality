import { createSlice } from "@reduxjs/toolkit";
import {
  loadUserAsync,
  updateUserAsync,
  followUserAsync,
  unfollowUserAsync,
  getUserSuggestionsAsync,
} from "./user.service";

const initialState = {
  userDetails: null,
  suggestions: null,
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: () => {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadUserAsync.pending, (state) => {
        state.status = "user-loading";
      })
      .addCase(loadUserAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.userDetails = action.payload;
          state.status = "success";
        }
      })
      .addCase(loadUserAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getUserSuggestionsAsync.pending, (state) => {
        state.status = "user-loading";
      })
      .addCase(getUserSuggestionsAsync.fulfilled, (state, action) => {
        if (action) {
          state.suggestions = action.payload;
          state.status = "success";
        }
      })
      .addCase(getUserSuggestionsAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "user-loading";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        if (action.meta) {
          const { profilePicture, city, interests, about, from } =
            action.meta.arg;
          state.userDetails.profilePicture = profilePicture;
          state.userDetails.city = city;
          state.userDetails.interests = interests;
          state.userDetails.about = about;
          state.userDetails.from = from;
          state.status = "success";
        }
      })
      .addCase(updateUserAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(followUserAsync.pending, (state) => {
        state.status = "user-loading";
      })
      .addCase(followUserAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.userDetails.following = action.payload.following;
          state.status = "success";
        }
      })
      .addCase(unfollowUserAsync.pending, (state) => {
        state.status = "user-loading";
      })
      .addCase(unfollowUserAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.userDetails.following = action.payload.following;
          state.status = "success";
        }
      });
  },
});

export const selectUser = (state) => state.user;
export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
