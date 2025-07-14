import React from 'react';
import './ColdStartOverlay.css';

const ColdStartOverlay = ({ message }) => {
  return (
    <div className="coldstart-overlay">
      <div className="coldstart-content">
        <svg className="spinner" viewBox="0 0 50 50">
          <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
        </svg>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ColdStartOverlay; 