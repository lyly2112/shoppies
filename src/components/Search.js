import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Results from './Results';


function Search({ nominations, setNominations}) {
  const [movies, setMovies] = useState({});
  const [query, setQuery] = useState('');


  useEffect(() => {
    console.log('useEffect query ->', query);
  }, [query]);

  useEffect(() => {
    console.log('useEffect movies ->', movies);
  }, [movies]);


  const getMoviesData = (locQuery) => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${locQuery}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log('res.data ->', res.data);
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const handleChange = async (e) => {
    // e.preventDefault();
    //setQuery(e.target.value);
    setQuery(e.target.value);
    console.log('======== e.target.value -> ', e.target.value);
    getMoviesData(e.target.value);
  };

  //here is weard solution
  // getMoviesData(handleChange);

  return (
    <div className='search-container'>
      <h2 className='search-container__header'>The Shoppies</h2>
      <label className='search-container__search-label'>
        <input
          type='text'
          name='query'
          value={query}
          className='search-container__search-input'
          placeholder='Search OMDB'
          onChange={e => handleChange(e)}
        />
      </label>
      {/* <button onClick={() => getMoviesData()}>Test</button> */}
      <Results
        movies={movies.Search}
        query={query}
        nominations={nominations}
        setNominations={setNominations}
      />
      {/* <pre>{JSON.stringify({ movies }, undefined, 2)}</pre> */}
    </div>
  );
}

export default Search;
