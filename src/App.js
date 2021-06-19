import React from "react";
import { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./css/font.css";
import "./App.css";
import Search from "./components/Search";
// import NominationList from "./components/NominationList";
import RemoveButton from "./components/RemoveButton";

function App() {
  const [nominations, setNominations] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("App component -> nominations: ", nominations);
  }, [nominations]);

  const test = () => {
    console.log("Test: App component printing nominations and count ", nominations , count);
  };

  return (
    <div className="App">
      <Search nominations={nominations} setNominations={setNominations} count={count} setCount={setCount} />
      {/* <NominationList nominations={nominations} /> */}

      <div>NOMINATIONS</div>
      <button onClick={() => test()}>Test</button>
      <div className="results-container__list">
        <ul>
          {nominations &&
            nominations.map((nomination) => (
              // {console.log('value.Title =>>>', movie.Title);}
              // return <Nomination nomination={nomination} count={count} />;
              <li key={nomination.imdbID}
              >
                <span>
                  {/* <span>test</span> */}
                  {/* <span>{nomination.imdbID}</span> */}
                  <span>{nomination.Title}</span>
                  <span>{nomination.Year}</span>
                  <img
                    src={nomination.Poster}
                    className="result-container_poster"
                    alt="Poster"
                  />
                  {/* {count} */}
                  {/* {nomination} */}
                </span>
                <RemoveButton />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
