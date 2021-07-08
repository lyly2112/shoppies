import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
// import logo from './logo.svg';
import "./css/font.css";
import "./scss/main.css";
import "./css/remove-nomination-button.css";

import Search from "./components/Search";
// import Nominate from "./components/Nominate";
// import NominationList from "./components/NominationList";
// import RemoveButton from "./components/RemoveButton";
import Clear from "@material-ui/icons/Clear";

function App() {
  const [nominations, setNominations] = useState([]);
  // const [checked, setChecked] = useState(false);

  function handleRemove(nomination) {
    //remove nomination
    let array = [...nominations]; // make a separate copy of the array
    let index = array.indexOf(nomination);
    if (index !== -1) {
      array.splice(index, 1);
      setNominations(array);
    }
  }

  return (
    <div className="App">
      <Search nominations={nominations} setNominations={setNominations} />
      <div className="results-container__title">Nominations</div>
      {/* <button onClick={() => test()}>Test</button> */}
      <div className="results-container__list">
        <ul className="nominations-container__item">
          {nominations &&
            nominations.map((nomination) => (
              <li className="result-container" key={nomination.imdbID}>
                <div
                  className="result-container__movie"
                  key={nomination.imdbID}
                >
                  <div className="result-container_image">
                    <img
                      src={nomination.Poster}
                      className="result-container_poster"
                      alt="Poster"
                    />
                  </div>
                  <div className="result-container_text">
                    <span className="result-container__title">
                      {nomination.Title}
                    </span>
                    <span className="result-container__year">
                      {nomination.Year}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="remove-nomination-button"
                  onClick={() => handleRemove(nomination)}
                >
                  {<Clear />}
                </button>
                {/* <Nominate /> */}
                {/* <RemoveButton /> */}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
