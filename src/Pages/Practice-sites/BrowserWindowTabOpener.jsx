import React from 'react';
import Navbar from '../../Components/Navbar';

const BrowserWindowOpener = () => {
  // Function to open a new tab
  const openNewTab = () => {
    window.open('https://www.google.com/search?q=what+is+automation', '_blank');
  };

  // Function to ensure a new window (not tab) with specific dimensions
  const openNewWindow = () => {
    // Parameters for the new window - forcing it to be a window, not a tab
    const windowFeatures = 'width=800,height=600,left=200,top=200,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=yes,directories=no,status=yes';
    
    // Using window.open with window features forces a new window instead of a tab
    window.open('https://www.google.com/search?q=what+is+automation', 'newWindow', windowFeatures);
  };

  // Function to open a new small popup window
  const openCustomWindow = () => {
    // Parameters for a minimal popup window - forcing it to be a window, not a tab
    const windowFeatures = 'width=400,height=300,left=400,top=300,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no';
    
    window.open('https://www.google.com/search?q=what+is+automation', 'customWindow', windowFeatures);
  };

  return (
    <>
      <div className="window-test">
        <div className="test-container">
          <header className="test-header">
            <h1>Browser Window Testing</h1>
            <p>Practice opening new browser windows with different configurations</p>
          </header>

          <div className="test-section">
            <div className="section-header">
              <h3>🔗 New Tab Testing</h3>
              <span className="section-desc">Open content in a new browser tab</span>
            </div>
            <div className="button-container">
              <button 
                id="newTabButton" 
                className="action-button primary-button"
                onClick={openNewTab}
              >
                Open New Tab
              </button>
              <p className="button-description">
                This opens a link in a new tab with "what is automation" search
              </p>
            </div>
          </div>

          <div className="test-section">
            <div className="section-header">
              <h3>🪟 New Window Testing</h3>
              <span className="section-desc">Open content in a new browser window (not tab)</span>
            </div>
            <div className="button-container">
              <button 
                id="newWindowButton" 
                className="action-button secondary-button"
                onClick={openNewWindow}
              >
                Open New Window
              </button>
              <p className="button-description">
                Opens a standard sized window (not tab) with "what is automation" search
              </p>
            </div>
          </div>

          <div className="test-section">
            <div className="section-header">
              <h3>🔍 Custom Window Testing</h3>
              <span className="section-desc">Open content in a small custom popup window</span>
            </div>
            <div className="button-container">
              <button 
                id="customWindowButton" 
                className="action-button tertiary-button"
                onClick={openCustomWindow}
              >
                Open Custom Popup
              </button>
              <p className="button-description">
                Opens a minimal popup window with "what is automation" search
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .window-test {
          padding: 2rem;
          background: linear-gradient(135deg, #f6f8fa 0%, #e9ecef 100%);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .test-container {
          max-width: 1000px;
          margin: 0 auto;
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .test-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .test-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .test-header p {
          font-size: 1.2rem;
          color: #64748b;
        }

        .test-section {
          margin-bottom: 2.5rem;
          padding: 2rem;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #ffffff;
          transition: all 0.3s ease;
        }

        .test-section:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }

        .section-header {
          margin-bottom: 1.5rem;
        }

        .section-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .section-desc {
          font-size: 0.95rem;
          color: #64748b;
        }

        .button-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .action-button {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          min-width: 200px;
          margin-bottom: 1rem;
        }

        .primary-button {
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
          color: white;
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
        }

        .primary-button:hover {
          box-shadow: 0 6px 15px rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
        }

        .secondary-button {
          background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 10px rgba(139, 92, 246, 0.3);
        }

        .secondary-button:hover {
          box-shadow: 0 6px 15px rgba(139, 92, 246, 0.4);
          transform: translateY(-2px);
        }

        .tertiary-button {
          background: linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%);
          color: white;
          box-shadow: 0 4px 10px rgba(6, 182, 212, 0.3);
        }

        .tertiary-button:hover {
          box-shadow: 0 6px 15px rgba(6, 182, 212, 0.4);
          transform: translateY(-2px);
        }

        .button-description {
          font-size: 0.9rem;
          color: #64748b;
          max-width: 300px;
        }

        @media (max-width: 768px) {
          .test-container {
            padding: 1.5rem;
          }

          .test-section {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default BrowserWindowOpener;