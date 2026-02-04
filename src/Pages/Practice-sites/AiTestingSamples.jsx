import React, { useState, useRef, useEffect } from 'react';
import './AiTestingSamples.css';
import { FiChevronDown, FiExternalLink } from 'react-icons/fi';

const SAMPLES = [
  {
    id: 'bankbot',
    label: 'BankBot AI Assistant',
    header: 'Conversational Banking AI Agent',
    file: 'ai-samples/bankbot-demo.html',
    description: 'Test the capabilities of a banking chatbot agent, checking for context retention and intent recognition.'
  },
  {
    id: 'login-bias',
    label: 'Login Bias Testing',
    header: 'AI Bias in Authentication',
    file: 'ai-samples/ai_login_bias_demo.html',
    description: 'Evaluate potential biases in AI-driven authentication or facial recognition login systems.'
  },
  {
    id: 'bias-lab',
    label: 'Bias Testing Lab',
    header: 'Comprehensive Bias Analysis Lab',
    file: 'ai-samples/ai-bias-testing-lab.html',
    description: 'A laboratory environment for stress-testing AI models against various demographic and edge-case inputs.'
  },
  {
    id: 'dashboard',
    label: 'AI Data Dashboard',
    header: 'AI Performance Metrics',
    file: 'ai-samples/AIDataTestingDashboard.html',
    description: 'Real-time dashboard visualization of AI model performance, accuracy, and error rates.'
  },
  {
    id: 'data-quality',
    label: 'Data Quality Dimensions',
    header: 'Data Quality Verification',
    file: 'ai-samples/data-quality-dimensions.html',
    description: 'Analyze the six dimensions of data quality including completeness, consistency, and accuracy.'
  }
];

const AiTestingSamples = () => {
  const [selectedSample, setSelectedSample] = useState(SAMPLES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const iframeRef = useRef(null);

  const handleSelect = (sample) => {
    setSelectedSample(sample);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="ai-samples-container">
      <div className="ai-samples-header">
        <h1>AI Testing Samples</h1>
        <p>Explore and test various AI model implementations.</p>
      </div>

      <div className="controls-section">
        <div className="custom-dropdown" ref={dropdownRef}>
          <button 
            className={`dropdown-trigger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selectedSample.label}</span>
            <FiChevronDown className={`dropdown-icon ${isOpen ? 'rotate' : ''}`} />
          </button>
          
          <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
            {SAMPLES.map((sample) => (
              <div 
                key={sample.id} 
                className={`dropdown-item ${selectedSample.id === sample.id ? 'selected' : ''}`}
                onClick={() => handleSelect(sample)}
              >
                {sample.label}
              </div>
            ))}
          </div>
        </div>

        <div className="sample-info-card">
          <h2>{selectedSample.header}</h2>
          <p>{selectedSample.description}</p>
        </div>
      </div>

      <div className="tab-display-section">
        <div className="iframe-container">
            <div className="iframe-placeholder-notice">
                {/* if the file doesn't exist */}
                <span>Loading: {selectedSample.file}</span>
            </div>
            <iframe 
                src={`/${selectedSample.file}`} 
                title={selectedSample.label} 
                className="sample-iframe"
                key={selectedSample.id} // Force re-render on change
            />
        </div>
      </div>
    </div>
  );
};

export default AiTestingSamples;
