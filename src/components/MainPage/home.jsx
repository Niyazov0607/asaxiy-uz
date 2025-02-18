import React from "react";
import Navbar from "../Navbar/navbar";
import Card from "../Cards/card";
import Banner from "../Banner/banner";
import HomeCards from "../HomeCards/home";
import CardTwo from "../CardTwo/cardTwo";
import Footer from "../Footer/footer";

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Card />
            <Banner />
            <HomeCards />
            <CardTwo />
            <Footer/>
        </div>
    );
};

export default Homepage;
