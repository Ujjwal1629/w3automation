import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';

const LinksTesting = () => {
  const [activeSection, setActiveSection] = useState('section1');

  // Generate an array of 35 links for each section
  const generateLinks = (sectionNumber) => {
    const links = [];
    for (let i = 1; i <= 35; i++) {
      links.push({
        id: `link-${sectionNumber}-${i}`,
        text: `Test Link ${i} (Section ${sectionNumber})`,
        href: `#section${sectionNumber}-link${i}`,
        target: i % 3 === 0 ? '_blank' : undefined,
        className: `test-link section${sectionNumber}-link`,
        onClick: (e) => {
          e.preventDefault();
          setActiveSection(`section${sectionNumber}`);
        }
      });
    }
    return links;
  };

  const section1Links = generateLinks(1);
  const section2Links = generateLinks(2);
  const section3Links = generateLinks(3);

  return (
    <>
      <div className="links-test-page">
        <div className="test-container">
          <header className="test-header">
            <h1>Advanced Links Testing Practice</h1>
            <p>Practice Selenium automation with interconnected test links</p>
          </header>

          <div className="sections-container">
            {/* Section 1 */}
            <div id="section1" className={`test-section ${activeSection === 'section1' ? 'active' : ''}`}>
              <h2>Section 1 - Basic Links</h2>
              <div className="links-grid">
                {section1Links.map((link) => (
                  <a
                    key={link.id}
                    id={link.id}
                    href={link.href}
                    className={link.className}
                    target={link.target}
                    onClick={link.onClick}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Section 2 */}
            <div id="section2" className={`test-section ${activeSection === 'section2' ? 'active' : ''}`}>
              <h2>Section 2 - Dynamic Links</h2>
              <div className="links-grid">
                {section2Links.map((link) => (
                  <a
                    key={link.id}
                    id={link.id}
                    href={link.href}
                    className={`${link.className} dynamic-link`}
                    target={link.target}
                    onClick={link.onClick}
                    data-testid={`dynamic-${link.id}`}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <div id="section3" className={`test-section ${activeSection === 'section3' ? 'active' : ''}`}>
              <h2>Section 3 - Special Links</h2>
              <div className="links-grid">
                {section3Links.map((link) => (
                  <a
                    key={link.id}
                    id={link.id}
                    href={link.href}
                    className={`${link.className} special-link`}
                    target={link.target}
                    onClick={link.onClick}
                    data-testid={`special-${link.id}`}
                    aria-label={`Special link ${link.id}`}
                  >
                    {link.text}
                  </a>
                ))}
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
          max-width: 1200px;
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

        .sections-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .test-section {
          padding: 1.5rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background: #ffffff;
          transition: all 0.3s ease;
        }

        .test-section.active {
          border-color: #2563eb;
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.1);
        }

        .test-section h2 {
          font-size: 1.5rem;
          color: #1e293b;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e2e8f0;
        }

        .links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1rem;
          max-height: 500px;
          overflow-y: auto;
          padding: 1rem;
        }

        .test-link {
          display: block;
          padding: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          color: #2563eb;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .test-link:hover {
          background: #e0f2fe;
          transform: translateY(-2px);
        }

        .dynamic-link {
          background: #f0fdf4;
          border-color: #86efac;
        }

        .special-link {
          background: #fdf4ff;
          border-color: #f0abfc;
        }

        @media (max-width: 768px) {
          .test-container {
            padding: 1.5rem;
          }

          .sections-container {
            grid-template-columns: 1fr;
          }

          .links-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          }
        }
      `}</style>
    </>
  );
};

export default LinksTesting;