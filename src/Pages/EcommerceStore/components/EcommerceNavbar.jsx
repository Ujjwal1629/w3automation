import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaSearch, FaUser, FaHome, FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import AuthModal from './AuthModal';
import './EcommerceNavbar.css';

const EcommerceNavbar = ({ onSearch, darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/ecommerce/products');
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const openAuthModal = () => {
    setShowAuthModal(true);
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
  };

  return (
    <>
    <nav className="ecom-navbar">
      <div className="ecom-navbar-content">
        <div className="ecom-logo">
          <button className="icon-btn home-btn" onClick={() => navigate('/')}>
            <span className='home-btn-text'>Go to Home</span>
            <FaHome className="home-icon" />
          </button>
          <h1 onClick={() => navigate('/ecommerce')}>TestShop</h1>
        </div>
        
        <div className="ecom-search desktop-search">
            <form onSubmit={handleSearchSubmit} className="search-box">
              <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
                data-testid="search-input"
            />
            </form>
        </div>

        <div className="ecom-nav-actions">
            <button className="icon-btn mobile-menu-btn" onClick={toggleMobileMenu}>
              <FaBars />
            </button>
          <button className="icon-btn mobile-search-btn" onClick={toggleMobileSearch}>
            <FaSearch />
          </button>
            <button className="icon-btn theme-toggle" onClick={toggleDarkMode} data-testid="theme-toggle">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button 
              className="icon-btn wishlist-btn" 
              onClick={() => navigate('/ecommerce/products')}
              data-testid="wishlist-button"
            >
            <FaHeart />
              {wishlist.length > 0 && (
                <span className="badge">{wishlist.length}</span>
              )}
          </button>
            <button 
              className="icon-btn cart-btn" 
              onClick={() => navigate('/ecommerce/cart')}
              data-testid="cart-button"
            >
            <FaShoppingCart />
            {getTotalItems() > 0 && (
                <span className="badge">{getTotalItems()}</span>
            )}
          </button>
            <button 
              className="icon-btn user-btn" 
              onClick={openAuthModal}
              data-testid="user-button"
            >
            <FaUser />
          </button>
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="mobile-search">
            <form onSubmit={handleSearchSubmit} className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
            />
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="mobile-menu">
            <div className="menu-items">
              <button onClick={() => {
                navigate('/ecommerce');
                setShowMobileMenu(false);
              }}>Home</button>
              <button onClick={() => {
                navigate('/ecommerce/products');
                setShowMobileMenu(false);
              }}>Products</button>
              <button onClick={() => {
                navigate('/ecommerce/cart');
                setShowMobileMenu(false);
              }}>Cart</button>
              <button onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              <button onClick={() => {
                openAuthModal();
                setShowMobileMenu(false);
              }}>Login / Sign Up</button>
          </div>
        </div>
      )}
    </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={showAuthModal} onClose={closeAuthModal} />
    </>
  );
};

export default EcommerceNavbar; 