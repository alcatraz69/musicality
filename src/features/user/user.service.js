import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../api/api";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";

export const loadUserAsync = createAsyncThunk("user/getUser", async () => {
  const auth = useSelector(selectUser);
  const config = {
    headers: {
      authorization: "Bearer " + auth.authToken,
    },
  };
  try {
    const response = await getUser(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
