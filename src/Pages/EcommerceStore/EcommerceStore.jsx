import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import EcommerceNavbar from './components/EcommerceNavbar';
import EcommerceFooter from './components/EcommerceFooter';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './EcommerceStore.css';
import { CartProvider } from './context/CartContext';

const EcommerceStore = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <CartProvider>
      <div className="ecommerce-layout">
        <EcommerceNavbar onSearch={handleSearch} />
        <main className="ecommerce-main">
          <Routes>
            <Route path="/" element={<ProductList searchQuery={searchQuery} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <EcommerceFooter />
      </div>
    </CartProvider>
  );
};

export default EcommerceStore; 