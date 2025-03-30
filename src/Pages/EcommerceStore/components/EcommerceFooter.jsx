import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './EcommerceFooter.css';

const EcommerceFooter = () => {
  return (
    <footer className="ecom-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About TechShop</h3>
          <p>Your one-stop destination for all tech needs. Quality products, great prices.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Shipping Policy</li>
            <li>Returns</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TechShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default EcommerceFooter; 