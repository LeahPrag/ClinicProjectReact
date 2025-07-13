import React, { useState } from 'react';
import axios from 'axios';

const UpdateDoctor = () => {
    const [dto, setDto] = useState({
        idNumber: '',
        newFirstName: '',
        newLastName: '',
        newSpecialization: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = e => {
        setDto({ ...dto, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.put('/api/Doctor/updateDoctor', dto);
            setMessage('Details updated successfully');
        } catch (e) {
            setMessage('Error updating details');
        }
    }

    return (
        <div>
            <h2>Update Doctor</h2>
            <form onSubmit={handleSubmit}>
                <input name="idNumber" placeholder="Doctor's ID number" onChange={handleChange} required />
                <input name="newFirstName" placeholder="New first name" onChange={handleChange} />
                <input name="newLastName" placeholder="New last name" onChange={handleChange} />
                <input name="newSpecialization" placeholder="New specialization" onChange={handleChange} />
                <button type="submit">Update</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default UpdateDoctor;
