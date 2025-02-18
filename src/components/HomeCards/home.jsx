import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgPhone from "../../assets/card-img.webp";
import { FaChevronRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { HiMiniShoppingCart } from "react-icons/hi2";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HomeCards = () => {
    const [products, setProducts] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        async function productData() {
            try {
                const res = await axios.get("http://localhost:5000/products");
                console.log("Fetched data:", res.data);
                const data = res.data.data;
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        productData();
    }, []);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <>
            <div className="home">
                <div className="home__container">
                    <div className="home__wrapper">
                        <p className="home__text">Telefonlar va gadjetlar</p>
                        <p className="home__text2">Barcha mahsulotlar</p>

                        <Swiper
                            className="home__card"
                            ref={swiperRef}
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={25}
                            slidesPerView={5}
                            navigation={false}
                            pagination={{ clickable: true }}
                        >
                            {products.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="home__data">
                                        <div className="home__img">
                                            <img
                                                width={120}
                                                src={ImgPhone}
                                                alt={item.name}
                                            />
                                        </div>
                                        <h3 className="home__title">
                                            {item.name}
                                        </h3>
                                        <p className="home__star">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </p>
                                        <p className="home__old-price">
                                            99 000 so'm
                                        </p>
                                        <p className="home__new-price">
                                            {item.price} so'm
                                        </p>
                                        <div className="home__button">
                                            <button className="home__btn">
                                                695 900 so'm x 12oy
                                            </button>
                                        </div>
                                        <div className="home__btn1">
                                            <div>
                                                <button className="home__btn3">
                                                    Hoziroq xarid qilish
                                                </button>
                                            </div>
                                            <div className="home__shop">
                                                <HiMiniShoppingCart />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="home__arrows">
                            <button className="home__left" onClick={handlePrev}>
                                <FaAngleLeft />
                            </button>
                            <button
                                className="home__right"
                                onClick={handleNext}
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeCards;
