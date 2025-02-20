import React, { useState, useContext } from "react";
import logoImg from "../../assets/asaxiy-logo.svg";
import { Fade as Hamburger } from "hamburger-react";
import "./navbar.scss";
import Compare from "../../assets/compare_header.svg";
import Lang from "../../assets/language.svg";
import Acc from "../../assets/acc.svg";
import { CiWallet } from "react-icons/ci";
import { FaTractor } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router";
import { ThemeContext } from "../Contex/contex";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const { cart } = useContext(ThemeContext);

    const handleHamburgerClick = () => {
        setOpen(!isOpen);
        setDropdownOpen(!isDropdownOpen);
    };

    const getCartItemCount = () => {
        return cart.reduce((total, item) => total + item.count, 0);
    };

    return (
        <>
            <div className="navbar">
                <div className="navbar__container">
                    <div className="navbar__wrapper">
                        <div>
                            <img src={logoImg} alt="Asaxiy Logo" />
                        </div>
                        <div
                            className="navbar__humberger"
                            onClick={handleHamburgerClick}
                        >
                            <Hamburger
                                toggled={isOpen}
                                toggle={setOpen}
                                direction="right"
                                size={20}
                            />
                            <p className="navbar__hum">Bo'limlar</p>
                        </div>
                        {isDropdownOpen && (
                            <div className="navbar__dropdown">
                                <ul className="navbar__dropdown-list">
                                    <li className="navbar__dropdown-item">
                                        Bo'lim 1
                                    </li>
                                    <li className="navbar__dropdown-item">
                                        Bo'lim 2
                                    </li>
                                    <li className="navbar__dropdown-item">
                                        Bo'lim 3
                                    </li>
                                    <li className="navbar__dropdown-item">
                                        Bo'lim 4
                                    </li>
                                </ul>
                            </div>
                        )}
                        <div className="navbar__inp">
                            <input
                                className="navbar__input"
                                type="text"
                                placeholder="Qidirish..."
                            />
                        </div>
                        <button className="navbar__search">Qidirish</button>
                        <div className="navbar__icons">
                            <div className="navbar__icon">
                                <img src={Compare} alt="" width="30" />
                                <p>Taqqoslash</p>
                            </div>
                            <div className="navbar__icon">
                                <CiWallet size={25} />
                                <p>To'lov</p>
                            </div>
                            <div className="navbar__icon">
                                <FaTractor size={25} />
                                <p>Trek</p>
                            </div>
                            <NavLink to="/cart">
                                <div className="navbar__icon">
                                    <IoCartOutline size={25} />
                                    <p>Savatcha</p>
                                    <p className="navbar__counter">
                                        {getCartItemCount()}{" "}
                                    </p>
                                </div>
                            </NavLink>
                            <div className="navbar__icon">
                                <CiHeart size={25} />
                                <p>Sevimlilar</p>
                            </div>
                            <div className="navbar__icon">
                                <img src={Lang} alt="" width="25" />
                                <p>Ruscha</p>
                            </div>
                            <div className="navbar__icon">
                                <img src={Acc} alt="" width="20" />
                                <p>Kirish</p>
                            </div>
                        </div>
                    </div>
                    <hr className="navbar__hr" />
                    <div className="navbar__info">
                        <p>
                            <NavLink className="navbar__li" to="/popular">
                                Chegirmalar
                            </NavLink>
                        </p>
                        <p className="navbar__li">0-0-6</p>
                        <p className="navbar__li">Smartfonlar</p>
                        <p className="navbar__li">Maishiy texnika</p>
                        <p className="navbar__li">Kitoblar</p>
                        <p className="navbar__li">Noutbuklar</p>
                        <p className="navbar__li">Bestseller 2024</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
