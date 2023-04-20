import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cookieService from "../../utils/cookie"
import cartServices from "../services/cartService";

const initialState = {
    status: "",
    cart: [],
    totalItems: 0,
};

export const addToCartApi = createAsyncThunk(
    "cart/add",
    async (data, thunkAPI) => {
        try {
            const state = thunkAPI.getState
            const localToken = JSON.parse(localStorage.getItem("accessTokens"))
            const token = state.auth?.accessToken || localToken.access
            return await cartServices.addToCart(data, token);
        } catch (e) {
            const msg =
                (e.response && e.response.data && e.response.data.message) ||
                e.message ||
                e.toString();
            return thunkAPI.rejectWithValue(msg);
        }
    })

export const getCart = createAsyncThunk(
    "cart/get",
    async (thunkAPI) => {
        try {
            const state = thunkAPI.getState
            const localToken = JSON.parse(localStorage.getItem("accessTokens"))
            const token = state.auth?.accessToken || localToken.access
            return await cartServices.getCart(token);
        } catch (e) {
            const msg =
                (e.response && e.response.data && e.response.data.message) ||
                e.message ||
                e.toString();
            return thunkAPI.rejectWithValue(msg);
        }
    })

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, actions) => {
            state.status = "added";
            state.cart = actions.payload;
            state.totalItems = actions.payload.map(item => item.quantity).reduce((a, b) => a + b)
        },
        clearCart: (state) => {
            Object.assign(state, initialState)
            cookieService.deleteCookie('cart')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCartApi.pending, (state) => {
                state.status = "pending"
            })
            .addCase(addToCartApi.fulfilled, (state, action) => {
                state.status = "fulfilled"
                console.log(action)
            })
            .addCase(addToCartApi.rejected, (state, action) => {
                state.status = "rejected"
                console.log(action)
            })
            .addCase(getCart.pending, (state) => {
                state.status = "pending"
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.cart = action.payload
            })
            .addCase(getCart.rejected, (state) => {
                state.status = "rejected"
            })
    },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
