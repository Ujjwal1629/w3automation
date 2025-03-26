import React from 'react';

const CertificateTemplate = () => {
  return (
    <>
      <div
        style={{
          background: '#e8ecef',
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <div
          className="certificate"
          style={{
            width: '900px',
            height: '600px',
            background: '#fff',
            borderRadius: '20px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
            position: 'relative',
            overflow: 'hidden',
            padding: '50px',
            backgroundImage: 'linear-gradient(135deg, rgba(240, 245, 255, 0.8), rgba(255, 255, 255, 1))',
          }}
        >
          <div
            className="accent-line"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '8px',
              background: 'linear-gradient(to right, #b08d57, #1a2a44)',
              borderRadius: '20px 20px 0 0',
            }}
          />
          <div
            className="corner-ornament top-left"
            style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23b08d57" stroke-width="1"><path d="M12 2a10 10 0 0 1 10 10c0 2-1 4-3 6-2-2-4-3-6-3s-4 1-6 3c-2-2-3-4-3-6A10 10 0 0 1 12 2z"/></svg>')`,
              opacity: 0.2,
              top: '20px',
              left: '20px',
            }}
          />
          <div
            className="corner-ornament bottom-right"
            style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23b08d57" stroke-width="1"><path d="M12 2a10 10 0 0 1 10 10c0 2-1 4-3 6-2-2-4-3-6-3s-4 1-6 3c-2-2-3-4-3-6A10 10 0 0 1 12 2z"/></svg>')`,
              opacity: 0.2,
              bottom: '20px',
              right: '20px',
              transform: 'rotate(180deg)',
            }}
          />
          <div
            className="header"
            style={{
              textAlign: 'center',
              paddingBottom: '25px',
              marginBottom: '40px',
              position: 'relative',
            }}
          >
            <div
              className="title"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '48px',
                color: '#1a2a44',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}
            >
              Journey to Automation
            </div>
            <div
              style={{
                content: '""',
                width: '100px',
                height: '2px',
                background: '#b08d57',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
          </div>
          <div
            className="content"
            style={{
              textAlign: 'center',
              fontFamily: "'Poppins', sans-serif",
              color: '#2d3b55',
            }}
          >
            <div
              className="subtitle"
              style={{
                fontSize: '18px',
                fontWeight: 300,
                color: '#6b7280',
                margin: '15px 0',
                letterSpacing: '0.5px',
                fontStyle: 'italic',
              }}
            >
              This is to certify that
            </div>
            <div
              className="name"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '40px',
                color: '#b08d57',
                fontWeight: 700,
                margin: '25px 0',
                textShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
              }}
            >
              Archit Garg
            </div>
            <div
              className="subtitle"
              style={{
                fontSize: '18px',
                fontWeight: 300,
                color: '#6b7280',
                margin: '15px 0',
                letterSpacing: '0.5px',
                fontStyle: 'italic',
              }}
            >
              has successfully completed the course
            </div>
            <div
              className="course"
              style={{
                fontSize: '30px',
                fontWeight: 400,
                margin: '20px 0',
                color: '#1a2a44',
              }}
            >
              SELENIUM WITH JAVA WITH DEVOPS
            </div>
            <div
              className="subtitle"
              style={{
                fontSize: '18px',
                fontWeight: 300,
                color: '#6b7280',
                margin: '15px 0',
                letterSpacing: '0.5px',
                fontStyle: 'italic',
              }}
            >
              Completed on
            </div>
            <div
              className="course"
              style={{
                fontSize: '30px',
                fontWeight: 400,
                margin: '20px 0',
                color: '#1a2a44',
              }}
            >
              December 23, 2024
            </div>
          </div>
          <div
            className="footer"
            style={{
              position: 'absolute',
              bottom: '40px',
              width: '800px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              className="signature-block"
              style={{
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
            >
              <div
                className="signature"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '26px',
                  color: '#1a2a44',
                  marginBottom: '5px',
                }}
              >
                Hemant Gandhi
              </div>
              <div
                className="sig-line"
                style={{
                  width: '180px',
                  borderTop: '2px dashed #b08d57',
                  margin: '10px auto',
                }}
              />
              <div
                className="sig-title"
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Test Automation Trainer
              </div>
            </div>
            <div
              className="cert-details"
              style={{
                textAlign: 'right',
                fontSize: '14px',
                color: '#6b7280',
                fontFamily: "'Poppins', sans-serif",
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
              }}
            >
              Certificate No: JTA-2025-0103-001<br />
              Issued On: January 3, 2025
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateTemplate;