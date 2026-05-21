import React from "react";
import "./ThemeToggle.css";

function ThemeToggle({ darkMode, setDarkMode }) {
    return (
        <div className="theme-btn-container">
            <button
                className="theme-btn"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? "🌙 Toggle Theme" : "☀  Toggle Theme"}
            </button>
        </div>
    );
}

export default ThemeToggle;