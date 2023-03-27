import { createSlice } from "@reduxjs/toolkit";
//import getServices from "../services/getService";

const initialState = {
  status: "",
  cart: [],
  totalItems:0,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      state.status = "added";
      state.cart = actions.payload;
      state.totalItems = actions.payload.map(item=>item.quantity).reduce((a,b)=>a+b)
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
