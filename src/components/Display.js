import { useState} from "react";

const Display = (prop) => {
    return ( 
        <div>
            <div className="display-container">
                {prop.favMovies.map((movie, index) =>
                    <div key={index} className="poster-container" >
                        <img src={movie.Poster} alt="movie image" />
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Display;