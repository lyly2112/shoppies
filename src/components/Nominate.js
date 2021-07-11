import React from "react";
// import { useState, useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { MovieTwoTone } from "@material-ui/icons";
// import { ListItemSecondaryAction, MuiThemeProvider } from "@material-ui/core";

function Nominate({ movie, nominatedIMDBIds, setNominations }) {
  const handleChange = (event) => {
    if (event.target.checked) {
      // let newArr = nominations;
      setNominations((prevState) => [...prevState, movie]);
    } else if (!event.target.checked) {
      setNominations((prevState) => prevState.filter(n => n.imdbID !== movie.imdbID))

      // let array = [...nominations]; // make a separate copy of the array
      // console.log("array", array);
      // let index = array.indexOf(movie);
      // if (index !== -1) {
      //   array.splice(index, 1);
      //   setNominations(array);
      // }
    }
  };
 
  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={
            <Favorite
              style={{
                color: "#FF0000",
              }}
            />
          }
          //name="checkedH"
        />
      }
      onChange={handleChange}
      n
      checked={nominatedIMDBIds.has(movie.imdbID)}

      //label="Nominate"
    />
  );
}

export default Nominate;
