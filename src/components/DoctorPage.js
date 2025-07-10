import React, { useState } from 'react';
import DoctorList from '../controllers/DoctorController/DoctorList';
import DeleteDayOfWork from '../controllers/DoctorController/DeleteDayOfWork';
import AvailableQueuesToday from '../controllers/DoctorController/AvailableQueuesToday';
import DoctorQueuesForToday from '../controllers/DoctorController/DoctorQueuesForToday';
import NumOfClientsForToday from '../controllers/DoctorController/NumOfClientsForToday';
import Layout from '../Layout';

const DoctorPage = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <Layout title="ניהול רופאים">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button onClick={() => setActiveComponent('list')}>📋 רשימת רופאים</button>
        <button onClick={() => setActiveComponent('queues')}>📋 תורים זמינים להיום</button>
        <button onClick={() => setActiveComponent('delete')}>📋 מחיקת יום עבודה</button>
        <button onClick={() => setActiveComponent('queuesDoctor')}>📋 תורים לרופא מסוים</button>
        <button onClick={() => setActiveComponent('numOfClientsForToday')}>📋 מספר קליינטים להיום</button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {activeComponent === 'list' && <DoctorList />}
        {activeComponent === 'queues' && <AvailableQueuesToday />}
        {activeComponent === 'delete' && <DeleteDayOfWork />}
        {activeComponent === 'queuesDoctor' && <DoctorQueuesForToday />}
        {activeComponent === 'numOfClientsForToday' && <NumOfClientsForToday />}
      </div>
    </Layout>
  );
};

export default DoctorPage;
