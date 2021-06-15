import React from "react";
// import { useState } from 'react';
import { useEffect } from 'react';
// import Nomination from "./Nomination";
import RemoveButton from './RemoveButton';

function NominationList({ nominations, count }) {
  // let nominationsFromLocalStorage = localStorage.getItem('nominations');

  useEffect(() => {
    console.log("NominationList component -> nominations: ", nominations);
  }, [nominations]);

  const test = () => {
    console.log(nominations)
  }

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
      <button onClick={() => test()}>Test</button>
      <div className="results-container__list">
        <ul>
          { nominations &&
            nominations.map((nomination) => (
              // {console.log('value.Title =>>>', movie.Title);}
              // return <Nomination nomination={nomination} count={count} />;
              <li>
                <span>
                  <span>test</span>
                  <span>{nomination.imdbID}</span>
                  {/* {count} */}
                  {/* {nomination} */}
                  <RemoveButton />
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default NominationList;
