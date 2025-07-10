import React, { useState } from 'react';
import axios from 'axios';

const GetClientById = () => {
    const [idNumber, setIdNumber] = useState('');
    const [client, setClient] = useState(null);
    const [error, setError] = useState('');

    const handleGetClient = async () => {
        try {
            const response = await axios.get(`http://localhost:5015/api/Clinic/clients/${idNumber}`);
            setClient(response.data);
            setError('');
        } catch (err) {
            setClient(null);
            setError('לא נמצא לקוח עם ת"ז זו');
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h3>חפש קליינט לפי תעודת זהות</h3>
            <input
                type="text"
                placeholder="הכנס תעודת זהות"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
            />
            <button onClick={handleGetClient}>🔍 חפש</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {client && (
  <div style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
    <p><strong>ID:</strong> {client.idNumber}</p>
    <p><strong>Name:</strong> {client.firstName} {client.lastName}</p>
    <p><strong>Queues:</strong></p>
    {Array.isArray(client.clinicQueues?.$values) && client.clinicQueues.$values.length > 0 ? (
      <ul>
        {client.clinicQueues.$values.map((q, i) => (
          <li key={i}>
            מזהה תור: {q.queueId} | תאריך: {q.appointmentDate}
          </li>
        ))}
      </ul>
    ) : (
      <p>אין תורים</p>
    )}
  </div>
)}

        </div>
    );
};

export default GetClientById;
