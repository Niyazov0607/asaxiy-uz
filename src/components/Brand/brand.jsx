import React from "react";
import "./brand.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import GoodWell from "../../assets/goodwell.webp";
import Artel from "../../assets/arter.webp";
import Apple from "../../assets/apple.webp";
import Sumsung from "../../assets/sumsung.webp";

const brands = [
    GoodWell,
    GoodWell,
    GoodWell,
    Sumsung,
    GoodWell,
    Sumsung,
    Sumsung,
    Sumsung,
    GoodWell,
    Sumsung,
];

const Brand = () => {
    return (
        <div className="brand">
            <div className="brand__container">
                <div className="brand__wrapper">
                    <p className="brand__title">Mashhur brandlar</p>
                    <Swiper
                        className="brand__logo"
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={7.5} // Adjust for better layout
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                    >
                        {brands.map((brand, index) => (
                            <SwiperSlide key={index} className="brand__img">
                                <img
                                    width={120}
                                    src={brand}
                                    alt={`Brand ${index + 1}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Brand;
