import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorPage from './components/DoctorPage';
import ClinicsPage from './pages/ClinicsPage';
import { UserProvider } from './contextUser/UserContext';
import RegisterPage from './components/RegisterPage';
import Layout from './components/Layout';


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          {/* ✅ Regular pages are wrapped */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/DoctorPage" element={<DoctorPage />} />
          <Route path="/ClinicsPage" element={<Layout><ClinicsPage /></Layout>} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
