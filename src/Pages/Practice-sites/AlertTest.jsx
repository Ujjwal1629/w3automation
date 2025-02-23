import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';

const AlertTest = () => {
  const [testResult, setTestResult] = useState('');

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f6f8fa 0%, #e9ecef 100%)',
      padding: '32px',
      fontFamily: "'Inter', sans-serif"
    },
    mainWrapper: {
      maxWidth: '1400px',
      margin: '0 auto',
      width: '95%'
    },
    card: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '32px',
      background: 'white',
      padding: '32px',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
    },
    leftColumn: {
      background: '#f8fafc',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    header: {
      marginBottom: '32px',
      textAlign: 'center'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '16px'
    },
    subtitle: {
      color: '#4b5563',
      fontSize: '1.2rem'
    },
    resultContainer: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
    },
    resultTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    resultCode: {
      background: '#f8fafc',
      padding: '16px',
      borderRadius: '8px',
      fontSize: '1rem',
      color: '#4b5563',
      fontFamily: 'monospace',
      border: '1px solid #e2e8f0'
    },
    button: {
      padding: '16px 24px',
      border: 'none',
      borderRadius: '12px',
      color: 'white',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1.1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px'
    },
    basicButton: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
    },
    confirmButton: {
      background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    },
    promptButton: {
      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)'
    },
    infoSection: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #e2e8f0'
    },
    infoCard: {
      background: '#f8fafc',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '16px',
      border: '1px solid #e2e8f0'
    },
    description: {
      fontSize: '1rem',
      color: '#4b5563',
      lineHeight: '1.6'
    }
  };

  const handleBasicAlert = () => {
    alert('This is a basic alert message!');
    setTestResult('Basic Alert Test: Completed ✨');
  };

  const handleConfirmAlert = () => {
    const result = confirm('Would you like to proceed with this action?');
    setTestResult(result ? 
      'Confirmation Alert: User clicked OK ✅' : 
      'Confirmation Alert: User clicked Cancel ❌'
    );
  };

  const handlePromptAlert = () => {
    const userInput = prompt('Please enter a test value:', '');
    setTestResult(userInput !== null ? 
      `Prompt Alert: User entered "${userInput}" ✨` : 
      'Prompt Alert: User cancelled input ❌'
    );
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.mainWrapper}>
          <header style={styles.header}>
            <h1 style={styles.title}>Alert Testing Practice</h1>
            <p style={styles.subtitle}>Practice handling different types of browser alerts</p>
          </header>

          <div style={styles.card}>
            <div style={styles.leftColumn}>
              <button 
                onClick={handleBasicAlert}
                style={{...styles.button, ...styles.basicButton}}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 12px rgba(37, 99, 235, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span>📢 Test Basic Alert</span>
              </button>

              <button 
                onClick={handleConfirmAlert}
                style={{...styles.button, ...styles.confirmButton}}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 12px rgba(124, 58, 237, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span>❓ Test Confirmation Alert</span>
              </button>

              <button 
                onClick={handlePromptAlert}
                style={{...styles.button, ...styles.promptButton}}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 12px rgba(99, 102, 241, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span>✍️ Test Input Alert</span>
              </button>
            </div>

            <div style={styles.rightColumn}>
              <div style={styles.resultContainer}>
                <h2 style={styles.resultTitle}>🔍 Test Results</h2>
                <code style={styles.resultCode}>
                  {testResult || "No tests run yet"}
                </code>
              </div>

              <div style={styles.infoSection}>
                <h2 style={styles.resultTitle}>📚 Automation Testing Guide</h2>
                
                <div style={styles.infoCard}>
                  <h3 style={styles.resultTitle}>Basic Alert</h3>
                  <p style={styles.description}>
                    <strong>How to automate:</strong>
                    <ul>
                      <li>Switch to alert: driver.switchTo().alert()</li>
                      <li>Get alert text: alert.getText()</li>
                      <li>Accept alert: alert.accept()</li>
                    </ul>
                  </p>
                </div>

                <div style={styles.infoCard}>
                  <h3 style={styles.resultTitle}>Confirmation Alert</h3>
                  <p style={styles.description}>
                    <strong>How to automate:</strong>
                    <ul>
                      <li>Accept: alert.accept()</li>
                      <li>Dismiss: alert.dismiss()</li>
                      <li>Verify text: alert.getText()</li>
                    </ul>
                  </p>
                </div>

                <div style={styles.infoCard}>
                  <h3 style={styles.resultTitle}>Prompt Alert</h3>
                  <p style={styles.description}>
                    <strong>How to automate:</strong>
                    <ul>
                      <li>Send keys: alert.sendKeys("test input")</li>
                      <li>Accept with input: alert.accept()</li>
                      <li>Cancel input: alert.dismiss()</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertTest;