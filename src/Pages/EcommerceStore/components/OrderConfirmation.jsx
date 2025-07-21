import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaCheckCircle, FaHome, FaTimes, FaDownload, FaEnvelope } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, clearCart } = useCart();
  const [showBanner, setShowBanner] = useState(true);
  
  // Generate a random order ID
  const orderId = location.state?.orderId || `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
  // Get order details from location state or use default values
  const orderDetails = location.state?.orderDetails || {
    items: cart,
    subtotal: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
    shipping: 0,
    tax: cart.reduce((total, item) => total + (item.price * item.quantity), 0) * 0.1,
    total: cart.reduce((total, item) => total + (item.price * item.quantity), 0) * 1.1
  };

  // Get customer details from location state or use default values
  const customerDetails = location.state?.customerDetails || {
    name: "Test Customer",
    email: "test@example.com",
    address: "123 Test Street, Test City, 12345"
  };

  // Clear cart when component mounts
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const handleDownloadReceipt = () => {
    window.showToast('Downloading receipt...', 'info');
    // In a real app, you would generate and download a PDF here
  };

  const handleEmailReceipt = () => {
    window.showToast('Emailing receipt...', 'info');
    // In a real app, you would trigger an API call to send an email
  };

  const handleBackToHome = () => {
    navigate('/ecommerce');
    // Force page refresh to ensure proper navigation
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <div className="order-confirmation-container">
      {/* Success Banner */}
      {showBanner && (
        <div className="success-banner">
          <div className="banner-content">
            <div className="banner-icon">
              <FaCheckCircle />
            </div>
            <div className="banner-text">
              <h2>Order Placed Successfully!</h2>
              <p>Your order #{orderId} has been confirmed and is being processed. You'll receive an email confirmation shortly.</p>
            </div>
            <div className="banner-actions">
              <button className="banner-btn secondary" onClick={() => setShowBanner(false)}>
                <FaTimes />
              </button>
            </div>
          </div>
          <div className="banner-progress"></div>
        </div>
      )}

      <div className="confirmation-header">
        <FaCheckCircle className="success-icon" />
        <h1>Your Order Has Been Confirmed!</h1>
        <p>Thank you for your purchase. Your order has been received and is now being processed.</p>
      </div>

      <div className="order-details">
        <div className="order-info">
          <h2>Order Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Order Number:</span>
              <span className="info-value" data-testid="order-id">{orderId}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Date:</span>
              <span className="info-value">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Payment Method:</span>
              <span className="info-value">Credit Card (ending in 1234)</span>
            </div>
            <div className="info-item">
              <span className="info-label">Shipping Method:</span>
              <span className="info-value">Standard Shipping (3-5 business days)</span>
            </div>
          </div>
        </div>

        <div className="customer-info">
          <h2>Customer Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">{customerDetails.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{customerDetails.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Shipping Address:</span>
              <span className="info-value">{customerDetails.address}</span>
            </div>
          </div>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-items">
            {orderDetails.items.map((item, index) => (
              <div key={index} className="order-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${orderDetails.subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>{orderDetails.shipping === 0 ? 'Free' : `$${orderDetails.shipping.toFixed(2)}`}</span>
            </div>
            <div className="total-row">
              <span>Tax:</span>
              <span>${orderDetails.tax.toFixed(2)}</span>
            </div>
            <div className="total-row grand-total">
              <span>Total:</span>
              <span>${orderDetails.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="confirmation-actions">
        <div className="action-buttons">
          <button 
            className="action-btn primary"
            onClick={handleBackToHome}
            data-testid="back-to-home"
          >
            <FaHome /> Back to Homepage
          </button>
          <button 
            className="action-btn secondary"
            onClick={handleDownloadReceipt}
          >
            <FaDownload /> Download Receipt
          </button>
          <button 
            className="action-btn secondary"
            onClick={handleEmailReceipt}
          >
            <FaEnvelope /> Email Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 