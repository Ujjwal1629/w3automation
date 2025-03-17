import React, { useState, useEffect } from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaEye, FaEyeSlash } from 'react-icons/fa';

const Authentication = () => {
  // State management
  const [isLogin, setIsLogin] = useState(true);
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
      fullName: isLogin ? '' : prev.fullName,
      agreeToTerms: false
    }));
  }, [isLogin]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Additional signup validations
    if (!isLogin) {
      if (!formData.fullName) {
        newErrors.fullName = 'Full name is required';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = 'You must agree to the terms and conditions';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful authentication
      const mockToken = `auth-token-${Date.now()}`;
      setAuthToken(mockToken);
      localStorage.setItem('authToken', mockToken);
      
      // Reset form after successful login/signup
      if (!isLogin) {
        setIsLogin(true);
      }
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
  };

  // If user is authenticated, show profile section
  if (authToken) {
    return (
      <div className="auth-container" data-testid="authenticated-container">
        <div className="auth-form-container">
          <h2 className="auth-title">Welcome back!</h2>
          <p data-testid="auth-success-message">You have successfully authenticated.</p>
          <div className="profile-info">
            <p><strong>Email:</strong> {formData.email || 'User'}</p>
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
        <h2 className="auth-title" data-testid="auth-title">
          {isLogin ? 'Login to Your Account' : 'Create an Account'}
        </h2>
        
        {/* Social Login Options */}
        <div className="social-login-container">
          <p className="social-text">Continue with</p>
          <div className="social-buttons">
            <button 
              type="button" 
              onClick={() => handleSocialLogin('google')}
              className="social-button"
              data-testid="google-login"
              id="googleLogin"
              aria-label="Login with Google"
            >
              <FaGoogle />
            </button>
            <button 
              type="button" 
              onClick={() => handleSocialLogin('github')}
              className="social-button"
              data-testid="github-login"
              id="githubLogin"
              aria-label="Login with GitHub"
            >
              <FaGithub />
            </button>
            <button 
              type="button" 
              onClick={() => handleSocialLogin('facebook')}
              className="social-button"
              data-testid="facebook-login"
              id="facebookLogin"
              aria-label="Login with Facebook"
            >
              <FaFacebook />
            </button>
            <button 
              type="button" 
              onClick={() => handleSocialLogin('twitter')}
              className="social-button"
              data-testid="twitter-login"
              id="twitterLogin"
              aria-label="Login with Twitter"
            >
              <FaTwitter />
            </button>
          </div>
          <div className="separator">
            <span>or</span>
          </div>
        </div>

        {/* Form Error Message */}
        {errors.form && (
          <div className="error-message form-error" data-testid="form-error">
            {errors.form}
          </div>
        )}

        {/* Login/Signup Form */}
        <form onSubmit={handleSubmit} data-testid="auth-form">
          {/* Full Name - Signup only */}
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={errors.fullName ? 'input-error' : ''}
                data-testid="fullname-input"
                autoComplete="name"
              />
              {errors.fullName && (
                <div className="error-message" data-testid="fullname-error">
                  {errors.fullName}
                </div>
              )}
            </div>
          )}

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
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

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
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
                autoComplete={isLogin ? 'current-password' : 'new-password'}
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

          {/* Confirm Password - Signup only */}
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={errors.confirmPassword ? 'input-error' : ''}
                data-testid="confirm-password-input"
                autoComplete="new-password"
              />
              {errors.confirmPassword && (
                <div className="error-message" data-testid="confirm-password-error">
                  {errors.confirmPassword}
                </div>
              )}
            </div>
          )}

          {/* Remember Me - Login only */}
          {isLogin && (
            <div className="form-group checkbox-group">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  data-testid="remember-me-checkbox"
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#" className="forgot-password" data-testid="forgot-password-link">
                Forgot Password?
              </a>
            </div>
          )}

          {/* Terms Agreement - Signup only */}
          {!isLogin && (
            <div className="form-group checkbox-group">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  data-testid="terms-checkbox"
                  className={errors.agreeToTerms ? 'input-error' : ''}
                />
                <label htmlFor="agreeToTerms">
                  I agree to the <a href="#" data-testid="terms-link">Terms of Service</a> and{' '}
                  <a href="#" data-testid="privacy-link">Privacy Policy</a>
                </label>
              </div>
              {errors.agreeToTerms && (
                <div className="error-message" data-testid="terms-error">
                  {errors.agreeToTerms}
                </div>
              )}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`auth-button primary-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
            data-testid="submit-button"
            id="submitButton"
          >
            {isLoading ? (
              <span className="loading-spinner" data-testid="loading-spinner"></span>
            ) : isLogin ? (
              'Log In'
            ) : (
              'Sign Up'
            )}
          </button>

          {/* Switch between Login/Signup */}
          <div className="auth-switch">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="switch-button"
                data-testid="auth-switch-button"
                id="authSwitchButton"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </form>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .auth-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #f6f8fa 0%, #e9ecef 100%);
          font-family: 'Inter', sans-serif;
        }

        .auth-form-container {
          width: 100%;
          max-width: 450px;
          padding: 2.5rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .auth-title {
          font-size: 1.8rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1.5rem;
          color: #1e293b;
        }

        .social-login-container {
          margin-bottom: 1.5rem;
        }

        .social-text {
          text-align: center;
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 1rem;
        }

        .social-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .social-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .social-button:hover {
          background: #f8fafc;
          transform: translateY(-2px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .separator {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 1.5rem 0;
        }

        .separator::before,
        .separator::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid #e2e8f0;
        }

        .separator span {
          padding: 0 10px;
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: #1e293b;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #f8fafc;
        }

        input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .input-error {
          border-color: #ef4444 !important;
        }

        .error-message {
          color: #ef4444;
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }

        .form-error {
          background-color: #fee2e2;
          border-left: 3px solid #ef4444;
          padding: 0.7rem 1rem;
          margin-bottom: 1.5rem;
          border-radius: 4px;
        }

        .checkbox-group {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        input[type="checkbox"] {
          accent-color: #3b82f6;
          width: 16px;
          height: 16px;
        }

        .forgot-password {
          font-size: 0.9rem;
          color: #3b82f6;
          text-decoration: none;
        }

        .auth-button {
          width: 100%;
          padding: 0.9rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .primary-button {
          background: #3b82f6;
          color: white;
        }

        .primary-button:hover {
          background: #2563eb;
        }

        .primary-button:disabled {
          background: #93c5fd;
          cursor: not-allowed;
        }

        .loading {
          color: transparent;
        }

        .loading-spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .auth-switch {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.95rem;
          color: #64748b;
        }

        .switch-button {
          background: none;
          border: none;
          color: #3b82f6;
          font-weight: 500;
          cursor: pointer;
          margin-left: 0.5rem;
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
          color: #94a3b8;
          cursor: pointer;
        }

        .profile-info {
          background: #f8fafc;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
        }

        .profile-info p {
          margin: 0.5rem 0;
          color: #1e293b;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .auth-form-container {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Authentication;