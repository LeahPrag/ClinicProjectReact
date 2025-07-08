
// HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../contextUser/UserContext';

const HomePage = () => {
  const [idNumber, setIdNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUserId } = useUser(); // Save ID in context

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:5015/api/LogIn/GetUserType?id=${idNumber}`);
      const userType = response.data;
      console.log('User Type:', userType); // Debugging log

      setUserId(idNumber); // Save the ID to context

     if (userType === 'Doctor') navigate('/Doctors');
     else if (userType === 'client') navigate('/Clinics');
     else if (userType === 'Secretary') navigate('/Secretary');
     else setError('Unrecognized user type');
    } catch (err) {
      setError('ID not found or server error');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login to the Clinic System</h2>
      <input
        type="text"
        placeholder="Enter ID number"
        value={idNumber}
        onChange={(e) => setIdNumber(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

export default HomePage;

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  title: {
    marginBottom: '1rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '200px',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  error: {
    color: 'red',
    marginTop: '1rem',
  },
};
