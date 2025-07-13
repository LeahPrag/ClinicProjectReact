import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AvailableQueuesToday() {
  const [queues, setQueues] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5015/api/Doctor/AvailableQueuesForToday')
      .then(res => {
        const data = res.data?.$values ?? res.data ?? [];
        setQueues(Array.isArray(data) ? data : []);
      })
      .catch(err => {
        console.error('Error fetching queues:', err);
        setQueues([]); 
      });
  }, []);
  

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Queues For Today</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
      {(queues?.length ?? 0) === 0 && <li>No available queues for today.</li>}
      {Array.isArray(queues) && queues.map((queue, index) => (
          <li
            key={index}
            style={{
              border: '1px solid #4caf50',
              borderRadius: '8px',
              margin: '10px 0',
              padding: '15px',
              background: '#f9fff9',
              boxShadow: '0 2px 8px #e0ffe0'
            }}
          >
            <p><strong>Doctor:</strong> {queue.doctorName}</p>
            <p><strong>Time:</strong> {queue.time}</p>
            <p><strong>Room:</strong> {queue.roomNumber}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableQueuesToday;