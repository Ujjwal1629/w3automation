import React from 'react';
import './CertificateTemplate.css';
import logo from '../assets/logo-edit.png';
import imgSignature from '../assets/sig-edit.png';

const CertificateTemplate = ({
  name = 'Unknown',
  courseName = 'SELENIUM WITH JAVA AND DEVOPS',
  completionDate = 'N/A',
  issuedDate = 'N/A',
  certificateNumber = 'N/A',
}) => {
  // date formatting function
  const formatDate = (dateString) => {
    if (dateString === 'N/A') return dateString;

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="certificate-container" id="certificate">
      <div className="certificate">
        {/* Gold/Navy accent line */}
        <div className="accent-line" />

        {/* SVG Corner Ornaments - Elegant Filigree */}
        <svg
          className="corner-ornament top-left"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <path
            d="M0,0 v40 c0,10 5,20 20,20 s20,-10 20,-30 c0,-15 10,-25 30,-25 h30 v-5 h-100 z M5,5 h90 c-20,0 -30,10 -30,25 c0,20 -5,35 -25,35 c-20,0 -35,-15 -35,-60 z"
            fill="#b08d57"
            opacity="0.8"
          />
        </svg>
        <svg
          className="corner-ornament bottom-right"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <path
            d="M100,100 v-40 c0,-10 -5,-20 -20,-20 s-20,10 -20,30 c0,15 -10,25 -30,25 h-30 v5 h100 z M95,95 h-90 c20,0 30,-10 30,-25 c0,-20 5,-35 25,-35 c20,0 35,15 35,60 z"
            fill="#1a2a44"
            opacity="0.8"
          />
        </svg>

        {/* Logo and Organization Name */}
        <div className="logo-container">
          <img
            src={logo}
            alt="Journey to Automation Logo"
            className="logo"
            crossOrigin="anonymous"
          />
          <h2 className="organization-name">JOURNEY TO AUTOMATION</h2>
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
          <h3 className="course">{courseName}</h3>
          <p className="subtitle">Completed on</p>
          <p className="completion-date">{formatDate(completionDate)}</p>
        </div>

        {/* Footer with Signature */}
        <div className="footer">
          <div className="signature-block">
            <img
              src={imgSignature}
              alt="Signature"
              className="signature-image"
              crossOrigin="anonymous"
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
