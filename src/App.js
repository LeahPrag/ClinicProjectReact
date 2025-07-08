import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorPage from './pages/DoctorPage';
import ClinicsPage from './pages/ClinicsPage';
import SecretaryPage from './pages/SecretaryPage';
import { UserProvider } from './contextUser/UserContext'; // שים לב לנתיב

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Doctors" element={<DoctorPage />} />
          <Route path="/Clinics" element={<ClinicsPage />} />
          <Route path="/Secretary" element={<SecretaryPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
