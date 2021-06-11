import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import NominateButton from "./NominateButton";

function Nomination({ nomination }) {
  return (
    // <div className='result-container' key={movie.imdbID}>
    //     <div className='result-container__movie'>
    //       <div className='result-container_image'>
    //         <img
    //           src={movie.Poster}
    //           className='result-container_poster'
    //           alt='Poster'
    //         />
    //       </div>
    //       <div className='result-container_text'>
    //         <span className='result-container__title'>{movie.Title}</span>
    //         <span className='result-container__year'>{movie.Year}</span>
    //       </div>
    //     </div></div>

    <li className="movie">{nomination}</li>
  );
}

export default Nomination;
