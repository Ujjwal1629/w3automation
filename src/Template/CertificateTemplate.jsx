import React from 'react';
import './CertificateTemplate.css';

const CertificateTemplate = ({
  name = 'Unknown',
  completionDate = 'N/A',
  issuedDate = 'N/A',
  certificateNumber = 'N/A',
}) => {
  return (
    <div className="certificate-container">
      <div className="certificate">
        <div className="accent-line" />

        <div className="corner-ornament top-left" />
        <div className="corner-ornament bottom-right" />

        <div className="header">
          <div className="title">Journey to Automation</div>
          <div className="underline" />
        </div>

        <div className="content">
          <div className="subtitle">This is to certify that</div>
          <div className="name">{name}</div>
          <div className="subtitle">has successfully completed the course</div>
          <div className="course">SELENIUM WITH JAVA WITH DEVOPS</div>
          <div className="subtitle">Completed on</div>
          <div className="course">{completionDate}</div>
        </div>

        <div className="footer">
          <div className="signature-block">
            <div className="signature">Hemant Gandhi</div>
            <div className="sig-line" />
            <div className="sig-title">Test Automation Trainer</div>
          </div>
          <div className="cert-details">
            Certificate No: {certificateNumber}
            <br />
            Issued On: {issuedDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateTemplate;