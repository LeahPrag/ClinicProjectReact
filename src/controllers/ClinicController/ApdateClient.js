import React, { useState } from 'react';
import axios from 'axios';

const UpdateClient = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    idNumber: '',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const clientToUpdate = {
        ...formData,
        clinicQueues: [],
      };

      await axios.put('http://localhost:5015/api/Clinic/clients', clientToUpdate);

      setSuccess('The client has been successfully updated!');
      setError('');
    } catch (err) {
      console.error(err);
      setError('An error occurred while updating the client');
      setSuccess('');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h3>Customer update by ID</h3>

      {['idNumber', 'firstName', 'lastName', 'phone', 'email', 'address'].map((field) => (
        <div key={field} style={{ marginBottom: '1rem' }}>
          <label>
            {field}:
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </label>
        </div>
      ))}

      <button onClick={handleSubmit}>🔄 עדכן לקוח</button>

      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UpdateClient;
