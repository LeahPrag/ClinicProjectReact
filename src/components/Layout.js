import React from 'react';

const Layout = ({ title, children, backgroundStyle }) => {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.wrapper, ...backgroundStyle }}>
        <header style={styles.header}>
          <h1 style={styles.headerTitle}>🩺 Clinic Management System</h1>
        </header>

        <main style={styles.main}>
          <h2 style={styles.pageTitle}>{title}</h2>
          {children}
        </main>

        <footer style={styles.footer}>
          <p>© 2025 Clinic</p>
        </footer>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: 'url("/clinic-background.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundAttachment: 'scroll',
  },
  wrapper: {
    minHeight: '100vh',
    maxHeight: '300vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#BED5ABff', 
    color: 'black',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  headerTitle: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  pageTitle: {
    marginBottom: '1.5rem',
    color: '#2c3e50',
    borderBottom: '2px solid #6CCD6F',
    paddingBottom: '0.5rem',
  },
  footer: {
    backgroundColor: '#6CCD6F',
    padding: '0.1rem',
    textAlign: 'center',
    fontSize: '0.5rem',
    color: '#555',
  },
};

export default Layout;
