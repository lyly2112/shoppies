import React from 'react';
import NominateButton from './NominateButton';
import '../css/result.css';

function Result({ movie }) {
  return (
    <div className='result-container' key={movie.imdbID}>
      <div className='result-container__movie'>
        <div className='result-container_image'>
          <img
            src={movie.Poster}
            className='result-container_poster'
            alt='Poster'
          />
        </div>
        <div className='result-container_text'>
          <span className='result-container__title'>{movie.Title}</span>
          <span className='result-container__year'>{movie.Year}</span>
        </div>
      </div>
      <NominateButton  movie={movie} />
    </div>
  );
}

export default Result;
