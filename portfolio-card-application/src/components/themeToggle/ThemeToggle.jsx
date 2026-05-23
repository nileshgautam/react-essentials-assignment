import React from "react";
import "./ThemeToggle.css";
import { FaMoon, FaSun } from "react-icons/fa";


function ThemeToggle({ darkMode, setDarkMode }) {
    return (
        <div className="theme-btn-container">
            <button
                className="theme-btn"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? (
                    <FaMoon />
                ) : (
                    <FaSun />
                )}
                <span> Toggle Theme</span> </button>
        </div>
    );
}

export default ThemeToggle;