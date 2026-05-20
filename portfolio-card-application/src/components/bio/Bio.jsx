import React from "react";
import "./Bio.css";

function Bio({ bio }) {
    return (
        <div className="main">
            <div className="bio">
                {bio}
            </div>
        </div>
    );
}

export default Bio;