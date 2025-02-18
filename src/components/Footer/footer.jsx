import React from "react";
import { NavLink } from "react-router";
import "./footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <ul className="footer-links">
                    <li>
                        <NavLink to="/about" className="footer-link">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="footer-link">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/privacy" className="footer-link">
                            Privacy Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/privacy" className="footer-link">
                            Privacy Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/privacy" className="footer-link">
                            Privacy Policy
                        </NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
