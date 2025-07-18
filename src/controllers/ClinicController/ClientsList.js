import React, { useEffect, useState } from 'react';

const ClientsList = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5015/api/Clinic/clients')
      .then(res => {
        if (!res.ok) throw new Error('שגיאה בקבלת הנתונים מהשרת');
        return res.json();
      })
      .then(data => {
        console.log("מה הגיע מהשרת:", data);  // <-- זה חשוב!
        setPatients(data.$values);
      })
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      <h2>רשימת פציינטים</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {patients.map((p, index) => (
          <li key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <p><strong>ID:</strong> {p.idNumber}</p>
            <p><strong>Name:</strong> {p.firstName} {p.lastName}</p>
            <p><strong>Queues:</strong></p>
            <ul>
              {Array.isArray(p.clinicQueues?.$values) && p.clinicQueues.$values.map((q, i) => (
                <li key={i}>
                  תור בתאריך: {q.appointmentDate}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ClientsList;
