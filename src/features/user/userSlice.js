import { createSlice } from "@reduxjs/toolkit";
import { loadUserAsync, loadUserFrndAsync } from "./user.service";

const initialState = {
  userDetails: null,
  userFriends: null,
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
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
      .addCase(loadUserFrndAsync.pending, (state) => {
        state.status = "user-loading";
      })
      .addCase(loadUserFrndAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.userFriends = action.payload;
          state.status = "success";
        }
      })
      .addCase(loadUserFrndAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectUser = (state) => state.user;
export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
