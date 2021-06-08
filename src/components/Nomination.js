import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import NominateButton from './NominateButton';


function Nomination(movie) {
  const [counter, setCounter] = useState(0);
  const [nomination, setNomation] = useState();


  return(
{counter}
{nomination}
  )

}

export default Nomination;
