import React, { useState } from 'react';
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import Navbar from '../../Components/Navbar';

const TestPractice = () => {
  const [formType, setFormType] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: '',
    duplicateField1: '',
    duplicateField2: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Dynamic ID generation for practice
  const generateDynamicId = (prefix, index) => {
    const timestamp = Date.now();
    return `${prefix}_${timestamp}_${index}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage('Form submitted successfully!');
    }, 2000);
  };

  return (
    <>
    <Navbar />
    <div className="test-practice">
      <div className="practice-container1">
        <div className="form-container">
          <div className="form-header">
            <h1>Automation Testing Practice Area</h1>
            <p>Practice various locator strategies and relative locators</p>
          </div>

          {/* Duplicate Elements Section */}
          <div className="practice-section">
            <h3>Practice Duplicate Elements</h3>
            <div className="duplicate-fields">
              <div className="form-group">
                <input
                  type="text"
                  className="duplicate-input"
                  name="duplicateField1"
                  placeholder="First duplicate field"
                  data-testid="duplicate-1"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="duplicate-input"
                  name="duplicateField2"
                  placeholder="Second duplicate field"
                  data-testid="duplicate-2"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Relative Locators Practice Section */}
          <div className="practice-section">
            <h3>Practice Relative Locators</h3>
            <div className="relative-elements-grid">
              <button className="reference-btn" id="centerButton">Center</button>
              <button className="reference-btn above" id="aboveButton">Above</button>
              <button className="reference-btn below" id="belowButton">Below</button>
              <button className="reference-btn left" id="leftButton">Left</button>
              <button className="reference-btn right" id="rightButton">Right</button>
            </div>
          </div>

          {/* Dynamic IDs Practice Section */}
          <div className="practice-section">
            <h3>Practice Dynamic IDs</h3>
            <div className="dynamic-elements">
              <input
                type="text"
                id={generateDynamicId('input', 'start')}
                className="dynamic-input"
                placeholder="ID starts with 'input'"
              />
              <input
                type="text"
                id={`middle_${Date.now()}_field`}
                className="dynamic-input"
                placeholder="ID contains 'field'"
              />
              <input
                type="text"
                id={`practice_${Date.now()}_end`}
                className="dynamic-input"
                placeholder="ID ends with 'end'"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="practice-form">
            <button
              type="submit"
              className={`submit-button ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <span className="loading-spinner"></span>
              ) : (
                'Submit Form'
              )}
            </button>
          </form>

          <div className="testing-hints">
            <h3>Testing Scenarios:</h3>
            <ul>
              <li>Find elements with duplicate attributes using index</li>
              <li>Use relative locators (above, below, left-of, right-of)</li>
              <li>Handle dynamic IDs using starts-with, contains, and ends-with</li>
              <li>Practice various XPath and CSS selector strategies</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .test-practice {
          padding: 2rem;
          background: #f3f4f6;
          min-height: 100vh;
        }

        .practice-container1 {
          max-width: 800px;
          margin: 0 auto;
        }

        .form-container {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .practice-section {
          margin: 2rem 0;
          padding: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
        }

        .duplicate-fields {
          display: flex;
          gap: 1rem;
        }

        .relative-elements-grid {
          display: grid;
          grid-template-areas:
            ". above ."
            "left center right"
            ". below .";
          gap: 1rem;
          margin: 2rem 0;
        }

        .reference-btn {
          padding: 0.5rem 1rem;
          background: #4f46e5;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .reference-btn.above { grid-area: above; }
        .reference-btn.below { grid-area: below; }
        .reference-btn.left { grid-area: left; }
        .reference-btn.right { grid-area: right; }
        #centerButton { grid-area: center; }

        .dynamic-elements {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .dynamic-input {
          padding: 0.5rem;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
        }

        .submit-button {
          width: 100%;
          padding: 0.75rem;
          background: #4f46e5;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #ffffff;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
    </>
  );
};

export default TestPractice;