import React from "react";
import Router from "./router/router";
import { ToastContainer } from "react-toastify";
import { Context } from "./components/Contex/contex";

const theme = {
    primaryColor: "#007bff",
    secondaryColor: "#0056b3",
    backgroundColor: "#f4f4f4",
    textColor: "#333",
};

const App = () => {
    return (
        <Context>
            <ToastContainer />
            <Router />
        </Context>
    );
};

export default App;
