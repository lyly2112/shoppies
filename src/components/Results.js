import React from "react";
import Result from "./Result";
import "../css/results.css";

function Results({ movies, query }) {
  return (
    <div className="results-container">
      <div className="results-container__title">
        Results for <span className="results-container__query"> "{query}"</span>
      </div>
      <div className="results-container__list">
        {movies &&
          movies.map((movie) => {
            // {console.log("value.Title =>>>", movie.Title);}
            return <Result movie={movie} />;
          })}
      </div>
    </div>
  );
}

export default Results;
