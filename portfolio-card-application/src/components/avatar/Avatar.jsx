import React from "react";
import "./Avatar.css";

function Avatar({ image, name, designation }) {
    return (
        <header className="portfolio-card-header">

            <div className="avatar-container">
                <img src={image} alt={name} />
            </div>

            <div className="name-container">
                <h1 className="name">{name}</h1>
                <p className="designation">{designation}</p>
            </div>

        </header>
    );
}

export default Avatar;