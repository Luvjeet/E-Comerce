import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "../services/authService";
import jwt_decode from "jwt-decode";

const initialState = {
  username: "",
  accessToken: null,
  status: "loading",
  authCompleted: false,
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
  reducers: {
    getUser: (state, action) => {
      const decoded = jwt_decode(action.payload.access);
      state.username = decoded.username;
      state.accessToken = decoded.access;
      state.authCompleted = true;
      state.status = "fulfilled";
    },
    logout: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem("accessTokens");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        localStorage.setItem("accessTokens", JSON.stringify(action.payload));
        const decoded = jwt_decode(action.payload.access);
        state.username = decoded.username;
        state.accessToken = action.payload.access;
        state.authCompleted = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const { getUser, logout } = authSlice.actions;

export default authSlice.reducer;
