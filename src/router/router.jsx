import React from "react";
import { Route, Routes } from "react-router";
import Admin from "../pages/Admin/admin";
import MainPage from "../components/MainPage/home";
import About from "../pages/About/about";
import Footer from "../components/Footer/footer";
import Popular from "../pages/Popular/popular";
import Login from "../pages/Login/login";
import Product from "../pages/Product/product";
import Cart from "../pages/Cart/cart";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
                path="/product/:id"
                element={<Product key={window.location.pathname} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/footer" element={<Footer />} />
        </Routes>
    );
};

export default Router;
