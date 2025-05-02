import React from 'react';

export default function PageLayout({ children }) {
  return (
    <div style={{ paddingTop: '140px', minHeight: 'calc(100vh - 90px)' }}>
      {children}
    </div>
  );
}
