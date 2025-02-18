import React from "react";
import { Route, Routes } from "react-router";
import Admin from "../pages/Admin/admin";
import MainPage from "../components/MainPage/home";
import About from "../pages/About/about";
import Footer from "../components/Footer/footer";
import Popular from "../pages/Popular/popular";
import Login from "../pages/Login/login";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/footer" element={<Footer />} />
        </Routes>
    );
};

export default Router;
