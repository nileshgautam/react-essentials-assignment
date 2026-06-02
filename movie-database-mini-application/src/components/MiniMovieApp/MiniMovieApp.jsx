import React, { useState } from "react";
import "./MiniMovieApp.css";
import { FaRedo, FaTimes, FaSearch } from "react-icons/fa";



import ThemeToggle from "../themeToggle/ThemeToggle";
import MovieCard from "../movieCard/MoviesList";
import FavoriteList from "../FavoriteList/FavoriteList";

function MiniMovieApp({ movies }) {
    const [darkMode, setDarkMode] = useState(false);
    //State for Loading indicator
    const [loading, setLoading] = useState(false);

    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedTag, setSelectedTag] = useState("");

    // State for movies
    const [moviesList, setMoviesList] = useState(movies);
    // State for search term
    const [searchTerm, setSearchTerm] = useState('');
    // State for sort by
    const [sortBy, setSortBy] = useState('title');

    const searchTerms = searchTerm
        .split(",")
        .map(term => term.trim().toLowerCase())
        .filter(Boolean);

    const filteredMovies = moviesList.filter((movie) => {

        const searchableText = `
        ${movie.title}
        ${movie.genre}
        ${movie.director}
        ${movie.year}
        ${movie.tags?.join(" ") || ""}
    `.toLowerCase();

        /* Search */

        const matchesSearch =
            searchTerms.length === 0 ||
            searchTerms.some((term) =>
                searchableText.includes(term)
            );

        /* Genre */

        const matchesGenre =
            !selectedGenre ||
            movie.genre === selectedGenre;

        /* Year */

        const matchesYear =
            !selectedYear ||
            movie.year.toString() === selectedYear;

        /* Tag */

        const matchesTag =
            !selectedTag ||
            movie.tags.includes(selectedTag);

        return (
            matchesSearch &&
            matchesGenre &&
            matchesYear &&
            matchesTag
        );
    });

    const filteredMoviesCount = filteredMovies.length;
    console.log('filteredMovies', filteredMovies);


    const favoriteMovieList = moviesList.filter((movie) => (movie.favorite));

    const toggleFavorite = (id) => {

        const updatedMovies = moviesList.map((movie) => {

            if (movie.id === id) {
                return {
                    ...movie,
                    favorite: !movie.favorite
                };
            }

            return movie;
        });

        setMoviesList(updatedMovies);
    };

    // Rest function 
    const restFilter = () => {
        setSelectedGenre("");
        setSelectedYear("");
        setSelectedTag("");
        setSearchTerm("");
        setSortBy("title");
    }
    return (
        <div className={`card-container ${darkMode ? "dark" : ""}`} >

            <ThemeToggle
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <div className={`app-card`}>
                <header className="app-card-header">

                    <div className="header-title">
                        <h1>Movie Explorer</h1>
                        <p>Search, Filter, and Favorite movies, Designed for a single page React component structure.</p>
                    </div>
                </header>

                <div className="app-search-bar">
                    <div className="search-box">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder='Search movies (e.g. "Interstellar","Star")'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />


                    </div>
                    {/* Clear search all button */}
                    <button className="clear-btn"
                        onClick={() => setSearchTerm('')}
                    ><FaTimes />
                    </button>

                    {/* reset button */}
                    <button className="rest-btn"
                        onClick={restFilter}
                    > <FaRedo /> Reset</button>
                    {/* here result for search term */}
                </div>
                {searchTerm.trim() && (
                    <p>
                        {filteredMoviesCount} result
                        {filteredMoviesCount !== 1 ? "s" : ""}
                        {" "}for "{searchTerm}"
                    </p>


                )}

                <div className="active-filters">

                    {selectedGenre && (
                        <span>
                            Genre: {selectedGenre} ,  {filteredMoviesCount} result
                            {filteredMoviesCount !== 1 ? "s" : ""}

                        </span>
                    )}

                    {selectedYear && (
                        <span>
                            Year: {selectedYear} , {filteredMoviesCount} result
                            {filteredMoviesCount !== 1 ? "s" : ""}
                        </span>
                    )}

                    {selectedTag && (
                        <span>
                            Tag: {selectedTag} , {filteredMoviesCount} result
                            {filteredMoviesCount !== 1 ? "s" : ""}
                        </span>
                    )}

                </div>

                <div className="app-card-main-container">
                    <div className="app-card-movie-list">
                        <div>
                            <h3>Matching Movies</h3>
                        </div>
                        <div className="movies-list">

                            {filteredMovies && filteredMovies.map((movie, index) => (

                                <MovieCard
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    year={movie.year}
                                    genre={movie.genre}
                                    rating={movie.rating}
                                    tags={movie.tags}
                                    isFavorite={movie.favorite}
                                    toggleFavorite={toggleFavorite}

                                    setSelectedGenre={setSelectedGenre}
                                    setSelectedYear={setSelectedYear}
                                    setSelectedTag={setSelectedTag}

                                />
                            ))}
                        </div>

                        {filteredMovies.length === 0 && (
                            <div className="empty-state">
                                No movies found
                            </div>
                        )}

                    </div>

                    <div className="app-card-movie-favorite-movie-list">
                        {/* list of favoriate movies */}
                        <div>
                            <h3>Favorite Movies</h3>
                        </div>
                        <div className="favorite-grid">
                            {
                                favoriteMovieList && favoriteMovieList.map((item, index) => (
                                    <FavoriteList key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        year={item.year}
                                        toggleFavorite={toggleFavorite}

                                    />
                                ))}

                            {favoriteMovieList.length === 0 && (
                                <div className="empty-state">
                                    You haven't added any favorites yet.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default MiniMovieApp;
