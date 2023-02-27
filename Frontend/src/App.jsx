import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./store/slices/authSlice";
import { getProducts } from "./store/slices/productSlice";

// PAGES
import Layout from "./components/layouts/Layout";
import Loader from "./components/common/Loader";

const Home = lazy(() => import("./components/pages/Home"));
const Login = lazy(() => import("./components/pages/Login"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessTokens");
    if (token) {
      dispatch(getUser(JSON.parse(token)));
    }
    dispatch(getProducts());
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
