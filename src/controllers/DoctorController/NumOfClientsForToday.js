import React, { useState } from 'react';
import axios from 'axios';

function NumOfClientsForToday() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [num, setNum] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setNum(null);

        try {
            const res = await axios.get('http://localhost:5015/GetNumOfClientForToday', {
                params: { firstName, lastName }
            });
            setNum(res.data);
        } catch (err) {
            setError('Error fetching data.');
        }
        setLoading(false);
    };

    return (
        <div style={{
            padding: '20px',
            border: '1px solid #009688',
            borderRadius: '8px',
            background: '#e0f2f1',
            marginTop: '20px',
            maxWidth: '400px'
        }}>
            <h3>Number of Clients for Today</h3>
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
                        background: '#009688',
                        color: '#fff',
                        fontWeight: 'bold',
                        cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {loading ? 'Loading...' : 'Show Number of Clients'}
                </button>
            </form>
            {error && <div style={{ color: '#d32f2f', marginTop: '10px' }}>{error}</div>}
            {num !== null && !error && (
                <div style={{
                    marginTop: '15px',
                    color: '#00695c',
                    fontWeight: 'bold',
                    fontSize: '1.2em'
                }}>
                    Number of clients for today: {num}
                </div>
            )}
        </div>
    );
}

export default NumOfClientsForToday;