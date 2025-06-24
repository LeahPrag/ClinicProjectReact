import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorPage from './pages/DoctorPage';
import ClinicsPage from './pages/ClinicsPage';
import { UserProvider } from './contextUser/UserContext'; // שים לב לנתיב

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DoctorPage" element={<DoctorPage />} />
          <Route path="/ClinicsPage" element={<ClinicsPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
