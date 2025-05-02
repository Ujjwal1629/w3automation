import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './GetCertificate.css';
import CertificateTemplate from '../../Template/CertificateTemplate';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { FiDownload, FiCalendar, FiUser, FiHash } from 'react-icons/fi';

const GetCertificate = () => {

  const newDate = new Date();  

  const [formData, setFormData] = useState({
    name: '',
    completionDate: '',
    issuedDate: '',
    certificateNumber: `JTA-${newDate.getFullYear()}-${String(newDate.getDate()).padStart(2, '0')}${String(newDate.getMonth() + 1).padStart(2, '0')}-`
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
      setError('Please enter participant name');
      return false;
    }
    if (!formData.completionDate) {
      setError('Please select completion date');
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
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.top = '-9999px';
      tempDiv.style.left = '-9999px';
      tempDiv.style.width = '900px';
      tempDiv.style.height = '600px';
      tempDiv.style.backgroundColor = '#ffffff';
      tempDiv.style.fontFamily = 'Arial, Helvetica, sans-serif';
      tempDiv.style.lineHeight = '1.5';
      tempDiv.style.color = '#000000';
      tempDiv.style.overflow = 'hidden';
      tempDiv.style.boxSizing = 'border-box';
      tempDiv.className = 'certificate-temp-container';
      document.body.appendChild(tempDiv);

      const root = ReactDOM.createRoot(tempDiv);
      root.render(
        <div ref={certificateRef}>
          <CertificateTemplate {...formData} />
        </div>
      );

      await new Promise(resolve => setTimeout(resolve, 1000));

      // Waiting for fonts to fully load
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      const canvas = await html2canvas(certificateRef.current, {
        scale: 4, //initially it was 3
        logging: false,
        useCORS: true,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0,
        windowWidth: 900,
        windowHeight: 600,
        letterRendering: true,
        allowTaint: true,
        ignoreElements: (el) => el.classList.contains('no-print')
      });

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [900, 600],
        hotfixes: ['px_scaling']
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      pdf.addImage({
        imageData: imgData,
        format: 'PNG',
        x: 0,
        y: 0,
        width: 900,
        height: 600,
        compression: 'FAST', // Balance quality and file size
        quality: 1.0 // Set quality to maximum
      });
      
      const fileName = `${formData.name.replace(/[^a-z0-9]/gi, '_')}_Certificate.pdf`;
      pdf.save(fileName);

    } catch (err) {
      console.error('PDF Generation Error:', err);
      setError('Failed to generate certificate. Please try again.');
    } finally {
      setLoading(false);
      document.querySelector('.certificate-temp-container')?.remove();
    }
  };

  return (
    <div className="certificate-generator">
      <div className="generator-container">
        <header className="generator-header">
          <h1>
            <span>Get Certificate</span>
          </h1>
        </header>

        {error && <div className="error-message">{error}</div>}

        <div className="form-card">
          <div className="input-group">
            <label htmlFor="name">
              <FiUser className="input-icon" />
              Participant Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="completionDate">
                <FiCalendar className="input-icon" />
                Completion Date
              </label>
              <input
                type="date"
                id="completionDate"
                name="completionDate"
                value={formData.completionDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="issuedDate">
                <FiCalendar className="input-icon" />
                Issued Date
              </label>
              <input
                type="date"
                id="issuedDate"
                name="issuedDate"
                value={formData.issuedDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="certificateNumber">
              <FiHash className="input-icon" />
              Certificate Number
            </label>
            <input
              type="text"
              id="certificateNumber"
              name="certificateNumber"
              value={formData.certificateNumber}
              onChange={handleChange}
              placeholder="Certificate ID"
              required
            />
          </div>

          <button
            className="generate-btn"
            onClick={generatePDF}
            disabled={loading}
          >
            {loading ? (
              <span className="loading-spinner"></span>
            ) : (
              <>
                <FiDownload className="btn-icon" />
                Generate Certificate
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetCertificate;