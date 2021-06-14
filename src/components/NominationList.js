import React from "react";
// import { useState } from 'react';
import { useEffect } from 'react';
import Nomination from "./Nomination";

function NominationList({ nominations, count }) {
  let nominationsFromLocalStorage = localStorage.getItem('nominations');

  useEffect(() => {
    console.log("nominations from localStorage: ", nominationsFromLocalStorage[0]);
  }, [nominationsFromLocalStorage]);

  return (
    // {props.nominations.map((nomination, count) => {
    //   return (
    //     <Nomination
    //       nomination={nomination}
    //       key={nomination.imdbID}
    //       count={count}
    //     />
    //   );
    // })}

    <div>
      <div>NOMINATIONS</div>
      <div className="results-container__list">
        <ul>
          {nominations &&
            nominations.map((nomination) => {
              // {console.log('value.Title =>>>', movie.Title);}
              return <Nomination nomination={nomination} count={count} />;
            })}
        </ul>
      </div>
    </div>
  );
}
export default NominationList;
