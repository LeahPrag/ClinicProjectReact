// src/components/DoctorList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    
   axios.get('http://localhost:5015/getAllDoctors')
  .then(res => {
    console.log('Doctors data:', res.data);
    setDoctors(res.data);
     })
  .catch(err => console.error('Error fetching doctors:', err));

  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Doctors</h2>
      <ul>
        {doctors.map((doc, index) => (
          <li key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <p><strong>Name:</strong> {doc.firstName} {doc.lastName}</p>
            <p><strong>Specialization:</strong> {doc.specialization}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorList;
