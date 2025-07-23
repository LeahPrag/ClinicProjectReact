// import React, { useState } from 'react';
// import axios from 'axios';

// function DoctorQueuesForToday() {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [queues, setQueues] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//         setQueues([]);

//         try {
//             const res = await axios.get('http://localhost:5015/api/Doctor/DoctorQueuesForToday ', {
//                 params: { firstName, lastName }
//             });
//             setQueues(res.data);
//             if (res.data.length === 0) setError('No queues found for today for this doctor.');
//         } catch (err) {
//             setError('Error fetching queues.');
//         }
//         setLoading(false);
//     };

//     return (
//         <div style={{
//             padding: '20px',
//             border: '1px solid #1976d2',
//             borderRadius: '8px',
//             background: '#f5faff',
//             marginTop: '20px',
//             maxWidth: '500px'
//         }}>
//             <h3>Doctor's Queues for Today</h3>
//             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                 <input
//                     type="text"
//                     placeholder="First Name"
//                     value={firstName}
//                     onChange={e => setFirstName(e.target.value)}
//                     required
//                     style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Last Name"
//                     value={lastName}
//                     onChange={e => setLastName(e.target.value)}
//                     required
//                     style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                 />
//                 <button
//                     type="submit"
//                     disabled={loading}
//                     style={{
//                         padding: '10px',
//                         borderRadius: '4px',
//                         border: 'none',
//                         background: '#1976d2',
//                         color: '#fff',
//                         fontWeight: 'bold',
//                         cursor: loading ? 'not-allowed' : 'pointer'
//                     }}
//                 >
//                     {loading ? 'Loading...' : 'Show Queues'}
//                 </button>
//             </form>
//             {error && <div style={{ color: '#d32f2f', marginTop: '10px' }}>{error}</div>}
//             {queues.length > 0 && (
//                 <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
//                     {queues.map((q, idx) => (
//                         <li key={idx} style={{
//                             border: '1px solid #90caf9',
//                             borderRadius: '6px',
//                             margin: '10px 0',
//                             padding: '10px',
//                             background: '#e3f2fd'
//                         }}>
//                             <p><strong>Time:</strong> {q.time}</p>
//                             <p><strong>Patient:</strong> {q.patientName}</p>
//                             <p><strong>Room:</strong> {q.roomNumber}</p>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// export default DoctorQueuesForToday;

// // DoctorQueuesForToday.js
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useUser } from '../../contextUser/UserContext'; // ודאי שהנתיב נכון

// // function DoctorQueuesForToday() {
// //   const { user } = useUser(); // מכאן נשלוף את ת"ז
// //   const idNumber = user?.idNumber;

// //   const [queues, setQueues] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     if (!idNumber) return;

// //     setLoading(true);
// //     setError('');
// //     setQueues([]);

// //     axios
// //       .get(`http://localhost:5015/api/Doctor/DoctorQueuesForToday?idNumber=${encodeURIComponent(idNumber)}`)
// //       .then((response) => {
// //         const data = response.data;
// //         setQueues(Array.isArray(data) ? data : []);
// //       })
// //       .catch((err) => {
// //         console.error('Error fetching doctor queues:', err);
// //         setError('שגיאה בטעינת התורים');
// //       })
// //       .finally(() => setLoading(false));
// //   }, [idNumber]);

// //   if (!idNumber) return <p>לא מחובר רופא</p>;

// //   return (
// //     <div style={{ maxWidth: 700, margin: '2rem auto', fontFamily: 'Arial, sans-serif', direction: 'rtl' }}>
// //       <h2>תורים של הרופא להיום</h2>

// //       {loading && <p>טוען תורים...</p>}
// //       {error && <p style={{ color: 'red' }}>{error}</p>}
// //       {!loading && queues.length === 0 && <p>לא נמצאו תורים לרופא זה להיום.</p>}

// //       <ul style={{ listStyle: 'none', padding: 0 }}>
// //         {queues.map((queue) => (
// //           <li key={queue.queueId} style={{
// //             backgroundColor: '#f0f9ff',
// //             borderRadius: '8px',
// //             padding: '1rem',
// //             marginBottom: '1rem',
// //             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
// //           }}>
// //             <p><strong>מספר תור:</strong> {queue.queueId}</p>
// //             <p><strong>תאריך ושעה:</strong> {new Date(queue.appointmentDate).toLocaleString('he-IL')}</p>
// //             <p><strong>מזהה רופא:</strong> {queue.doctorId}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default DoctorQueuesForToday;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../../contextUser/UserContext'; // ודאי שהנתיב תקין

function DoctorQueuesForToday() {
  const { user } = useUser();
  const idNumber = user?.idNumber;

  const [queues, setQueues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!idNumber) {
      setError('לא נמצאה תעודת זהות');
      setLoading(false);
      return;
    }

    axios
      .get(`http://localhost:5015/api/Doctor/DoctorQueuesForToday?idNumber=${encodeURIComponent(idNumber)}`)
      .then((res) => {
        const data = res.data;
        setQueues(Array.isArray(data) ? data : []);
        setError('');
      })
      .catch((err) => {
        console.error('שגיאה בקבלת תורים:', err);
        setError('שגיאה בטעינת התורים');
      })
      .finally(() => setLoading(false));
  }, [idNumber]);

  if (!idNumber) return <p style={{ color: 'red' }}>⚠️ לא מחובר רופא.</p>;

  return (
    <div style={{
      maxWidth: '700px',
      margin: '2rem auto',
      fontFamily: 'Arial, sans-serif',
      direction: 'rtl'
    }}>
      <h2>📋 התורים שלי להיום</h2>

      {loading && <p>⏳ טוען תורים...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && queues.length === 0 && <p>לא נמצאו תורים להיום.</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {queues.map((queue) => (
          <li key={queue.queueId} style={{
            backgroundColor: '#f0f9ff',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1rem',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <p><strong>🕒 שעה:</strong> {new Date(queue.appointmentDate).toLocaleTimeString('he-IL')}</p>
            <p><strong>👤 מטופל:</strong> {queue.patientName}</p>
            <p><strong>🚪 חדר:</strong> {queue.roomNumber}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorQueuesForToday;
