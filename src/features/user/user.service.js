import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../api/api";

export const loadUserAsync = createAsyncThunk("user/getUser", async () => {
  try {
    const response = await getUser();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
