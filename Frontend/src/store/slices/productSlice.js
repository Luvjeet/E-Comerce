import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getServices from "../services/getService";

const initialState = {
  status: "",
  allProducts: [],
};

export const getProducts = createAsyncThunk(
  "get/products",
  async (data, thunkAPI) => {
    try {
      return await getServices.getProducts();
    } catch (error) {
      const msg =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const productSlice = createSlice({
  name: "get",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.allProducts = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const getServiceActions = productSlice.actions;

export default productSlice.reducer;
