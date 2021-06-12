import React, { useState } from "react";
import Nomination from "./Nomination";

function NominationList(props) {
  return (
    <ul>
      {/* {nominations.map((nominations) => (
        <Nomination key={nominations.imdbID} {...nominations} />
      ))} */}
      {props.nominations.map((nominations, index) => {
        return <Nomination nominations={nominations}  index={index}/>;
      })}
    </ul>
  );
}
export default NominationList;
