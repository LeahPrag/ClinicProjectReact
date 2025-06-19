import React, { useState } from 'react';
import ClientsList from '../controllers/ClinicController/ClientsList';
import GetClientById from '../controllers/ClinicController/GetClientById';



const ClinicsPage = () => {
  const [showList, setShowList] = useState(false);
  

  return (
    <div>
      <h2>ניהול קליינטים</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <button onClick={() => setShowList(true)}>📋 הצג את רשימת הקליינטים</button>

      </div>
      {showList && <ClientsList />}
      <GetClientById />
    </div>
  );
};

export default ClinicsPage;
