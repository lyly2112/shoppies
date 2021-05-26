import React from "react";
import "../css/nominate-button.css";
import heart from "../images/heart.svg";

function Nominate() {
  return (
    <button className="nominate-button">
      <img src={heart} className="nominate-icon" alt="Nominate" />
    </button>
  );
}

export default Nominate;
