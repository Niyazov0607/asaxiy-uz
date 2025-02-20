import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./cardTwo.scss";
import ImgPhone from "../../assets/card-img.webp";
import { FaStar } from "react-icons/fa6";
import { HiMiniShoppingCart } from "react-icons/hi2";
import HomeCards from "../../components/HomeCards/home";
import { NavLink } from "react-router";
import { ThemeContext } from "../Contex/contex";

const CardTwo = () => {
    const [products, setProducts] = useState([]);
    const { setCart } = useContext(ThemeContext);

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

    function handleAddCart(product) {
        console.log("Mahsulot qo'shildi:", product);
        setCart((prev) => [
            ...prev,
            {
                count: 1,
                product: product,
            },
        ]);
    }

    return (
        <>
            <div className="cardTwo">
                <div className="cardTwo__container">
                    <div className="cardTwo__wrapper">
                        <p className="cardTwo__text">BESTSELLER</p>
                        <p className="cardTwo__text2">Barcha mahsulotlar</p>
                        <div className="cardTwo__head">
                            {products.map((product, index) => (
                                <div key={index} className="cardTwo__data">
                                    <NavLink to={"/product/" + product.id}>
                                        <div className="cardTwo__img">
                                            <img
                                                width={120}
                                                src={product.image}
                                                alt={product.name}
                                            />
                                        </div>
                                    </NavLink>
                                    <NavLink to={"/product/" + product.id}>
                                        <h3 className="cardTwo__title">
                                            {product.name}
                                        </h3>
                                    </NavLink>

                                    <p className="cardTwo__star">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </p>
                                    <p className="cardTwo__old-price">
                                        99 000 so'm
                                    </p>
                                    <p className="cardTwo__new-price">
                                        {product.price} so'm
                                    </p>
                                    <div className="cardTwo__button">
                                        <button className="cardTwo__btn">
                                            695 900 so'm x 12oy
                                        </button>
                                    </div>
                                    <div className="cardTwo__btn1">
                                        <div>
                                            <button className="cardTwo__btn3">
                                                Hoziroq xarid qilish
                                            </button>
                                        </div>
                                        <div
                                            className="cardTwo__shop"
                                            onClick={() =>
                                                handleAddCart(product)
                                            }
                                        >
                                            <HiMiniShoppingCart />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardTwo;
