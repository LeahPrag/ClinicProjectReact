import React, { useState } from 'react';
import axios from 'axios';

const MakeAppointment = () => {
  const [idDoctor, setIdDoctor] = useState('');
  const [idClient, setIdClient] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleAppointment = async () => {
    try {
      const response = await axios.post('http://localhost:5015/api/Clinic/makeAppointment', null, {
        params: {
          idDoctor,
          idClient,
          date,
          hour,
        },
      });
      setMessage('✅ התור נקבע בהצלחה!');
      setError('');
    } catch (err) {
      setMessage('');
      setError('❌ שגיאה בקביעת התור. בדוק את הנתונים ונסה שוב.');
    }
  };

  return (
    <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
      <h3>📆 קביעת תור חדש</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="ת״ז רופא"
          value={idDoctor}
          onChange={(e) => setIdDoctor(e.target.value)}
        />
        <input
          type="text"
          placeholder="ת״ז לקוח"
          value={idClient}
          onChange={(e) => setIdClient(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="שעה (0-23)"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          min="0"
          max="23"
        />
        <button onClick={handleAppointment}>📅 קבע תור</button>
      </div>

      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default MakeAppointment;
