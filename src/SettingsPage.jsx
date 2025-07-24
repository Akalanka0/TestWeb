import React from 'react';

const SettingsPage = () => (
  <div style={pageStyle}>
    This is the Settings page.
  </div>
);

const pageStyle = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2rem',
  color: '#fff',
  background: 'linear-gradient(135deg, #0e1326 0%, #1a1f38 100%)',
};

export default SettingsPage;
