import React, { useState } from 'react';
import axios from 'axios';

const DeleteClient = () => {
  const [idNumber, setIdNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDeleteClient = async () => {
    try {
      await axios.delete(`http://localhost:5015/api/Clinic/clients/${idNumber}`);
      setSuccessMessage(`הלקוח עם ת"ז ${idNumber} נמחק בהצלחה.`);
      setErrorMessage('');
      setIdNumber('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('שגיאה במחיקת הלקוח. ודא שת"ז קיימת במערכת.');
    }
  };

  return (
    <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
      <h3>🗑️ מחיקת לקוח לפי תעודת זהות</h3>
      <input
        type="text"
        placeholder="הכנס תעודת זהות"
        value={idNumber}
        onChange={(e) => setIdNumber(e.target.value)}
        style={{ marginRight: '1rem' }}
      />
      <button onClick={handleDeleteClient}>מחק</button>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default DeleteClient;
