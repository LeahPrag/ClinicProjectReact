import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../contextUser/UserContext';

const HomePage = () => {
  const [id, setId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUserId } = useUser();

  const handleLogin = async () => {
    try {
      setError('');
      console.log('Trying to login with ID:', id);

      // 1. שולח את ה-ID לקבלת סוג משתמש
      const response = await axios.get(`http://localhost:5015/api/LogIn/GetUserType?id=${id}`);
      const userType = response.data;
      console.log('User type from server:', userType);

      // 2. שומר את תעודת הזהות ב־context
      setUserId(id);

      // 3. מפנה למסך המתאים לפי סוג משתמש
      if (userType === 'Doctor') {
        navigate('/DoctorPage');
      } else if (userType === 'Client') {
        navigate('/ClinicsPage');
      } else if (userType === 'Secretary') {
        navigate('/SecretaryPage');
      } else {
        setError('סוג משתמש לא מזוהה');
      }

    } catch (err) {
      console.error('Login error:', err);
      setError('תעודת זהות לא קיימת או שגיאת שרת');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>כניסה למערכת המרפאה</h2>
        <input
          type="text"
          placeholder="הכנס תעודת זהות"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button} onClick={handleLogin}>להתחברות</button>
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default HomePage;

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f4f8',
  },
  card: {
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    fontFamily: 'Exo',
  },
  title: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
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
    backgroundColor: '#BED5ABff',
    color: 'white',
  },
  error: {
    color: 'red',
    marginTop: '1rem',
  },
};
