import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser, getUserFriends, updateUser } from "../../api/api";

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
  async (id) => {
    try {
      const response = await getUserFriends(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

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
