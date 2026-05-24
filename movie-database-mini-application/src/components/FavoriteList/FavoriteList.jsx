import './FavoriteList.css'
import { FaHeart, FaRegHeart, FaRedo } from "react-icons/fa";


function FavoriteList({ id, title, year, toggleFavorite }) {

    return (

        <div className="favorite-card" onClick={() => toggleFavorite(id)}>

            <div className="icon">
                <FaRegHeart />
            </div>

            <div className="favorite-content">

                <span className="title">
                    {title}
                </span>

                <span className="year">
                    ({year})
                </span>

            </div>


        </div>

    );
}

export default FavoriteList;