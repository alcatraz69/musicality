import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser, getUserFriends } from "../../api/api";

export const loadUserAsync = createAsyncThunk("user/getUser", async () => {
  try {
    const response = await getCurrentUser();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const loadUserFrndAsync = createAsyncThunk(
  "user/getUserFriends",
  async () => {
    try {
      const response = await getUserFriends();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
