import { useState} from "react";

const Display = ({movies}) => {
    return ( 
        <div>
            <div className="display-container">
                {movies.map((movie, index) =>
                    <div key={index} className="poster-container" >
                        <img src={movie.Poster} alt="movie image" />
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Display;