import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://common-server-ldx7.onrender.com/api/entertainment";

export const register: any = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      
      const res = await axios.post("/auth/register", credentials);
  

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data);
      } else {
        return thunkAPI.rejectWithValue("An error occurred.");
      }
    }
  }
);

export const updateName: any = createAsyncThunk(
  "auth/update",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.patch("/auth/update", credentials);

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data);
      } else {
        return thunkAPI.rejectWithValue("An error occurred.");
      }
    }
  }
);


