import React, { useState } from 'react';
import axios from 'axios';

const AddDoctor = () => {
    const [doctor, setDoctor] = useState({
        firstName: '',
        lastName: '',
        idNumber: '',
        specialization: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = e => {
        setDoctor({ ...doctor, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5015/api/Doctor/addDoctor', doctor);
            setMessage(response.data);
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data);
            } else {
                setMessage('General error occurred while sending the request.');
            }
        }
    };

    return (
        <div>
            <h2>Add Doctor</h2>
            <form onSubmit={handleSubmit}>
                <input name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <input name="idNumber" placeholder="ID Number" onChange={handleChange} required />
                <input name="specialization" placeholder="Specialization" onChange={handleChange} required />
                <button type="submit">Add</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddDoctor;
