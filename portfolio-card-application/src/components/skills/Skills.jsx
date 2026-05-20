import React from "react";
import "./Skills.css";

function Skills({ skills }) {
    return (
        <div className="skill-main">

            <h3>Skills</h3>

            <div className="skills-container">

                {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                        {skill}
                    </span>
                ))}

            </div>

        </div>
    );
}

export default Skills;