
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AvailableQueues = () => {
  const [queues, setQueues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQueues = async () => {
      try {
        const response = await axios.get('http://localhost:5015/api/Doctor/AvailableQueuesForToday');
        console.log('Server response:', response.data);
        // תיקון: לגשת ל-$values
        setQueues(response.data.$values || []);
      } catch (err) {
        console.error('Error fetching queues:', err);
        setError('שגיאה בטעינת התורים מהשרת');
      }
    };

    fetchQueues();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>תורים זמינים להיום</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {queues.length === 0 ? (
        <p>אין תורים זמינים להצגה.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>מספר תור</th>
              <th>שעה</th>
              <th>מספר רופא</th>
            </tr>
          </thead>
          <tbody>
            {queues.map((queue) => (
              <tr key={queue.queueId}>
                <td>{queue.queueId}</td>
                <td>{new Date(queue.appointmentDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                <td>{queue.doctorId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AvailableQueues;

