// HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useUser } from './UserContext';
import { useUser } from '../contextUser/UserContext';


const HomePage = () => {
  const [id, setId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUserId } = useUser(); // שמירת ת"ז

  const handleLogin = async () => {
    try {

      
      const response = await axios.get(`http://localhost:5015/api/LogIn/GetUserType?id=${id}`);
      console.log("API Response:", response);
      const userType = response.data;

      setUserId(id); // שמירת התעודת זהות בקונטקסט

      if (userType === 'Doctor') navigate('/DoctorPage');
      else if (userType === 'Client') navigate('/ClinicsPage');
      else if (userType === 'Secretary') navigate('/SecretaryPage');
      else setError('סוג משתמש לא מזוהה');
    } catch (err) {
      setError('תעודת זהות לא נמצאה או שגיאה בשרת');
    }
  };

  return (

    <div style={styles.container}>
      <h2 style={styles.title}>כניסה למערכת המרפאה</h2>
      <input
        type="text"
        placeholder="הכנס תעודת זהות"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button} onClick={handleLogin}>
        התחבר
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