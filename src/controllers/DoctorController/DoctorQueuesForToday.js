import React, { useState } from 'react';
import axios from 'axios';

function DoctorQueuesForToday() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [queues, setQueues] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setQueues([]);

        try {
            const res = await axios.get('http://localhost:5015/ ', {
                params: { firstName, lastName }
            });
            setQueues(res.data);
            if (res.data.length === 0) setError('No queues found for today for this doctor.');
        } catch (err) {
            setError('Error fetching queues.');
        }
        setLoading(false);
    };

    return (
        <div style={{
            padding: '20px',
            border: '1px solid #1976d2',
            borderRadius: '8px',
            background: '#f5faff',
            marginTop: '20px',
            maxWidth: '500px'
        }}>
            <h3>Doctor's Queues for Today</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: '10px',
                        borderRadius: '4px',
                        border: 'none',
                        background: '#1976d2',
                        color: '#fff',
                        fontWeight: 'bold',
                        cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {loading ? 'Loading...' : 'Show Queues'}
                </button>
            </form>
            {error && <div style={{ color: '#d32f2f', marginTop: '10px' }}>{error}</div>}
            {queues.length > 0 && (
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
                    {queues.map((q, idx) => (
                        <li key={idx} style={{
                            border: '1px solid #90caf9',
                            borderRadius: '6px',
                            margin: '10px 0',
                            padding: '10px',
                            background: '#e3f2fd'
                        }}>
                            <p><strong>Time:</strong> {q.time}</p>
                            <p><strong>Patient:</strong> {q.patientName}</p>
                            <p><strong>Room:</strong> {q.roomNumber}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DoctorQueuesForToday;