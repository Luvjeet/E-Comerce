import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "../services/authService";

const initialState = {
  userExists: false,
  accessToken: null,
  status: "loading",
  message: "",
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      return await authServices.loginUser(data);
    } catch (e) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.status = "fulfilled";
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
