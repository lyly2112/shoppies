import React, { useState } from "react";
import Nomination from "./Nomination";

function NominationList(props) {
  return (
    <ul>
      {/* {nominations.map((nominations) => (
        <Nomination key={nominations.imdbID} {...nominations} />
      ))} */}
      {props.nominations.map((nomination, index) => {
        return <Nomination nomination={nomination}  index={index}/>;
      })}
    </ul>
  );
}
export default NominationList;
