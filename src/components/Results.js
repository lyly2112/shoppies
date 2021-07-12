import React from 'react';
import Result from './Result';


function Results({ movies, query, nominations, setNominations }) {
  return (
    <div className='results-container'>
      <div className='results-container__title'>
        Results for&nbsp;<span className='results-container__query'>{query}</span>
      </div>
      <div className='results-container__list'>
        {movies &&
          movies.map((movie) => {
            // {console.log('value.Title =>>>', movie.Title);}
            return <Result
                    key={movie.imdbID}
                    movie={movie}
                    nominations={nominations}
                    setNominations={setNominations}
                  />;
          })}
      </div>
    </div>
  );
}

export default Results;
