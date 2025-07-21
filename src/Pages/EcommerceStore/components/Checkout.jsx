import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaChevronLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal } = useCart();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate order totals
  const subtotal = getCartTotal();
  const tax = subtotal * 0.1; // 10% tax for demo
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + tax + shipping;

  // Redirect to products if cart is empty
  if (cart.length === 0) {
    navigate('/ecommerce/products');
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    // Required fields
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 
      'address', 'city', 'state', 'zipCode',
      'cardNumber', 'expiryDate', 'cvv'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        errors[field] = 'This field is required';
      }
    });
    
    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // Zip code validation - more flexible to accept various formats
    if (formData.zipCode) {
      const zipCode = formData.zipCode.replace(/[\s-]/g, ''); // Remove spaces and hyphens
      if (!/^\d{6}$/.test(zipCode) && !/^\d{9}$/.test(zipCode)) {
        errors.zipCode = 'Please enter a valid 6-digit ZIP code (e.g., 123456)';
      }
    }
    
    // Card number validation
    if (formData.cardNumber && !/^\d{16}$/.test(formData.cardNumber.replace(/\D/g, ''))) {
      errors.cardNumber = 'Please enter a valid 16-digit card number';
    }
    
    // Expiry date validation
    if (formData.expiryDate && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      errors.expiryDate = 'Please use MM/YY format';
    }
    
    // CVV validation
    if (formData.cvv && !/^\d{3,4}$/.test(formData.cvv)) {
      errors.cvv = 'Please enter a valid CVV';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Calculate order details
      const orderDetails = {
        items: cart,
        subtotal,
        shipping,
        tax,
        total
      };
      
      const customerDetails = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        address: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}`
      };
      
      // Simulate order processing delay
    setTimeout(() => {
        
        
        // Navigate to order confirmation with order details
        navigate('/ecommerce/order-confirmation', {
          state: {
            orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
            orderDetails,
            customerDetails
          }
        });
    }, 1500);
    }
  };

  return (
    <div className="checkout-container">
      <button 
        className="back-button" 
        onClick={() => navigate('/ecommerce/cart')}
        aria-label="Back to cart"
      >
        <FaChevronLeft /> Back to Cart
      </button>
      
      <h1>Checkout</h1>
      
      <div className="checkout-grid">
        <div className="checkout-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-section">
              <h2>Contact Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={formErrors.firstName ? 'error' : ''}
                    data-testid="checkout-firstname"
                  />
                  {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={formErrors.lastName ? 'error' : ''}
                    data-testid="checkout-lastname"
                  />
                  {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
                </div>
              </div>

              <div className="form-row">
              <div className="form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                <input
                  type="email"
                    id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                    className={formErrors.email ? 'error' : ''}
                    data-testid="checkout-email"
                  />
                  {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone <span className="required">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="1234567890"
                    className={formErrors.phone ? 'error' : ''}
                    data-testid="checkout-phone"
                  />
                  {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                </div>
              </div>
              </div>

            <div className="form-section">
              <h2>Shipping Information</h2>
              <div className="form-group">
                <label htmlFor="address">Address <span className="required">*</span></label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={formErrors.address ? 'error' : ''}
                  data-testid="checkout-address"
                />
                {formErrors.address && <span className="error-message">{formErrors.address}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City <span className="required">*</span></label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={formErrors.city ? 'error' : ''}
                    data-testid="checkout-city"
                  />
                  {formErrors.city && <span className="error-message">{formErrors.city}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="state">State <span className="required">*</span></label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={formErrors.state ? 'error' : ''}
                    data-testid="checkout-state"
                  />
                  {formErrors.state && <span className="error-message">{formErrors.state}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">ZIP Code <span className="required">*</span></label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={formErrors.zipCode ? 'error' : ''}
                    data-testid="checkout-zipcode"
                  />
                  {formErrors.zipCode && <span className="error-message">{formErrors.zipCode}</span>}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Payment Information</h2>
              <div className="secure-payment">
                <FaLock /> <span>Secure Payment (Test Mode)</span>
              </div>
              
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number <span className="required">*</span></label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  className={formErrors.cardNumber ? 'error' : ''}
                  data-testid="checkout-cardnumber"
                />
                {formErrors.cardNumber && <span className="error-message">{formErrors.cardNumber}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date <span className="required">*</span></label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    className={formErrors.expiryDate ? 'error' : ''}
                    data-testid="checkout-expiry"
                  />
                  {formErrors.expiryDate && <span className="error-message">{formErrors.expiryDate}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV <span className="required">*</span></label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    className={formErrors.cvv ? 'error' : ''}
                    data-testid="checkout-cvv"
                  />
                  {formErrors.cvv && <span className="error-message">{formErrors.cvv}</span>}
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="place-order-btn"
              disabled={isSubmitting}
              data-testid="place-order-button"
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-items">
            {cart.map(item => (
              <div key={item.id} className="summary-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                  <span className="item-quantity">{item.quantity}</span>
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  {item.selectedSize && <p>Size: {item.selectedSize}</p>}
                  {item.selectedColor && (
                    <p>
                      Color: 
                      <span 
                        className="color-dot" 
                        style={{ backgroundColor: item.selectedColor }}
                      ></span>
                      {item.selectedColor}
                    </p>
                  )}
                </div>
                <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          
          <div className="summary-totals">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="total-row">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="total-row grand-total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 