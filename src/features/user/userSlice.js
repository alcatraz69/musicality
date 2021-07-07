import { createSlice } from "@reduxjs/toolkit";
import { loadUserAsync } from "./user.service";

const initialState = {
  userDetails: null,
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
        if (action.payload.success) {
          state.userDetails = action.payload.user;
          state.status = "success";
        }
      });
  },
});

export const selectUser = (state) => state.user;
export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
