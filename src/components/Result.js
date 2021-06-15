import React from 'react';
import Nominate from './Nominate';
import '../css/result.css';

function Result({ movie, nominations, setNominations }) {
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
      <Nominate movie={movie} nominations={nominations} setNominations={setNominations} />
    </div>
  );
}

export default Result;
