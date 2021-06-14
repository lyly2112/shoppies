// import logo from './logo.svg';
import "./css/font.css";
import "./App.css";
import Search from "./components/Search";
import NominationList from "./components/NominationList";
import React from "react";
// import { useState, useEffect } from 'react;'

function App() {
  return (
    <div className="App">
      <Search />
      <NominationList />
    </div>
  );
}

export default App;
