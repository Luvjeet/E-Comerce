import { createSlice } from "@reduxjs/toolkit";
import cookieService from "../../utils/cookie"
//import getServices from "../services/getService";

const initialState = {
  status: "",
  cart: [],
  totalItems: 0,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      state.status = "added";
      state.cart = actions.payload;
      state.totalItems = actions.payload.map(item => item.quantity).reduce((a, b) => a + b)
    },
    clearCart: (state)=>{
      Object.assign(state,initialState)
      cookieService.deleteCookie('cart')
    }
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
