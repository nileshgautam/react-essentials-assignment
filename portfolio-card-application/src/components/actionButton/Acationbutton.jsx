import React from "react";
import "./ActionButton.css";
import { FaAngleLeft, FaAngleRight, FaMoon, FaSun, FaHeart } from "react-icons/fa";



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
                {darkMode ? (
                    <>
                        <FaMoon /> <span> Light</span>
                    </>


                ) : (

                    <>
                        <FaSun /> <span> Dark</span>
                    </>
                )}
            </button>

            <div className="portfolio-navigator">

                <span onClick={prevProfile}> <FaAngleLeft /></span>
                <span onClick={nextProfile}> <FaAngleRight /> </span>
                <span className="navigator-span">
                    {currentProfile + 1} / {totalProfiles}
                </span>
            </div>

            <button onClick={() => setLikes(likes + 1)}>
                <FaHeart />
                <span> {likes}</span>
            </button>

            <button
                className="contact-btn"
                onClick={() => alert("Contact feature coming soon!")}
            >
                Contact
            </button>

        </div >
    );
}

export default ActionButton;