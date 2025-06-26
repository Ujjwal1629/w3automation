import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './TestPractice.css';
import './IframeTest.css';

const IframeTest = () => {
  const [activeTab, setActiveTab] = useState('single');
  const [inputValue, setInputValue] = useState('');
  const themeContext = useTheme();
  const isDarkMode = themeContext ? themeContext.isDarkMode : false;

  return (
    <div className={`test-practice-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1 className="test-title">iFrame Testing</h1>
      
      <div className="description-box">
        <p>
          This test page allows you to practice working with iFrames in automation testing.
          You can switch between a single iframe and nested iframes to test different scenarios.
        </p>
        <p>
          <strong>Common iframe challenges in automation:</strong>
        </p>
        <ul>
          <li>Switching between frames and the main document</li>
          <li>Handling nested frames</li>
          <li>Accessing elements within frames</li>
          <li>Frame identification and switching</li>
        </ul>
      </div>

      <div className="tab-container">
        <button 
          className={`tab-button ${activeTab === 'single' ? 'active' : ''}`}
          onClick={() => setActiveTab('single')}
        >
          Single iframe
        </button>
        <button 
          className={`tab-button ${activeTab === 'nested' ? 'active' : ''}`}
          onClick={() => setActiveTab('nested')}
        >
          Iframe with in an Iframe
        </button>
      </div>

      <div className="iframe-content-container">
        {activeTab === 'single' && (
          <div className="single-iframe-container">
            <div className="iframe-border">
              <h2>iFrame Demo</h2>
              <iframe
                title="Single iFrame"
                id="singleFrame"
                src="/iframe-content.html"
                width="100%"
                height="400px"
                style={{ border: '1px solid #ddd' }}
              >
                Your browser does not support iframes.
              </iframe>
            </div>
          </div>
        )}

        {activeTab === 'nested' && (
          <div className="nested-iframe-container">
            <div className="iframe-border">
              <h2>iFrame Demo</h2>
              <iframe
                title="Parent iFrame"
                id="parentFrame"
                src="/iframe-parent.html"
                width="100%"
                height="450px"
                style={{ border: '1px solid #ddd' }}
              >
                Your browser does not support iframes.
              </iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IframeTest; 