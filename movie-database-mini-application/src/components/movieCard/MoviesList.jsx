import React, { useState } from "react";
import './MoviesList.css';
import { FaHeart, FaRegHeart, FaRedo, FaStar } from "react-icons/fa";

function MoviesList(params) {
    const [favorite, setFavorite] = useState(false);
    const {
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

    } = params;

    return (
        <div className="minimovie-card">

            <div className="minimovie-card-header">

                <div className="minimovie-title-row">
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
                        {genre}
                    </span>
                </div>

                <div className="minimovie-info-row">

                    <span className="rating"> <FaStar />{rating}</span>

                    {tags?.map((tag, index) => (
                        <span
                            className={`minimovie-tag clickable ${index === 0 ? 'first-tag' : ''}`}
                            key={index}
                            onClick={() => setSelectedTag(tag)}
                        > {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="right">
                <button onClick={() => toggleFavorite(id)} className={isFavorite ? "favorited" : "favorite"}>
                    <FaRegHeart /> {isFavorite ? "Favorited" : "Favorite"}
                </button>
            </div>

        </div >
    )

}

export default MoviesList;