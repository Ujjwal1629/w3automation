import React, { useState } from 'react';
import { FaTimes, FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when typing
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
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    // Registration specific validations
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitMessage({ type: '', text: '' });
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        
        if (isLogin) {
          // Simulate successful login
          setSubmitMessage({
            type: 'success',
            text: 'Login successful! Redirecting...'
          });
          
          // Close modal after delay
          setTimeout(() => {
            onClose();
            setSubmitMessage({ type: '', text: '' });
          }, 1500);
        } else {
          // Simulate successful registration
          setSubmitMessage({
            type: 'success',
            text: 'Registration successful! You can now log in.'
          });
          
          // Switch to login form after delay
          setTimeout(() => {
            setIsLogin(true);
            setFormData({
              ...formData,
              confirmPassword: ''
            });
            setSubmitMessage({ type: '', text: '' });
          }, 1500);
        }
      }, 1000);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setSubmitMessage({ type: '', text: '' });
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div 
        className="auth-modal-content"
        onClick={e => e.stopPropagation()}
        data-testid="auth-modal"
      >
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        
        <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
        
        <form onSubmit={handleSubmit} noValidate>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">
                <FaUser className="input-icon" />
                <span>Full Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                data-testid="auth-name-input"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="input-icon" />
              <span>Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              data-testid="auth-email-input"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">
              <FaLock className="input-icon" />
              <span>Password</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              data-testid="auth-password-input"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">
                <FaLock className="input-icon" />
                <span>Confirm Password</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'error' : ''}
                data-testid="auth-confirm-password-input"
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
          )}
          
          {submitMessage.text && (
            <div className={`submit-message ${submitMessage.type}`}>
              {submitMessage.text}
            </div>
          )}
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
            data-testid="auth-submit-button"
          >
            {isSubmitting 
              ? 'Processing...' 
              : isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
        
        <div className="auth-switch">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            onClick={toggleAuthMode}
            data-testid="auth-toggle-button"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal; 