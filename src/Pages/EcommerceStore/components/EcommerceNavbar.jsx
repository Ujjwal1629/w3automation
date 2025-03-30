import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaSearch, FaUser, FaHome, FaBars } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './EcommerceNavbar.css';

const EcommerceNavbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  return (
    <nav className="ecom-navbar">
      <div className="ecom-navbar-content">
        <div className="ecom-logo">
          <button className="icon-btn home-btn" onClick={() => navigate('/')}>
            <FaHome className="home-icon" />
          </button>
          <h1 onClick={() => navigate('/ecommerce')}>TestShop</h1>
        </div>
        
        <div className="ecom-search desktop-search">
          <div className="search-box">
            {/* <FaSearch className="search-icon" /> */}
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="ecom-nav-actions">
          <button className="icon-btn mobile-search-btn" onClick={toggleMobileSearch}>
            <FaSearch />
          </button>
          <button className="icon-btn" onClick={() => navigate('/ecommerce/wishlist')}>
            <FaHeart />
          </button>
          <button className="icon-btn" onClick={() => navigate('/ecommerce/cart')}>
            <FaShoppingCart />
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </button>
          <button className="icon-btn">
            <FaUser />
          </button>
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="mobile-search">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default EcommerceNavbar; 