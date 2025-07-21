import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';
import './Toast.css';

const Toast = ({ message, type = 'success', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, 300); // Wait for fade out animation
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration, onClose]);
  
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300); // Wait for fade out animation
  };
  
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="toast-icon success" />;
      case 'error':
        return <FaExclamationCircle className="toast-icon error" />;
      case 'info':
        return <FaInfoCircle className="toast-icon info" />;
      default:
        return <FaInfoCircle className="toast-icon info" />;
    }
  };
  
  return (
    <div 
      className={`toast-container ${type} ${isVisible ? 'visible' : 'hidden'}`}
      data-testid="toast-notification"
    >
      <div className="toast-content">
        {getIcon()}
        <span className="toast-message">{message}</span>
      </div>
      <button 
        className="toast-close" 
        onClick={handleClose}
        aria-label="Close notification"
      >
        <FaTimes />
      </button>
    </div>
  );
};

// Toast Manager Component
export const ToastManager = () => {
  const [toasts, setToasts] = useState([]);
  
  // Add this function to the window object so it can be called from anywhere
  useEffect(() => {
    window.showToast = (message, type = 'success', duration = 3000) => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, message, type, duration }]);
      return id;
    };
    
    window.hideToast = (id) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    };
    
    return () => {
      window.showToast = undefined;
      window.hideToast = undefined;
    };
  }, []);
  
  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };
  
  return (
    <div className="toast-manager">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default Toast; 