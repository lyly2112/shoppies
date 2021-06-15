import React, { useState, useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
// import NominationList from "./NominationList";
// import Nomination from "./Nomination";
// import { ListItemSecondaryAction, MuiThemeProvider } from "@material-ui/core";

function Nominate({ movie, nominations, setNominations }) {
  const [count, setCount] = useState(0);
  // const [nominations, setNominations] = useState([]);

  useEffect(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    console.log("nominations>>>>>>: ", movie);
  }, [nominations]);

  const handleChange = (event) => {
    console.log("Nominate component -> event.target.checked: ", event.target.checked);
    console.log("Nominate component -> movie", movie);
    if (event.target.checked) {
      console.log("heart is checked!!!");
      setCount(1);
      // setNominations({
      //   ...movie,
      //   [event.target.movie]: event.target.checked,
      // });

      // setNominations({
      //   ...movie,
      //   ...nominations
      // });

      // let nominations = []
      // console.log('here ----->>>', localStorage.getItem('nominations'));
      // nominations.push(movie)
      // localStorage.setItem('nominations', nominations);

      let newArr = nominations
      newArr.push(movie);
      console.log("Nominate component -> newArr ", newArr);
      setNominations(prevState => [...prevState, newArr]);
      console.log("Nominate component -> nominations after setNominations ", nominations);

      // <NominationList nominations={nominations} count={count}/>;
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
