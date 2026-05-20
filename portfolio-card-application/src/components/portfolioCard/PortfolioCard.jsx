import React, { useState } from "react";
import "./PortfolioCard.css";

import ThemeToggle from "../themeToggle/ThemeToggle";
import Avatar from "../avatar/Avatar";
import Bio from "../bio/Bio";
import Skills from "../skills/Skills";
import ActionButton from "../actionButton/Acationbutton";

function PortfolioCard({ profiles }) {

    const [darkMode, setDarkMode] = useState(false);
    const [likes, setLikes] = useState(128);
    const [currentProfile, setCurrentProfile] = useState(0);

    const profile = profiles[currentProfile];

    const nextProfile = () => {
        setCurrentProfile((prev) => (prev + 1) % profiles.length);
    };

    const prevProfile = () => {
        setCurrentProfile((prev) =>
            prev === 0 ? profiles.length - 1 : prev - 1
        );
    };

    return (
        <div className="card-container">

            <ThemeToggle
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <div className={`portfolio-card ${darkMode ? "dark" : ""}`}>

                <Avatar
                    image={profile.image}
                    name={profile.name}
                    designation={profile.title}
                />

                <Bio bio={profile.bio} />

                <Skills skills={profile.skills} />

                <ActionButton
                    likes={likes}
                    setLikes={setLikes}
                    prevProfile={prevProfile}
                    nextProfile={nextProfile}
                    toggleTheme={() => setDarkMode(!darkMode)}
                    darkMode={darkMode}
                    currentProfile={currentProfile}
                    totalProfiles={profiles.length}
                />

            </div>
        </div>
    );
}

export default PortfolioCard;