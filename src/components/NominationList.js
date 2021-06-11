import React, { useState } from "react";
import Nomination from "./Nomination";

function NominationList({ nominations }) {
  return (
    <ul>
      {nominations.map((nominations) => (
        <Nomination key={nominations.imdbID} {...nominations} />
      ))}
    </ul>
  );
}
export default NominationList;
