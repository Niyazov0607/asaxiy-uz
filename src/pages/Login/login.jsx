import React, { useContext } from "react";
import "./login.scss";
import axios from "axios";
import { useNavigate } from "react-router";
import { ThemeContext } from "../../components/Contex/contex";

const Login = () => {
    const navigate = useNavigate();
    const { setToken } = useContext(ThemeContext);

    async function handleSubmit(e) {
        console.log("Submited", e.target[0].value, e.target[1].value);
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/auth/login", {
                username: e.target[0].value,
                password: e.target[1].value,
            });
            const token = res.data?.data?.token;
            console.log(token);
            setToken(token);
            localStorage.setItem("token", token);
            navigate("/admin");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        className="login-input"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                        required
                    />
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <p className="login-footer">
                    Don't have an account? <a href="#">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
