import React from 'react';

import NavBar from '../Navbar';

export default function Screen({
  children,
  safe,
}) {
  return (
    <div style={{
      backgroundColor: '#F1FAEE',
    }}
    >
      <NavBar />
      <div style={{
        margin: '60px auto 0px auto',
        maxWidth: '1280px',
        height: safe && '100vh',
      }}
      >
        {children}
      </div>
    </div>
  );
}
