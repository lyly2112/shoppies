import React, { useState } from "react";
import Nomination from "./Nomination";
import heart from "../images/heart.svg";

function NominationList(counter) {
  return <Nomination counter={counter} />;
}
export default NominationList;
