import React, { useState } from "react";
import './MovieCard.css';
import { FaHeart, FaRegHeart, FaRedo } from "react-icons/fa";

function MovieCard(
    {
        id,
        title,
        year,
        genre,
        rating,
        tags,
        isFavorite = false,
        toggleFavorite, setSelectedGenre,
        setSelectedYear,
        setSelectedTag

    }) {
    const [favorite, setFavorite] = useState(false);

    return (
        <div className="movie-card">

            <div className="movie-card-header">

                <div className="movie-title-row">
                    <h6 className="title">{title}</h6>
                    <span
                        className="year clickable"
                        onClick={() => setSelectedYear(year.toString())}
                    >
                        {year}
                    </span>                    <span
                        className="genre clickable"
                        onClick={() => setSelectedGenre(genre)}
                    >
                        • {genre}
                    </span>                </div>

                <div className="movie-info-row">

                    <span className="rating">⭐ {rating}</span>

                    {tags?.map((tag, index) => (
                        <span
                            className="movie-tag clickable"
                            key={index}
                            onClick={() => setSelectedTag(tag)}
                        >                            {tag}
                        </span>
                    ))}

                </div>
            </div>

            <div className="right">
                <button onClick={() => toggleFavorite(id)} className={isFavorite ? "♡ favorited" : "favorite"}>
                    <FaRegHeart /> {isFavorite ? "Favorited" : "Favorite"}
                </button>
            </div>

        </div>
    )

}

export default MovieCard;