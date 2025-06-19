import React, { useState } from 'react';
import DoctorList from '../controllers/DoctorController/DoctorList';

const DoctorPage = () => {
    const [showList, setShowList] = useState(false);

    return (
        <div>
            <h2>ניהול רופאים</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <button onClick={() => setShowList(true)}>📋 הצג את רשימת הרופאים</button>
            </div>         
            {showList && <DoctorList />}
        </div>
    );
};

export default DoctorPage;