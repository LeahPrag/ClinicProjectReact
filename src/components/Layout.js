import React from 'react';

const Layout = ({ title, children, backgroundStyle }) => {
  return (
    <div style={{ ...styles.wrapper, ...backgroundStyle }}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>🩺 מערכת ניהול מרפאה</h1>
      </header>

      <main style={styles.main}>
        <h2 style={styles.pageTitle}>{title}</h2>
        {children}
      </main>

      <footer style={styles.footer}>
        <p>© 2025 מרפאת לאהלה</p>
      </footer>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'transparent', // אין רקע בברירת מחדל
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
  },
  headerTitle: {
    margin: 0,
    fontSize: '1.8rem',
  },
  main: {
    flex: 1,
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  pageTitle: {
    marginBottom: '1.5rem',
    color: '#333',
    borderBottom: '2px solid #4CAF50',
    paddingBottom: '0.5rem',
  },
  footer: {
    backgroundColor: '#eee',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
};
///////
export default Layout;
