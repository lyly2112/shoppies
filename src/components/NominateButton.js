import React, { useState, useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Result from "./Result";
import { ListItemSecondaryAction, MuiThemeProvider } from "@material-ui/core";

function NominateButton({ movie }) {
  const [count, setCount] = useState(0);
  const [nominations, setNominations] = useState([])

  useEffect(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
setNominations()


    console.log(nominations);
  }, [nominations]);

  const addNomination = (event) => {
    if (event.target.checked) {
      console.log("heart is checked!!!")
      setCount(1)
      
    }
  };
  return (
    <>
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
            name="checkedH"
            onChange={addNomination}
          />
        }
        label="Nominate"
      />
    </>
  );
}

export default NominateButton;
