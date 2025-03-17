import React from 'react';
import Navbar from '../../Components/Navbar';

const LinksTesting = () => {
  // Handle the download link click
  const handleDownloadClick = (e) => {
    // For demo purposes, we'll just alert instead of actually downloading
    // In a real app, you'd have a real file to download
    alert('Download started! In a real application, this would download a file.');
  };

  return (
    <>
      <div className="links-test-page">
        <div className="test-container">
          <header className="test-header">
            <h1>Links Testing Practice</h1>
            <p>Test various link types and behaviors for automation scenarios</p>
          </header>

          <div className="test-section">
            <div className="section-header">
              <h3>🔗 Basic Link Types</h3>
              <span className="section-desc">Practice with different link formats and attributes</span>
            </div>
            <div className="links-grid">
              <div className="link-item">
                <a href="#standard-link" id="standardLink" className="standard-link">Standard Link</a>
                <p className="link-desc">Simple anchor link with an ID</p>
              </div>

              <div className="link-item">
                <a href="#" id="jsLink" className="js-link" onClick={(e) => { e.preventDefault(); alert('JavaScript Link Clicked'); }}>
                  JavaScript Link
                </a>
                <p className="link-desc">Link that triggers JavaScript function</p>
              </div>

              <div className="link-item">
                <a href="https://www.google.com" id="externalLink" className="external-link" target="_blank" rel="noopener noreferrer">
                  External Link
                </a>
                <p className="link-desc">Opens an external site in new tab</p>
              </div>

              <div className="link-item">
                <a href="#" id="downloadLink" className="download-link" download="sample.txt" onClick={handleDownloadClick}>
                  Download Link
                </a>
                <p className="link-desc">Link with download attribute</p>
              </div>
            </div>
          </div>

          {/* <div className="test-section">
            <div className="section-header">
              <h3>🧩 Complex Link Scenarios</h3>
              <span className="section-desc">Test handling of nested links, disabled links, and more</span>
            </div>
            <div className="links-grid">
              <div className="link-item">
                <div className="parent-element">
                  Parent Element
                  <a href="#nested" id="nestedLink" className="nested-link">
                    Nested Link
                  </a>
                </div>
                <p className="link-desc">Link nested inside another element</p>
              </div>

              <div className="link-item">
                <a href="#" id="disabledLink" className="disabled-link" aria-disabled="true" onClick={(e) => e.preventDefault()}>
                  Disabled Link
                </a>
                <p className="link-desc">Link that appears disabled (doesn't navigate)</p>
              </div>
              
              <div className="link-item">
                <span id="textLooksLikeLink" className="text-link-style">
                  Text That Looks Like A Link
                </span>
                <p className="link-desc">Text styled as a link but isn't clickable</p>
              </div>

              <div className="link-item">
                <button id="buttonAsLink" className="button-link">
                  Button Styled As Link
                </button>
                <p className="link-desc">Button element styled to look like a link</p>
              </div>
            </div>
          </div> */}

          <div className="test-section">
            <div className="section-header">
              <h3>⏱️ Dynamic Link Testing</h3>
              <span className="section-desc">Links that change based on interaction</span>
            </div>
            <div className="dynamic-links">
              <div className="link-item">
                <a 
                  href="#" 
                  id="changingLink" 
                  className="changing-link"
                  onClick={(e) => {
                    e.preventDefault();
                    const link = e.target;
                    link.textContent = 'Link Text Changed!';
                    link.style.color = '#e11d48';
                    setTimeout(() => {
                      link.textContent = 'Click to Change Link Text';
                      link.style.color = '';
                    }, 2000);
                  }}
                >
                  Click to Change Link Text
                </a>
                <p className="link-desc">Link that changes text when clicked</p>
              </div>

              <div className="link-item">
                <a 
                  href="#" 
                  id="appearingLink" 
                  className="appearing-link"
                  onClick={(e) => {
                    e.preventDefault();
                    const linkItem = e.target.parentNode;
                    const newLink = document.createElement('a');
                    newLink.href = '#';
                    newLink.id = 'newDynamicLink';
                    newLink.className = 'dynamic-new-link';
                    newLink.textContent = 'Dynamically Created Link';
                    linkItem.appendChild(newLink);
                  }}
                >
                  Click to Create New Link
                </a>
                <p className="link-desc">Adds a new link element when clicked</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .links-test-page {
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

        .links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .link-item {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background: #f8fafc;
          min-height: 100px;
        }

        .link-desc {
          font-size: 0.85rem;
          color: #64748b;
          margin-top: 0.75rem;
          margin-bottom: 0;
        }

        .standard-link {
          color: #2563eb;
          text-decoration: underline;
        }

        .js-link {
          color: #9333ea;
          text-decoration: underline;
          cursor: pointer;
        }

        .external-link {
          color: #0ea5e9;
          text-decoration: underline;
          display: flex;
          align-items: center;
        }

        .external-link::after {
          content: "↗";
          margin-left: 4px;
          font-size: 0.8em;
        }

        .download-link {
          color: #059669;
          text-decoration: underline;
          display: flex;
          align-items: center;
        }

        .download-link::after {
          content: "↓";
          margin-left: 4px;
          font-size: 0.8em;
        }

        .parent-element {
          background: #f1f5f9;
          padding: 0.75rem;
          border-radius: 6px;
          position: relative;
        }

        .nested-link {
          color: #dc2626;
          text-decoration: underline;
          margin-left: 10px;
        }

        .disabled-link {
          color: #94a3b8;
          text-decoration: underline;
          opacity: 0.6;
          cursor: default;
          pointer-events: none;
        }

        .text-link-style {
          color: #2563eb;
          text-decoration: underline;
          cursor: pointer;
        }

        .button-link {
          background: none;
          border: none;
          color: #2563eb;
          text-decoration: underline;
          padding: 0;
          font-size: 1rem;
          font-family: inherit;
          cursor: pointer;
        }

        .dynamic-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .changing-link {
          color: #0284c7;
          text-decoration: underline;
          transition: color 0.3s ease;
        }

        .appearing-link {
          color: #7c3aed;
          text-decoration: underline;
        }

        .dynamic-new-link {
          display: block;
          margin-top: 10px;
          color: #16a34a;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .test-container {
            padding: 1.5rem;
          }

          .test-section {
            padding: 1.5rem;
          }

          .links-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default LinksTesting;