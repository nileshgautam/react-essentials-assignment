import React, { useState } from "react";
import "./PortfolioCard.css";

import ThemeToggle from "../themeToggle/ThemeToggle";
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
        <div className={`card-container ${darkMode ? "dark" : ""}`}>

            <ThemeToggle
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <div className={`portfolio-card`}>

                <header className="portfolio-card-header">

                    <div className="avatar-container">
                        <img src={profile.image} alt={profile.name} />
                    </div>

                    <div className="name-container">
                        <h1 className="name">{profile.name}</h1>
                        <p className="designation">{profile.designation}</p>
                    </div>

                </header>

                {/* Bio section */}

                <div className="main">
                    <div className="bio">
                        {profile.bio}
                    </div>
                </div>

                {/* Skills section */}

                <div className="skill-main">
                    <h4>Skills</h4>
                    <div className="skills-container">
                        {profile.skills.map((skill, index) => (
                            <span className="skill-tag" key={index}>{skill}</span>
                        ))}
                    </div>
                </div>

                {/* Action  section*/}

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