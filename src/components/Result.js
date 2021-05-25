import React from "react";

function Result({movie}) {
    return (
        <div key={movie.imdbID}>
            <span>{movie.Title}</span>
        </div>
    )
}

export default Result;