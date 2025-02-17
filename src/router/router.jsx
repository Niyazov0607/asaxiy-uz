import React from "react";
import { Route, Routes } from "react-router";
import Admin from "../pages/Admin/admin";

const Router = () => {
    return (
        <Routes>
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
};

export default Router;
