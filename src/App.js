// import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import NominationList from './components/NominationList';
import Nomination from './components/Nomination';

// import axios from 'axios';
// import { useState, useEffect } from 'react';
import React, { useState } from 'react';


function App() {

  return (
    <div className='App'>
      <Search />
      <NominationList />
    </div>
  );
}

export default App;
