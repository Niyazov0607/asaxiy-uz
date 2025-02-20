import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./product.scss";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import Navbar from "../../components/Navbar/navbar";
import { AiFillLike } from "react-icons/ai";
import Asaxiy from "../../assets/asaxiy-logo.svg";
import Footer from "../../components/Footer/footer";

const Product = () => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await axios.get(
                    `http://localhost:5000/products/${id}`
                );
                console.log("Fetched product:", res.data.data);
                setProductInfo(res.data.data);
            } catch (error) {
                console.error("Error fetching product:", error.message);
            }
        }
        fetchProduct();
    }, [id]);

    return (
        <>
            <Navbar />
            <div className="product">
                <div className="product__container">
                    <div className="product__wrapper">
                        <div className="product__img">
                            <img
                                src={productInfo.image}
                                alt={productInfo.name}
                            />
                        </div>
                        <div className="product__info">
                            <h1 className="product__title">
                                {productInfo.name}
                            </h1>
                            <p className="product__star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </p>
                            <div className="product__newPrice">
                                {productInfo.price} so'm
                            </div>
                            <div className="product__category">
                                <p>Model: </p>
                                <p>{productInfo.category}</p>
                            </div>
                            <div className="product__category">
                                <p>Holati: </p>
                                <p>● Sotuvda bor</p>
                            </div>
                            <div className="product__btns">
                                <div className="">
                                    <button className="product__shop">
                                        <HiMiniShoppingCart /> Savatchaga
                                        qoshish
                                    </button>
                                </div>
                                <div className="product__btn1">
                                    <button className="product__btn3">
                                        Hoziroq harid qilish
                                    </button>
                                </div>
                            </div>
                            <p className="product__rate">Ovoz bering:</p>
                            <p className="product__like">
                                <AiFillLike />
                                Tavsiya qilaman
                            </p>
                        </div>
                        <div className="product__smth">
                            <p className="product__discount">Bo'lib to'lash</p>
                            <div className="product__months">
                                <p className="product__mon">3 oy</p>
                                <p className="product__mon">6 oy</p>
                                <p className="product__mon">12 oy</p>
                            </div>
                            <div className="product__another-card">
                                <p className="product__card-name">
                                    Asaxiydan muddatli to'lov
                                </p>
                                <div className="product__disc-card">
                                    <div>
                                        <img src={Asaxiy} alt="" />
                                    </div>
                                    <p className="product__pri">400 so'm</p>
                                    <p className="product__price-da">
                                        Umumiy qiymat
                                    </p>
                                    <p className="product__price-da">
                                        1 200 so'm
                                    </p>
                                </div>
                                <div className="product__disc-btn-div">
                                    <button className="product__disc-btn">
                                        Bo'lib to'lashga olish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Product;
