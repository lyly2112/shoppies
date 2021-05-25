import React from "react";
import "../css/result.css";

function Result({movie}) {
    return (
        <div className="result-container" key={movie.imdbID}>
            <span>{movie.Title}</span>
        </div>
    )
}

export default Result;