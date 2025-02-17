import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronRight, FaAngleLeft } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "./banner.scss";

import ImgBanner from "../../assets/comp-img.webp";

const Banner = () => {
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className="banner">
            <div className="banner__container">
                <div className="banner__wrapper">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={40}
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                    >
                        {[...Array(9)].map((_, index) => (
                            <SwiperSlide key={index} className="banner__img">
                                <img
                                    width={330}
                                    src={ImgBanner}
                                    alt={`Banner Slide ${index + 1}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="card__arrows">
                        <button className="card__left" onClick={handlePrev}>
                            <FaAngleLeft />
                        </button>
                        <button className="card__right" onClick={handleNext}>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
