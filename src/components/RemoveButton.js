import React, { useState, useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

import Clear from "@material-ui/icons/Clear";

import { ListItemSecondaryAction, MuiThemeProvider } from "@material-ui/core";

function RemoveButton() {
  const [count, setCount] = useState(1);
  const [nominations, setNominations] = useState([]);

  useEffect(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    setNominations();

    console.log(nominations);
  }, [nominations]);

  const removeNomination = (event) => {
    console.log("movie is removed!!!");
    setCount(0);
  };
  return (
    <>
    <Button onClick={removeNomination}>{<Clear />} </Button>
  
    </>
  );
}

export default RemoveButton;
