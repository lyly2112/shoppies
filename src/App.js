// import logo from './logo.svg';
import "./css/font.css";

import "./App.css";
import Search from "./components/Search";
import NominationList from "./components/NominationList";

// import axios from 'axios';
// import { useState, useEffect } from 'react';
import React, { useState } from "react";

function App() {
  // const nominations = [
  //   {
  //     id: 1,
  //     title: "title1"
  //   },
  //   {
  //     id: 2,
  //     title: "title2"
  //   },
  // ];

  return (
    <div className="App">
      <Search />
      {/* <NominationList  /> */}
    </div>
  );
}

export default App;
