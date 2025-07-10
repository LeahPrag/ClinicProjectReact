import React, { useState } from 'react';
import axios from 'axios';

const AvailableQueuesForDay = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [queues, setQueues] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5015/api/Clinic/availableQueuesForDay`, {
        params: {
          firstName,
          lastName,
          date,
        },
      });
      if (response.data?.$values) setQueues(response.data.$values);
      else setQueues(response.data);
      setError('');
    } catch (err) {
      setError('שגיאה בקבלת נתונים');
      setQueues([]);
    }
  };

  return (
    <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
      <h3>🔍 זמינות תורים לרופא ביום מסוים</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="שם פרטי של הרופא"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="שם משפחה של הרופא"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleSearch}>בדוק זמינות</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {queues.length > 0 ? (
        <ul>
          {queues.map((q, index) => (
            <li key={index}>
              תור ב־{new Date(q.appointmentDate).toLocaleString()} | מזהה תור: {q.queueId}
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>אין תורים להצגה.</p>
      )}
    </div>
  );
};

export default AvailableQueuesForDay;
