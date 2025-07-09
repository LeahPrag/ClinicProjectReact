import React from 'react';
import Layout from './Layout';

const RegisterPage = () => {
  return (
    <Layout title="הרשמה למערכת" backgroundStyle={styles.background}>
      <form style={styles.form}>
        <h2 style={styles.title}>טופס הרשמה</h2>
        <input type="text" placeholder="שם משתמש" style={styles.input} />
        <input type="email" placeholder="אימייל" style={styles.input} />
        <input type="password" placeholder="סיסמה" style={styles.input} />
        <button style={styles.button} type="submit">הרשם</button>
      </form>
    </Layout>
  );
};

const styles = {
  background: {
    minHeight: '70vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1588776814546-133d62ab9b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  title: {
    margin: 0,
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#4CAF50',
    fontWeight: '700',
    fontSize: '1.8rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontWeight: '700',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1.1rem',
  },
};

export default RegisterPage;
