import React, { useState, useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
// import NominationList from "./NominationList";
// import Nomination from "./Nomination";
// import { ListItemSecondaryAction, MuiThemeProvider } from "@material-ui/core";

function Nominate({ movie, nominations, setNominations }) {
  const handleChange = (event) => {
    console.log("Nominate component -> movie", movie);
    if (event.target.checked) {
      console.log("heart is checked!!!");
      let newArr = nominations;
      console.log("Nominate component -> newArr ", newArr);
      setNominations((prevState) => [...prevState, movie]);
      console.log(
        "Nominate component -> nominations after setNominations ",
        nominations
      );
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
      //label="Nominate"
    />
  );
}

export default Nominate;
