import React, { useState } from "react";
import "../css/nominate-button.css";
import heart from "../images/heart.svg";

function Nomination(movie) {
  const [counter, setCounter] = useState(0);

  function increment(e) {
    e.preventDefault();
    setCounter((counter) => {
      return counter + 1;
    });
  }

  return (
    <>
      
      <button className="nominate-button" id="nominate-button">
        <img
          src={heart}
          className="nominate-icon"
          alt="Nominate"
          onClick={increment}
          value='counter'
        />
      </button>
    </>
  );
}

export default Nomination;
