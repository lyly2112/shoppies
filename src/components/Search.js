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

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log('setQuery', query)
      // Send Axios request here
    }, 2000)
    return () => clearTimeout(delayDebounceFn)
  }, [query])


  const getMoviesData = () => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${query}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log('res.data ->', res.data);
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const handleChange = (e) => {
    // e.preventDefault();
    console.log('e.target.value -> ', e.target.value);
    //setQuery(e.target.value);
    setQuery(e.target.value);
    console.log('query -> ', query);
    getMoviesData();
  };

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
