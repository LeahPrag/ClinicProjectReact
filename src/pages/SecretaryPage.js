import React, { useState } from 'react';
import DoctorList from '../controllers/DoctorController/DoctorList';
import DeleteDayOfWork from '../controllers/DoctorController/DeleteDayOfWork';
import AvailableQueuesToday from '../controllers/DoctorController/AvailableQueuesToday';
import DoctorQueuesForToday from '../controllers/DoctorController/DoctorQueuesForToday';
import NumOfClientsForToday from '../controllers/DoctorController/NumOfClientsForToday';

const SecretaryPage = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    return (
        <div>
            <h2>Doctor Management</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <button onClick={() => setActiveComponent('list')}>📋 Show Doctors List</button>
                <button onClick={() => setActiveComponent('queues')}>📋 Available Queues for Today</button>
                <button onClick={() => setActiveComponent('delete')}>📋 Delete Work Day</button>
                <button onClick={() => setActiveComponent('queuesDoctor')}>📋 Today's Queues for Specific Doctor</button>
                <button onClick={() => setActiveComponent('numOfClientsForToday')}>📋 Number of Clients for Today</button>
            </div>
            <div style={{ marginTop: '2rem' }}>
                {activeComponent === 'list' && <DoctorList />}
                {activeComponent === 'queues' && <AvailableQueuesToday />}
                {activeComponent === 'delete' && <DeleteDayOfWork />}
                {activeComponent === 'queuesDoctor' && <DoctorQueuesForToday />}
                {activeComponent === 'numOfClientsForToday' && <NumOfClientsForToday />}
            </div>
        </div>
    );
};

export default SecretaryPage;