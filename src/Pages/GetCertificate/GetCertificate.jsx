import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './GetCertificate.css';
import CertificateTemplate from '../../Template/CertificateTemplate';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const GetCertificate = () => {
  const [formData, setFormData] = useState({
    name: '',
    completionDate: '',
    issuedDate: '',
    certificateNumber: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const certificateRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.certificateNumber.trim()) {
      setError('Certificate number is required');
      return false;
    }
    setError('');
    return true;
  };

  const generatePDF = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    try {
      // Create a temporary container for the certificate
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      document.body.appendChild(tempDiv);

      // Create a root and render the certificate
      const root = ReactDOM.createRoot(tempDiv);
      root.render(
        <div ref={certificateRef}>
          <CertificateTemplate {...formData} />
        </div>
      );

      // Wait for rendering to complete
      await new Promise(resolve => setTimeout(resolve, 100));

      // Convert to canvas
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: null
      });

      // Generate PDF
      const pdf = new jsPDF('landscape');
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${formData.name}_Certificate.pdf`);

    } catch (err) {
      console.error('Error generating PDF:', err);
      setError('Failed to generate certificate. Please try again.');
    } finally {
      setLoading(false);
      // Clean up temporary elements
      const tempDivs = document.querySelectorAll('.temp-certificate');
      tempDivs.forEach(div => {
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      });
    }
  };

  return (
    <div className="get-certificate-container">
      <h1>Generate Certificate</h1>

      {error && <div className="error-message">{error}</div>}

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
          onClick={generatePDF}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Get Certificate'}
        </button>
      </form>
    </div>
  );
};

export default GetCertificate;