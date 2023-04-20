import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, json } from "react-router-dom";
import { getUser, updateUser } from "./store/slices/authSlice";
import { getProducts } from "./store/slices/productSlice";
import cookieService from "./utils/cookie"

// PAGES
import Layout from "./components/layouts/Layout";
import Loader from "./components/common/Loader";
import { addToCart } from "./store/slices/cartSlice";

const Home = lazy(() => import("./components/pages/Home"))
const Login = lazy(() => import("./components/pages/Login"))
const ItemPage = lazy(() => import("./components/pages/ItemPage"))
const Checkout = lazy(() => import("./components/pages/Checkout"))

function App() {
    const dispatch = useDispatch();

    const onLoadGetUser = () => {
        const token = JSON.parse(localStorage.getItem("accessTokens"))
        dispatch(updateUser({ refresh: token.refresh }))
    }

    useEffect(() => {
        const cart = JSON.parse(cookieService.getCookie('cart'))
        if (cart) {
            dispatch(addToCart(cart))
        }
        onLoadGetUser()
        dispatch(getProducts());
        const intervalId = setInterval(() => {
            const tempToken = JSON.parse(localStorage.getItem("accessTokens"))
            if (tempToken) {
                dispatch(updateUser({ refresh: tempToken.refresh }))
            }
        }, 4 * 60 * 1000)
        return () => clearInterval(intervalId)
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/item/:slug/:id" element={<ItemPage />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Layout>
        </Suspense>
    );
}

export default App;
