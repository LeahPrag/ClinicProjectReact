import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>ברוכים הבאים למערכת המרפאה</h2>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => navigate('/Doctors')}>
          👨‍⚕️ רופאים
        </button>
        <button style={styles.button} onClick={() => navigate('/Clinics')}>
          👤 פציינטים
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  title: {
    marginBottom: '2rem',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    cursor: 'pointer',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#f2f2f2',
  },
};

export default HomePage;