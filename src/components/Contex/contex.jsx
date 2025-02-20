import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export const Context = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, token, setToken }}>
            {children}
        </ThemeContext.Provider>
    );
};
