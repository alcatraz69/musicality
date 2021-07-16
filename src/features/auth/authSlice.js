import { createSlice } from "@reduxjs/toolkit";
import { loginAsync, registerAsync } from "./auth.service";

export const isLoggedInLocally = () => {
  if (localStorage.getItem("MusicalityAuth")) {
    return true;
  } else {
    return false;
  }
};

const initialState = {
  isLoggedIn: isLoggedInLocally(),
  status: "idle",
};

const addTokenToStorage = (token) => {
  localStorage.setItem(
    "MusicalityAuth",
    JSON.stringify({ isLoggedIn: true, token: token })
  );
};

const removeToken = () => {
  localStorage.removeItem("MusicalityAuth");
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      removeToken();
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        addTokenToStorage(action.payload?.token);
        state.isLoggedIn = true;
        state.status = "success";
      })
      .addCase(registerAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        addTokenToStorage(action.payload?.token);
        state.isLoggedIn = true;
        state.status = "success";
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectAuth = (state) => state.auth;
export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
