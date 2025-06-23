import React, { useState } from 'react';
import axios from 'axios';

function DeleteDayOfWork() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [day, setDay] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        try {
            const response = await axios.delete('http://localhost:5015/deleteADayOfWork', {
                params: {
                    firstName,
                    lastName,
                    day
                }
            });
            if (response.data === true) {
                setResult({ success: true, message: 'Day deleted successfully!' });
            } else {
                setResult({ success: false, message: 'No work day found to delete.' });
            }
        } catch (error) {
            setResult({ success: false, message: 'Error deleting. Please try again.' });
        }
        setLoading(false);
    };

    return (
        <div style={{
            padding: '20px',
            border: '1px solid #f44336',
            borderRadius: '8px',
            background: '#fff8f8',
            marginTop: '20px',
            maxWidth: '400px'
        }}>
            <h3>Delete Doctor Work Day</h3>
            <form onSubmit={handleDelete} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                <input
                    type="date"
                    value={day}
                    onChange={e => setDay(e.target.value)}
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
                        background: '#f44336',
                        color: '#fff',
                        fontWeight: 'bold',
                        cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {loading ? 'Deleting...' : 'Delete Work Day'}
                </button>
            </form>
            {result && (
                <div style={{
                    marginTop: '15px',
                    color: result.success ? '#388e3c' : '#d32f2f',
                    fontWeight: 'bold'
                }}>
                    {result.message}
                </div>
            )}
        </div>
    );
}

export default DeleteDayOfWork;