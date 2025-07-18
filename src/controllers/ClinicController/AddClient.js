import React, { useState } from 'react';
import axios from 'axios';

const AddClient = () => {
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
      const clientToSend = {
        ...formData,
        clinicQueues: [],
      };

      const response = await axios.post('http://localhost:5015/api/Clinic/clients', clientToSend);

      setSuccess('Customer added successfully!');
      setError('');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        idNumber: '',
      });
    } catch (err) {
      setSuccess('');
      setError('An error occurred while adding the customer.');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h3>Adding a new customer</h3>

      {['firstName', 'lastName', 'phone', 'email', 'address', 'idNumber'].map((field) => (
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

      <button onClick={handleSubmit}>Add customer</button>

      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddClient;
