import { createAsyncThunk } from "@reduxjs/toolkit";
import { register, login } from "../../api/api";

export const loginAsync = createAsyncThunk("auth/loginUser", async (user) => {
  try {
    const response = await login(user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const registerAsync = createAsyncThunk(
  "auth/registerUser",
  async (user) => {
    try {
      const response = await register(user);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
