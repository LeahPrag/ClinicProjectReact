import React, { useState } from 'react';
import ClientsList from '../controllers/ClinicController/ClientsList';
import GetClientById from '../controllers/ClinicController/GetClientById';
import Layout from '../Layout';

const ClinicsPage = () => {
  const [showList, setShowList] = useState(false);

  return (
    <Layout title="ניהול קליינטים">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button onClick={() => setShowList(true)}>📋 הצג את רשימת הקליינטים</button>
      </div>
      {showList && <ClientsList />}
      <GetClientById />
    </Layout>
  );
};

export default ClinicsPage;
