// import logo from './logo.svg';
import "./css/font.css";
import "./App.css";
import Search from "./components/Search";
import NominationList from "./components/NominationList";
import React from "react";
import { useState, useEffect } from 'react';

function App() {
  const [nominations, setNominations] = useState([]);

  useEffect(() => {
    console.log("App component -> nominations: ", nominations);
  }, [nominations]);

  return (
    <div className="App">
      <Search nominations={nominations} setNominations={setNominations} />
      <NominationList nominations={nominations} />
    </div>
  );
}

export default App;
