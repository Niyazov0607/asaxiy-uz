import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./about.scss";

const About = () => {
    return (
        <div className="about">
            <Navbar />
            <p>
                lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                magni quaerat hic aspernatur nam consectetur. Deleniti, eum,
                tempora cumque aliquam quas blanditiis explicabo molestias
                eligendi illum dignissimos aperiam. Corporis, rem esse?
                Quibusdam, corporis velit maxime dicta necessitatibus quod
                officiis excepturi numquam earum omnis error perferendis labore
                nesciunt cum nemo commodi.
            </p>
            <Footer />
        </div>
    );
};

export default About;
