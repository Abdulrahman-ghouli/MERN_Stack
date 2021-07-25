import logo from './logo.svg';
import './App.css';
import AxsPoke from './components/AxsPoke';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  return (
    <div className="App">
     <AxsPoke/>
    </div>
  );
}

export default App;
