import React from 'react';
import './Tabs.css'; // Import the corresponding CSS file

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Overview', 'Curriculum', 'Instructor'];

  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? 'active-tab' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;