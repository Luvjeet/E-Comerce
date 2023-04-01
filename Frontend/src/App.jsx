import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
    import { getUser } from "./store/slices/authSlice";
import { getProducts } from "./store/slices/productSlice";
import cookieService from "./utils/cookie"

// PAGES
import Layout from "./components/layouts/Layout";
import Loader from "./components/common/Loader";
import { addToCart } from "./store/slices/cartSlice";

const Home = lazy(() => import("./components/pages/Home"))
const Login = lazy(() => import("./components/pages/Login"))
const ItemPage = lazy(() => import("./components/pages/ItemPage"))
const Checkout = lazy(()=>import("./components/pages/Checkout"))

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessTokens");
    const cart = JSON.parse(cookieService.getCookie('cart'))
    if (token) {
      dispatch(getUser(JSON.parse(token)));
    }
    if (cart){
      dispatch(addToCart(cart))
    }
    dispatch(getProducts());
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
