import React from "react";
import { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./css/font.css";
import "./App.css";
import Search from "./components/Search";
// import NominationList from "./components/NominationList";
// import RemoveButton from "./components/RemoveButton";

function App() {
  const [nominations, setNominations] = useState([]);
  const [list, setList] = useState(nominations);

  function handleRemove(imdbID) {
    //remove nomination
    console.log("nomination.imdbID is ", imdbID);
    console.log("nominations  list is  ", list);

    // const newList = list.filter((nomination) => nomination.imdbID !== imdbID);
    // setList(newList);
    console.log("nominations new list is  ", list);
  }
  useEffect(() => {
    console.log("App component -> nominations: ", nominations);
  }, [nominations]);

  const test = () => {
    console.log("Test: App component printing nominations", nominations);
  };

  return (
    <div className="App">
      <Search nominations={nominations} setNominations={setNominations} />
      <div>NOMINATIONS</div>
      <button onClick={() => test()}>Test</button>
      <div className="results-container__list">
        <ul>
          {nominations &&
            nominations.map((nomination) => (
              // {console.log('value.Title =>>>', movie.Title);}
              // return <Nomination nomination={nomination} />;
              <li key={nomination.imdbID}>
                {/* <span>test</span> */}
                {/* <span>{nomination.imdbID}</span> */}
                <span>{nomination.Title}</span>
                <span>{nomination.Year}</span>
                <img
                  src={nomination.Poster}
                  className="result-container_poster"
                  alt="Poster"
                />
                <button
                  type="button"
                  onClick={() => handleRemove(nomination.imdbID)}
                >
                  Remove
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
