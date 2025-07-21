import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import EcommerceNavbar from './components/EcommerceNavbar';
import EcommerceFooter from './components/EcommerceFooter';
import HomePage from './components/HomePage';
import ProductCatalog from './components/ProductCatalog';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import { ToastManager } from './components/Toast';
import './EcommerceStore.css';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

const EcommerceStore = () => {
  return (
    <Routes>
      <Route element={<EcommerceLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductCatalog />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-confirmation" element={<OrderConfirmation />} />
      </Route>
    </Routes>
  );
};

const EcommerceLayout = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <div className={`ecommerce-layout ${darkMode ? 'dark-mode' : ''}`}>
          <EcommerceNavbar 
            onSearch={handleSearch} 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <main className="ecommerce-main">
            <Outlet context={{ searchQuery }} />
          </main>
          <EcommerceFooter />
          <ToastManager />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
};

export default EcommerceStore; 