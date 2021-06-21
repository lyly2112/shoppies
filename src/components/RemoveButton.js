import React, { useState, useEffect } from "react";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

import Clear from "@material-ui/icons/Clear";

// import { ListItemSecondaryAction, MuiThemeProvider } from "@material-ui/core";

function RemoveButton() {
  const removeNomination = (event) => {
    console.log("movie is removed!!!");
  };
  return <Button onClick={removeNomination}>{<Clear />} </Button>;
}

export default RemoveButton;
