import React, { useState } from 'react';
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import './TestPractice.css';
import Navbar from '../../Components/Navbar';

const TestPractice = () => {
  const [formType, setFormType] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Helper function for email validation
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Additional signup validations
    if (formType === 'signup') {
      if (!formData.username) {
        newErrors.username = 'Username is required';
      } else if (formData.username.length < 3) {
        newErrors.username = 'Username must be at least 3 characters';
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');

    if (validateForm()) {
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setLoading(false);
      
      // Random success/failure for testing purposes
      const isSuccess = Math.random() > 0.3;
      
      if (isSuccess) {
        setSuccessMessage(formType === 'login' ? 'Login successful!' : 'Account created successfully!');
        // Clear form after success
        setFormData({
          email: '',
          password: '',
          username: '',
          confirmPassword: ''
        });
      } else {
        setErrors({
          submit: formType === 'login' 
            ? 'Invalid email or password' 
            : 'An error occurred while creating your account'
        });
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="test-practice">
        <div className="practice-container">
          <div className="form-container">
            <div className="form-header">
              <h1>Testing Practice Area</h1>
              <p>Practice your testing skills with this interactive form</p>
            </div>

            <div className="form-type-selector">
              <button 
                className={`type-button ${formType === 'login' ? 'active' : ''}`}
                onClick={() => setFormType('login')}
                data-testid="login-tab"
              >
                Login
              </button>
              <button 
                className={`type-button ${formType === 'signup' ? 'active' : ''}`}
                onClick={() => setFormType('signup')}
                data-testid="signup-tab"
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="practice-form" data-testid="auth-form">
              {formType === 'signup' && (
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Enter username"
                    data-testid="username-input"
                    aria-label="Username"
                    className={errors.username ? 'error' : ''}
                  />
                  {errors.username && (
                    <span className="error-message" data-testid="username-error">
                      <AlertCircle size={16} />
                      {errors.username}
                    </span>
                  )}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                  data-testid="email-input"
                  aria-label="Email"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && (
                  <span className="error-message" data-testid="email-error">
                    <AlertCircle size={16} />
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter password"
                    data-testid="password-input"
                    aria-label="Password"
                    className={errors.password ? 'error' : ''}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    data-testid="toggle-password"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <span className="error-message" data-testid="password-error">
                    <AlertCircle size={16} />
                    {errors.password}
                  </span>
                )}
              </div>

              {formType === 'signup' && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm password"
                    data-testid="confirm-password-input"
                    aria-label="Confirm Password"
                    className={errors.confirmPassword ? 'error' : ''}
                  />
                  {errors.confirmPassword && (
                    <span className="error-message" data-testid="confirm-password-error">
                      <AlertCircle size={16} />
                      {errors.confirmPassword}
                    </span>
                  )}
                </div>
              )}

              {errors.submit && (
                <div className="error-message submit-error" data-testid="submit-error">
                  <AlertCircle size={16} />
                  {errors.submit}
                </div>
              )}

              {successMessage && (
                <div className="success-message" data-testid="success-message">
                  <CheckCircle size={16} />
                  {successMessage}
                </div>
              )}

              <button
                type="submit"
                className={`submit-button ${loading ? 'loading' : ''}`}
                disabled={loading}
                data-testid="submit-button"
              >
                {loading ? (
                  <span className="loading-spinner"></span>
                ) : (
                  formType === 'login' ? 'Login' : 'Sign Up'
                )}
              </button>
            </form>

            <div className="testing-hints">
              <h3>Testing Scenarios:</h3>
              <ul>
                <li>Try submitting without filling any fields</li>
                <li>Test email validation with various formats</li>
                <li>Check password visibility toggle</li>
                <li>Verify password matching in signup</li>
                <li>Test loading state (2 second delay)</li>
                <li>Random success/failure responses</li>
                <li>Test aria-labels and accessibility</li>
                <li>Verify form state persistence between tabs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestPractice;