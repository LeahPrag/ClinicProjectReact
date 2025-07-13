import React, { useState } from 'react';
import axios from 'axios';

const DeleteDoctor = () => {
    const [id, setId] = useState('');
    const [deleted, setDeleted] = useState(null);

    const handleDelete = async () => {
        try {
            await axios.delete('/api/Doctor/deleteADoctor', { params: { id } });
            setDeleted(true);
        } catch (e) {
            setDeleted(false);
        }
    }

    return (
        <div>
            <h2>Delete Doctor</h2>
            <input
                type="text"
                placeholder="Doctor ID"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <button onClick={handleDelete}>Delete</button>
            {deleted === true && <p>Doctor deleted successfully</p>}
            {deleted === false && <p>Error deleting doctor</p>}
        </div>
    );
}

export default DeleteDoctor;
