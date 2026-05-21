import './FavoriteList.css'
import { FaHeart, FaRegHeart, FaRedo } from "react-icons/fa";


function FavoriteList({ id, title, year }) {

    return (
        <div className="favorite-card">

            <div className="favorite-icon">
                <FaRegHeart />
            </div>

            <div className="favorite-content">

                <span className="movie-title">
                    {title}
                </span>

                <span className="movie-year">
                    ({year})
                </span>

            </div>

        </div>
    );
}

export default FavoriteList;