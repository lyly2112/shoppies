import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import "../css/search.css";

function Search() {
  const [movies, setMovies] = useState({});
  const [query, setQuery] = useState();

  useEffect(() => {
    console.log("useEffect movies ->", movies);
  }, [movies]);

  const getMoviesData = () => {
    console.log('query ->', query);
    axios
      .get(
        `http://www.omdbapi.com/?s=${query}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log("res.data ->", res.data);
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    console.log("e.target.value -> ", e.target.value);
    setQuery(e.target.value);
    getMoviesData();
  };

  return (
    <div className="search-container">
      <h2 className="search-container__header">Movie title</h2>
      <label className="search-container__search-label">
        <input
          type="text"
          name="query"
          value={query}
          id="search-container__search-input"
          placeholder="Search OMDB"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button onClick={() => getMoviesData()}>Test</button>
      <div className="results-container">
        Results for <span className="results-container__query">"{query}"</span>
      </div>
      <Results movies={movies.Search}/>
      {/* <pre>{JSON.stringify({ movies }, undefined, 2)}</pre> */}
    </div>
  );
}

export default Search;
