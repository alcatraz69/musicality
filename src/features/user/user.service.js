import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  updateUser,
  followUser,
  unfollowUser,
} from "../../api/api";

export const loadUserAsync = createAsyncThunk("user/getUser", async () => {
  try {
    const response = await getCurrentUser();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateUserAsync = createAsyncThunk(
  "user/updateUserDetails",
  async (data) => {
    try {
      const response = await updateUser(data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const followUserAsync = createAsyncThunk(
  "user/followUser",
  async (id) => {
    try {
      const response = await followUser(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const unfollowUserAsync = createAsyncThunk(
  "user/unfollowUser",
  async (id) => {
    try {
      const response = await unfollowUser(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
