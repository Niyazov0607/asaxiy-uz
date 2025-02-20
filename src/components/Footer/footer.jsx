import React from "react";
import { NavLink } from "react-router";
import "./footer.scss";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import Uzum from "../../assets/uzum.svg";
import Payme from "../../assets/payme.svg";
import Visa from "../../assets/visa.svg";
import Master from "../../assets/mastercard.svg";
import Humo from "../../assets/humo.svg";
import Uzcard from "../../assets/uzcard.svg";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoRss } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__wrapper">
                    <ul className="footer__links">
                        <p className="footer__title1">Ma'lumotlar</p>
                        <li>
                            <NavLink to="/about" className="footer__link">
                                Ko'p so'raladigan savollar savollar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="footer__link">
                                Yangiliklar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy" className="footer__link">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy" className="footer__link">
                                Bizning brendlarimiz
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy" className="footer__link">
                                Asaxiydagi karyerasi
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy" className="footer__link">
                                Muddatli toʻlov ofertasi
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy" className="footer__link">
                                Ommaviy oferta
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy" className="footer__link">
                                Biz haqimizda
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy" className="footer__link">
                                Sayt xaritasi
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="footer-links">
                        <p className="footer__title1">Biz bilan aloqa</p>
                        <li>
                            <NavLink to="/about" className="footer__link">
                                <FaPhone />
                                +998 71 200 01 05
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="footer__link">
                                <p>
                                    <MdEmail />
                                </p>
                                <p>info@asaxiy.uz</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy" className="footer__link">
                                <p>
                                    <BiLogoTelegram />
                                </p>
                                <p> Telegram bot</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy" className="footer__link">
                                <p>
                                    {" "}
                                    <CiLocationOn />
                                </p>
                                <p> Chilonzor ko'chasi, 45/2, Toshkent </p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy" className="footer__link2">
                                Sodiqlik dasturlari{" "}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy" className="footer__link">
                                "El-yurt ishonchi" statusi{" "}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy" className="footer__link">
                                «Asaxiy Plus»
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy" className="footer__link">
                                «Asaxiy Plus» ofertasi
                            </NavLink>
                        </li>
                    </ul>
                    <div className="footer__links">
                        <p className="footer__title1">
                            Yetkazib berish va do'konlar
                        </p>
                        <p className="footer__system">
                            <NavLink to="/about" className="footer__link1">
                                <p>
                                    <HiOutlineBuildingStorefront />
                                </p>
                                <p> Bizning do'konlar</p>
                                <p className="footer__arrow">
                                    <IoIosArrowForward />
                                </p>
                            </NavLink>
                        </p>
                        <p className="footer__system">
                            <NavLink to="/contact" className="footer__link4">
                                <p>
                                    <FaMapLocationDot />
                                </p>
                                <p>Olib ketish punktlari</p>
                                <p>
                                    <IoIosArrowForward />
                                </p>
                            </NavLink>
                        </p>
                        <p className="footer__system">
                            <NavLink to="/privacy" className="footer__link5">
                                <p>
                                    <TbTruckDelivery />
                                </p>
                                <p> Yetkazib berish</p>
                                <p className="footer__arrows">
                                    <IoIosArrowForward />
                                </p>
                            </NavLink>
                        </p>
                    </div>
                    <div className="footer__links">
                        <p>To'lov turlari</p>
                        <div className="footer__banks">
                            <p>
                                <NavLink to="/about" className="footer__link">
                                    <p className="footer__payment">
                                        <img src={Uzum} alt="" />
                                    </p>
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to="/about" className="footer__link">
                                    <p className="footer__payment">
                                        <img src={Payme} alt="" />
                                    </p>
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to="/about" className="footer__link">
                                    <p className="footer__payment">
                                        <img src={Visa} alt="" />
                                    </p>
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to="/about" className="footer__link">
                                    <p className="footer__payment">
                                        <img src={Master} alt="" />
                                    </p>
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to="/about" className="footer__link">
                                    <p className="footer__payment">
                                        <img src={Humo} alt="" />
                                    </p>
                                </NavLink>
                            </p>
                            <p>
                                <NavLink to="/about" className="footer__link">
                                    <p className="footer__payment">
                                        <img src={Uzcard} alt="" />
                                    </p>
                                </NavLink>
                            </p>
                        </div>
                        <p className="footer__linkss">
                            Biz ijtimoiy tarmoqlarda
                        </p>
                        <div className="footer__channels">
                            <p className="footer__app">
                                <FaTelegram />
                            </p>
                            <p className="footer__app">
                                <FaFacebook />
                            </p>
                            <p className="footer__app">
                                <FaInstagram />
                            </p>
                            <p className="footer__app">
                                <FaYoutube />
                            </p>
                            <p className="footer__app">
                                <IoLogoRss />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
