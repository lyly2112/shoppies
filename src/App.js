import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
// import logo from './logo.svg';
import "./css/font.css";
import "./scss/main.css";

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
{nominations.length>0 &&
<h2 className="nominations-container__header">Nominations</h2>}
      <div className="nominations-container">
        {/* <div className="nominations-container__header">Nominations</div> */}
        <ul className="nominations-container__list">
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
                    <h2 className="result-container__title">
                      {nomination.Title}
                    </h2>
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
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
