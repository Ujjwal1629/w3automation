import React, { useRef, useState } from 'react';
import './GetCertificate.css';
import { useReactToPrint } from 'react-to-print';
import CertificateTemplate from '../../Template/CertificateTemplate.jsx'; // Make sure to create this file

const GetCertificate = () => {
  const [formData, setFormData] = useState({
    name: '',
    completionDate: '',
    issuedDate: '',
    certificateNumber: ''
  });

  const certificateRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validation can be added here
//     console.log('Form submitted:', formData);
//   };

  const handleDownload = useReactToPrint({
    content: () => certificateRef.current,
    pageStyle: `
      @page {
        size: A4 landscape;
        margin: 0;
      }
      @media print {
        body {
          margin: 0;
          padding: 0;
        }
      }
    `,
    documentTitle: `${formData.name}_Certificate`,
    // onAfterPrint: () => alert('Certificate downloaded successfully!')
    onBeforeGetContent: () => {

        // Force update the content right before printing
  
        return new Promise((resolve) => {
  
          setFormData(prev => ({...prev}));
  
          resolve();
  
        });
  
      },
  
      removeAfterPrint: true
  });

  return (
    <div className="get-certificate-container">
      <h1>Generate Certificate</h1>
      
      <form className="certificate-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="completionDate">Completion Date:</label>
          <input
            type="date"
            id="completionDate"
            name="completionDate"
            value={formData.completionDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="issuedDate">Issued Date:</label>
          <input
            type="date"
            id="issuedDate"
            name="issuedDate"
            value={formData.issuedDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="certificateNumber">Certificate Number:</label>
          <input
            type="text"
            id="certificateNumber"
            name="certificateNumber"
            value={formData.certificateNumber}
            onChange={handleChange}
            required
          />
        </div>

        <button 
          type="button" 
          className="download-btn"
          onClick={handleDownload}
          disabled={!formData.name || !formData.certificateNumber}
        >
          Get Certificate
        </button>
      </form>

      {/* Hidden template that will be converted to PDF */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
                <div ref={certificateRef}>
          <CertificateTemplate {...formData} />
        </div>
      </div>
    </div>
  );
};

export default GetCertificate;