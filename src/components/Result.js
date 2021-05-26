import React from "react";
import "../css/result.css";
import heart from "../images/heart.svg";

function Result({ movie }) {
  return (
    <div className="result-container" key={movie.imdbID}>
      <div className="result-container_image">
        <img
          src={movie.Poster}
          className="result-container_poster"
          alt="Poster"
        />
        <button className="result-container_nominate-button">
          <img
            src={heart}
            className="result-container_nominate-icon"
            alt="Nominate"
          />
        </button>
      </div>
      <div className="result-container_text">
        <span className="result-container__title">{movie.Title}</span>
        <span className="result-container__year">{movie.Year}</span>
      </div>
    </div>
  );
}

export default Result;
