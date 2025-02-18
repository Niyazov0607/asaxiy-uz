import React from "react";
import { Route, Routes } from "react-router";
import Admin from "../pages/Admin/admin";
import MainPage from "../components/MainPage/home";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
};

export default Router;
