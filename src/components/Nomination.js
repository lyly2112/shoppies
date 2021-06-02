import React, { useState } from "react";
import '../css/font.css';
import "../css/nominate-button.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

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
      {/*<button
        type="button"
        className="nominate-button"
        onClick={increment}
        value="counter"
      >
        	&#9829; &#9825; 
      </button>*/}
      
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH" />}
        label="Nominate"
      />

      </>
  );
}

export default Nomination;
