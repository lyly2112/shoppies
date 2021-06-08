import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Result from './Result';

function NominateButton({ movie }) {
  const [count, setCount] = useState(0);
  const [nomination, setNomination] = useState('');

  const addNomination = (event) => {
    if (event.target.checked) {
//       setNomination([
//         ...nomination,
//         {
// title: movie
//         }
//       ])
      console.log("heart is checked!!!")
      setCount(1)    
      console.log(count)

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