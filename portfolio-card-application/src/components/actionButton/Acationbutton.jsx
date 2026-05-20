import React from "react";
import "./ActionButton.css";

function ActionButton({
    likes,
    setLikes,
    prevProfile,
    nextProfile,
    toggleTheme,
    darkMode,
    currentProfile,
    totalProfiles
}) {

    return (
        <div className="portfolio-card-footer">

            <button onClick={toggleTheme}>
                {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>

            <div className="portfolio-navigator">

                <button onClick={prevProfile}> ❮</button>
                <button onClick={nextProfile}> ❯ </button>
                <span className="navigator-span">
                    {currentProfile + 1} / {totalProfiles}
                </span>
            </div>

            <button onClick={() => setLikes(likes + 1)}>
                ❤️ {likes}
            </button>

            <button
                className="contact-btn"
                onClick={() => alert("Contact feature coming soon!")}
            >
                ✉️ Contact
            </button>

        </div>
    );
}

export default ActionButton;