import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  register, updateName,
} from "./operations";

interface State {
  user: User;
  token: null | string;
  error: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}
interface User {
  name: null | string;
  email: null | string;
  id: null | string;
}

const initialState: State = {
  user: { name: null, email: null, id:null},
  token: null,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action: PayloadAction<any>) => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload.message;
        state.isRefreshing = false;

      })
      .addCase(updateName.pending, (state, action: PayloadAction<any>) => {
        state.isRefreshing = true;
      })
      .addCase(updateName.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(updateName.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload.message;
        state.isRefreshing = false;

      });
  
  },
});

export const authReducer = authSlice.reducer;
