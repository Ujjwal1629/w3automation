import React, { useState, useEffect } from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaEye, FaEyeSlash, FaInfoCircle } from 'react-icons/fa';

const Authentication = () => {
  // State management
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    agreeToTerms: false,
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  // Reset errors when switching between login/signup
  useEffect(() => {
    setErrors({});
    setFormData(prev => ({
      ...prev,
      confirmPassword: '',
      fullName: step === 1 ? '' : prev.fullName,
      agreeToTerms: false
    }));
  }, [step]);

  // Form validation
  const validateEmail = () => {
    if (!formData.email) {
      setErrors({ email: 'Email is required' });
      return false;
    }
    if (formData.email !== 'admin') {
      setErrors({ email: 'Invalid email address' });
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (!formData.password) {
      setErrors({ password: 'Password is required' });
      return false;
    }
    if (formData.password !== 'admin') {
      setErrors({ password: 'Incorrect password' });
      return false;
    }
    return true;
  };

  // Handle next step
  const handleNext = async () => {
    if (!validateEmail()) return;
    
    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsLoading(false);
    setStep(2);
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validatePassword()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful authentication
      const mockToken = `auth-token-${Date.now()}`;
      setAuthToken(mockToken);
      localStorage.setItem('authToken', mockToken);
    } catch (error) {
      setErrors({ form: 'Authentication failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // Social login handlers
  const handleSocialLogin = async (provider) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful authentication
      const mockToken = `${provider}-auth-token-${Date.now()}`;
      setAuthToken(mockToken);
      localStorage.setItem('authToken', mockToken);
    } catch (error) {
      setErrors({ form: `${provider} login failed. Please try again.` });
    } finally {
      setIsLoading(false);
    }
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is updated
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Logout handler
  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem('authToken');
    setStep(1);
    setFormData({ email: '', password: '' });
  };

  // If user is authenticated, show profile section
  if (authToken) {
    return (
      <div className="auth-container" data-testid="authenticated-container">
        <div className="auth-form-container">
          <div className="success-animation">
            <div className="checkmark">✓</div>
          </div>
          <h2 className="auth-title">Welcome back!</h2>
          <p data-testid="auth-success-message">You have successfully authenticated.</p>
          <div className="profile-info">
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Auth Token:</strong> {authToken.substring(0, 15)}...</p>
          </div>
          <button 
            onClick={handleLogout}
            className="auth-button primary-button"
            data-testid="logout-button"
            id="logoutButton"
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container" data-testid="auth-container">
      <div className="auth-form-container">
        <div className="google-logo">
          <FaGoogle size={24} />
          <h2 className="auth-title">Sign in</h2>
        </div>
        
        <p className="subtitle">Use your Google Account</p>

        {/* Credentials Hint */}
        <div className="credentials-hint">
          <FaInfoCircle />
          <span>Use <strong>admin</strong> as both email and password</span>
        </div>

        {/* Form Error Message */}
        {errors.form && (
          <div className="error-message form-error" data-testid="form-error">
            {errors.form}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} data-testid="auth-form">
          {step === 1 ? (
            <>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email or phone"
                  className={errors.email ? 'input-error' : ''}
                  data-testid="email-input"
                  autoComplete="email"
                />
                {errors.email && (
                  <div className="error-message" data-testid="email-error">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  onClick={handleNext}
                  className={`auth-button primary-button ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                  data-testid="next-button"
                >
                  {isLoading ? (
                    <div className="loader-container">
                      <div className="loader"></div>
                      <span>Loading...</span>
                    </div>
                  ) : (
                    'Next'
                  )}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <div className="email-display">{formData.email}</div>
                <div className="password-input-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={errors.password ? 'input-error' : ''}
                    data-testid="password-input"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    data-testid="toggle-password"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <div className="error-message" data-testid="password-error">
                    {errors.password}
                  </div>
                )}
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="auth-button secondary-button"
                  data-testid="back-button"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className={`auth-button primary-button ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                  data-testid="submit-button"
                >
                  {isLoading ? (
                    <div className="loader-container">
                      <div className="loader"></div>
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    'Sign in'
                  )}
                </button>
              </div>
            </>
          )}
        </form>

        <div className="help-links">
          <a href="#" className="help-link">Forgot email?</a>
          <a href="#" className="help-link">Guest browsing</a>
          <a href="#" className="help-link">More information</a>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .auth-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 1rem;
          background: white;
          font-family: 'Google Sans', Arial, sans-serif;
        }

        .auth-form-container {
          width: 100%;
          max-width: 450px;
          padding: 2rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .google-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .google-logo svg {
          color: #4285f4;
        }

        .auth-title {
          font-size: 1.5rem;
          font-weight: 400;
          color: #202124;
          margin: 0;
        }

        .subtitle {
          font-size: 1rem;
          color: #202124;
          margin-bottom: 1rem;
        }

        .credentials-hint {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: #f8f9fa;
          border-radius: 4px;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          color: #5f6368;
        }

        .credentials-hint svg {
          color: #1a73e8;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid #dadce0;
          border-radius: 4px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        input:focus {
          outline: none;
          border-color: #4285f4;
        }

        .input-error {
          border-color: #d93025 !important;
        }

        .error-message {
          color: #d93025;
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }

        .form-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
        }

        .auth-button {
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          min-width: 100px;
          position: relative;
        }

        .primary-button {
          background: #1a73e8;
          color: white;
        }

        .primary-button:hover {
          background: #1557b0;
        }

        .secondary-button {
          background: none;
          color: #1a73e8;
        }

        .secondary-button:hover {
          background: #f6fafe;
        }

        .loader-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .loader {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .help-links {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
          font-size: 0.9rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .help-link {
          color: #1a73e8;
          text-decoration: none;
        }

        .help-link:hover {
          text-decoration: underline;
        }

        .email-display {
          font-size: 0.9rem;
          color: #202124;
          margin-bottom: 1rem;
        }

        .password-input-container {
          position: relative;
        }

        .toggle-password {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #5f6368;
          cursor: pointer;
        }

        .profile-info {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 4px;
          margin-bottom: 1.5rem;
        }

        .profile-info p {
          margin: 0.5rem 0;
          color: #202124;
        }

        .success-animation {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .checkmark {
          width: 60px;
          height: 60px;
          background: #34a853;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          animation: scaleIn 0.5s ease-out;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 480px) {
          .auth-form-container {
            padding: 1.5rem;
          }

          .help-links {
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }

          .form-actions {
            flex-direction: column;
            gap: 1rem;
          }

          .auth-button {
            width: 100%;
          }

          .credentials-hint {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Authentication;