import React, { useState } from 'react';
import ClientsList from '../controllers/ClinicController/ClientsList';
import GetClientById from '../controllers/ClinicController/GetClientById';
import AddClient from '../controllers/ClinicController/AddClient';
import UpdateClient from '../controllers/ClinicController/ApdateClient';
import DeleteClient from '../controllers/ClinicController/DeleteClient';
import AvailableQueuesForDay from '../controllers/ClinicController/Queues/AvailableQueuesForDay';
import AvailableQueuesForToday from '../controllers/ClinicController/Queues/AvailableQueuesForToday';
import MakeAppointment  from '../controllers/ClinicController/Queues/MakeAppointment';

const ClinicsPage = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>ניהול קליינטים</h2>

      {/* כפתורים לשליטה מה להציג */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
        <button onClick={() => setActiveComponent('list')}>📋 הצג את רשימת הקליינטים</button>
        <button onClick={() => setActiveComponent('add')}> הוסף לקוח חדש</button>
        <button onClick={() => setActiveComponent('getById')}>🔍 חפש לפי ת"ז</button>
        <button onClick={() => setActiveComponent('update')}>update client</button>
        <button onClick={() => setActiveComponent('delete')}>delete client</button>
        <button onClick={() => setActiveComponent('AvailableQueuesForDay')}>Available Queues For Day</button>
        <button onClick={() => setActiveComponent('AvailableQueuesForToday')}>Available Queues For Today</button>
        <button onClick={() => setActiveComponent('MakeAppointment')}>Make Appointment</button>
      </div>

      {/* תצוגה דינמית לפי מה שנבחר */}
      <div style={{ marginTop: '2rem' }}>
        {activeComponent === 'AvailableQueuesForDay' && <AvailableQueuesForDay />}
        {activeComponent === 'AvailableQueuesForToday' && <AvailableQueuesForToday />}
        {activeComponent === 'MakeAppointment' && <MakeAppointment />}
        {activeComponent === 'list' && <ClientsList />}
        {activeComponent === 'add' && <AddClient />}
        {activeComponent === 'getById' && <GetClientById />}
        {activeComponent === 'update' && <UpdateClient />}
        {activeComponent === 'delete' && <DeleteClient />}
        

      </div>
    </div>
  );
};

export default ClinicsPage;
