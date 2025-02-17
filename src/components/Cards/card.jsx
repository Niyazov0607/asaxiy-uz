import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./card.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgPhone from "../../assets/card-img.webp";
import { FaChevronRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Card = () => {
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
            <div className="card">
                <p className="card__text">Super narx</p>
                <p className="card__text2">Barcha mahsulotlar</p>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={100}
                    slidesPerView={5.5}
                    navigation={false}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="card__data">
                                <div className="card__img">
                                    <img
                                        width={120}
                                        src={ImgPhone}
                                        alt={item.name}
                                    />
                                </div>
                                <h3 className="card__title">{item.name}</h3>
                                <p className="card__old-price">99 000 so'm</p>
                                <p className="card__new-price">
                                    {item.price} so'm
                                </p>

                                <button className="card__btn">28.02.25</button>
                            </div>
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
        </>
    );
};

export default Card;
