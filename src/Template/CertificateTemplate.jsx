import React from 'react';
import './CertificateTemplate.css';
import logo from '../assets/logo-edit.png';
import imgSignature from '../assets/sig-edit.png';

const CertificateTemplate = ({
  name = 'Unknown',
  completionDate = 'N/A',
  issuedDate = 'N/A',
  certificateNumber = 'N/A',
}) => {
  return (
    <div className="certificate-container" id="certificate">
      <div className="certificate">
        {/* Gold/Navy accent line */}
        <div className="accent-line" />

        {/* SVG Corner Ornaments */}
        <svg className="corner-ornament top-left" width="60" height="60" viewBox="0 0 24 24">
          <path 
            d="M12 2a10 10 0 0 1 10 10c0 2-1 4-3 6-2-2-4-3-6-3s-4 1-6 3c-2-2-3-4-3-6A10 10 0 0 1 12 2z" 
            fill="none" 
            stroke="#b08d57" 
            strokeWidth="1.5"
          />
        </svg>
        <svg className="corner-ornament bottom-right" width="60" height="60" viewBox="0 0 24 24">
          <path 
            d="M12 2a10 10 0 0 1 10 10c0 2-1 4-3 6-2-2-4-3-6-3s-4 1-6 3c-2-2-3-4-3-6A10 10 0 0 1 12 2z" 
            fill="none" 
            stroke="#1a2a44" 
            strokeWidth="1.5"
          />
        </svg>

        {/* Logo and Organization Name */}
        <div className="logo-container">
          <img 
            src={logo}
            alt="Journey to Automation Logo" 
            className="logo"
          />
          <h2 className="organization-name">Journey to Automation</h2>
        </div>

        {/* Header Section */}
        <div className="header">
          <h1 className="title">Certificate of Completion</h1>
          <div className="underline" />
        </div>

        {/* Main Content */}
        <div className="content">
          <p className="subtitle">This is to certify that</p>
          <h2 className="name">{name}</h2>
          <p className="subtitle">has successfully completed the course</p>
          <h3 className="course">SELENIUM WITH JAVA AND DEVOPS</h3>
          <p className="subtitle">Completed on</p>
          <p className="completion-date">{completionDate}</p>
        </div>

        {/* Footer with Signature */}
        <div className="footer">
          <div className="signature-block">
          <img 
              src={imgSignature} 
              alt="Signature" 
              className="signature-image"
            />
            <div className="sig-line" />
            <div className="signature">Hemant Gandhi</div>
            <div className="sig-title">(Test Automation Trainer)</div>
          </div>
          <div className="cert-details">
            <p>Certificate No: {certificateNumber}</p>
            <p>Issued On: {issuedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateTemplate;