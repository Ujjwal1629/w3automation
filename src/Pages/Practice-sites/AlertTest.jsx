import React, { useState,useEffect } from 'react';
import Navbar from '../../Components/Navbar';

const AlertTest = () => {
  const [testResult, setTestResult] = useState('');

// Update the styles object with responsive styles
const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f6f8fa 0%, #e9ecef 100%)',
      padding: '16px',
      fontFamily: "'Inter', sans-serif",
      '@media (minWidth: 768px)': {
        padding: '32px'
      }
    },
    mainWrapper: {
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%',
      padding: '0 16px'
    },
    card: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '24px',
      background: 'white',
      padding: '20px',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      '@media (minWidth: 768px)': {
        gridTemplateColumns: '1fr 2fr',
        gap: '32px',
        padding: '32px'
      }
    },
    header: {
      marginBottom: '24px',
      textAlign: 'center',
      '@media (minWidth: 768px)': {
        marginBottom: '32px'
      }
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '12px',
      '@media (minWidth: 768px)': {
        fontSize: '2.5rem',
        marginBottom: '16px'
      }
    },
    subtitle: {
      color: '#4b5563',
      fontSize: '1rem',
      '@media (minWidth: 768px)': {
        fontSize: '1.2rem'
      }
    },
    leftColumn: {
      background: '#f8fafc',
      padding: '20px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      '@media (minWidth: 768px)': {
        padding: '24px',
        gap: '20px'
      }
    },
    button: {
      padding: '14px 20px',
      fontSize: '1rem',
      '@media (minWidth: 768px)': {
        padding: '16px 24px',
        fontSize: '1.1rem'
      }
    },
    resultContainer: {
      padding: '16px',
      '@media (minWidth: 768px)': {
        padding: '24px'
      }
    },
    infoCard: {
      padding: '16px',
      marginBottom: '12px',
      '@media (minWidth: 768px)': {
        padding: '20px',
        marginBottom: '16px'
      }
    },
    resultTitle: {
      fontSize: '1.1rem',
      '@media (minWidth: 768px)': {
        fontSize: '1.25rem'
      }
    }
  };
  
  // Add a useEffect hook to handle responsive design
  useEffect(() => {
    const handleResize = () => {
      // Add any specific resize logic if needed
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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