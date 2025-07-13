import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contextUser/UserContext';
import Layout from './Layout';
import DoctorList from '../controllers/DoctorController/DoctorList';
import DeleteDayOfWork from '../controllers/DoctorController/DeleteDayOfWork';
import AvailableQueuesToday from '../controllers/DoctorController/AvailableQueuesToday';
import DoctorQueuesForToday from '../controllers/DoctorController/DoctorQueuesForToday';
import NumOfClientsForToday from '../controllers/DoctorController/NumOfClientsForToday';
import AddDoctor from '../controllers/DoctorController/AddDoctor';
import UpdateDoctor from '../controllers/DoctorController/UpdateDoctor';
import DeleteDoctor from '../controllers/DoctorController/DeleteDoctor';
import AvailableQueuesForASpezesilation from '../controllers/DoctorController/AvailableQueuesForASpezesilation';

const DoctorPage = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const { userName, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#BED5ABff',
    color: 'black',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#9CB37D',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '2rem',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  };

  return (
    <Layout title="Doctor Management">
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Hello {userName}!! 👋</h2>
        <button onClick={handleLogout} style={buttonStyle}>Log out</button>
      </div>

      <div style={buttonContainerStyle}>
        <div style={columnStyle}>
          <button style={activeComponent === 'list' ? activeButtonStyle : buttonStyle} onClick={() => setActiveComponent('list')}>📋 Doctor List</button>
          <button style={activeComponent === 'queues' ? activeButtonStyle : buttonStyle} onClick={() => setActiveComponent('queues')}>📋 Available Queues Today</button>
          <button style={activeComponent === 'deleteDay' ? activeButtonStyle : buttonStyle} onClick={() => setActiveComponent('deleteDay')}>🗓️ Delete Day of Work</button>
          <button style={activeComponent === 'queuesDoctor' ? activeButtonStyle : buttonStyle} onClick={() => setActiveComponent('queuesDoctor')}>📅 Queues for Specific Doctor</button>
          <button style={activeComponent === 'numClients' ? activeButtonStyle : buttonStyle} onClick={() => setActiveComponent('numClients')}>👥 Number of Clients Today</button>
        </div>
        <div style={columnStyle}>
          <button style={activeComponent === 'queuesBySpec' ? activeButtonStyle : buttonStyle} onClick={() => setActiveComponent('queuesBySpec')}>🩺 Queues by Specialization</button>
          <button style={activeComponent === 'addDoctor' ? activeButtonStyle : buttonStyle} onClick={() => setActiveComponent('addDoctor')}>➕ Add Doctor</button>
          <button style={activeComponent === 'updateDoctor' ? activeButtonStyle : buttonStyle} onClick={() => setActiveComponent('updateDoctor')}>✏️ Update Doctor</button>
          <button style={activeComponent === 'deleteDoctor' ? activeButtonStyle : buttonStyle} onClick={() => setActiveComponent('deleteDoctor')}>🗑️ Delete Doctor</button>
        </div>
      </div>

      <div>
        {activeComponent === 'list' && <DoctorList />}
        {activeComponent === 'queues' && <AvailableQueuesToday />}
        {activeComponent === 'deleteDay' && <DeleteDayOfWork />}
        {activeComponent === 'queuesDoctor' && <DoctorQueuesForToday />}
        {activeComponent === 'numClients' && <NumOfClientsForToday />}
        {activeComponent === 'queuesBySpec' && <AvailableQueuesForASpezesilation />}
        {activeComponent === 'addDoctor' && <AddDoctor />}
        {activeComponent === 'updateDoctor' && <UpdateDoctor />}
        {activeComponent === 'deleteDoctor' && <DeleteDoctor />}
      </div>
    </Layout>
  );
};

export default DoctorPage;
