import logo from './logo.svg';
import './App.css';

// src/App.js
import React from 'react';
import DoctorList from './DoctorController/DoctorList'; 

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Clinic System</h1>
      <DoctorList />
    </div>
  );
}

export default App;



