import React from "react";
import Router from "./router/router";
import { ToastContainer } from "react-toastify";
import Navbar from "../src/components/Navbar/navbar";
import Card from "../src/components/Cards/card";
import Banner from "../src/components/Banner/banner";
import Home from "../src/components/HomeCards/home";
import CardTwo from "../src/components/CardTwo/cardTwo";
import GoodWell from "../src/components/Brand/brand";
import Footer from "../src/components/Footer/footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <Card />
            <Banner />
            <Home />
            <CardTwo />
            <GoodWell />
            <Footer />
            <ToastContainer />
            <Router />
        </div>
    );
};

export default App;
