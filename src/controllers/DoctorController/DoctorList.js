import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5015/api/Doctor/getAllDoctors')
      .then(res => {
        console.log('Doctors data:', res.data); 
        setDoctors(res.data.$values);
        setError('');
      })
      .catch(err => {
        setError('שגיאה בטעינת רשימת הרופאים');
        console.error('Error fetching doctors:', err);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Doctors</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {doctors.length === 0 && !error && <p>לא נמצאו רופאים.</p>}
      <ul>
        {doctors.map((doc) => (
          <li key={doc.doctorId} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <p><strong>Name:</strong> {doc.firstName} {doc.lastName}</p>
            <p><strong>Specialization:</strong> {doc.specialization}</p>
            <p><strong>Doctor ID:</strong> {doc.doctorId}</p>
            <p><strong>ID Number:</strong> {doc.idNumber}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorList;