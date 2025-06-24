import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// src/App.js
import React from 'react';
import HomePage from './pages/HomePage';
import DoctorPage from './pages/DoctorPage';
import ClinicsPage from './pages/ClinicsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the Clinic System</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Doctors" element={<DoctorPage />} />
          <Route path="/Clinics" element={<ClinicsPage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;



