import React from "react";
import { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./css/font.css";
import "./App.css";
import Search from "./components/Search";
// import NominationList from "./components/NominationList";
// import RemoveButton from "./components/RemoveButton";
import Clear from "@material-ui/icons/Clear";

function App() {
  const [nominations, setNominations] = useState([]);
  // const [list, setList] = useState(nominations);

  function handleRemove(nomination) {
    //remove nomination
    console.log("nomination is ", nomination);
    {
      let array = [...nominations]; // make a separate copy of the array
      console.log('array',array)
      let index = array.indexOf(nomination);
      console.log('event.target.value',nomination)

      console.log('index',index)
      if (index !== -1) {
        array.splice(index, 1);
        setNominations( array );
      }
    }
  }
  // useEffect(() => {
  //   console.log("App component -> nominations: ", nominations);
  // }, [nominations]);

  // const test = () => {
  //   console.log("Test: App component printing nominations", nominations);
  // };

  return (
    <div className="App">
      <Search nominations={nominations} setNominations={setNominations} />
      <div className="results-container__title">Nominations</div>
      <button onClick={() => test()}>Test</button>
      <div className="results-container__list">
        <ul className="nominations-container__item">
          {nominations &&
            nominations.map((nomination) => (
              <li className="result-container__movie" key={nomination.imdbID}>
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
                
                <button
                  type="button"
                  onClick={() => handleRemove(nomination)}
                >
                  {<Clear />}Remove
                </button>
                {/* <RemoveButton /> */}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
