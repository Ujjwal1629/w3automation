import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaStar, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './ProductList.css';

const ProductList = ({ searchQuery }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState([]);
  const [category, setCategory] = useState('all');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      rating: 4.5,
      description: "High-quality wireless headphones with noise cancellation",
      category: "electronics",
      stock: 15
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d",
      rating: 4.8,
      description: "Track your fitness goals with this advanced smartwatch",
      category: "electronics",
      stock: 20
    },
    {
      id: 3,
      name: "Professional Camera",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      rating: 4.9,
      description: "Professional DSLR camera for photography enthusiasts",
      category: "electronics",
      stock: 8
    },
    {
      id: 4,
      name: "Gaming Laptop",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
      rating: 4.7,
      description: "High-performance gaming laptop with RTX graphics",
      category: "electronics",
      stock: 5
    },
    {
      id: 5,
      name: "Designer Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
      rating: 4.6,
      description: "Luxury designer watch with premium build quality",
      category: "fashion",
      stock: 12
    },
    {
      id: 6,
      name: "Leather Wallet",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
      rating: 4.4,
      description: "Genuine leather wallet with multiple card slots",
      category: "fashion",
      stock: 25
    },
    {
      id: 7,
      name: "Wireless Speaker",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
      rating: 4.3,
      description: "Portable wireless speaker with deep bass",
      category: "electronics",
      stock: 18
    },
    {
      id: 8,
      name: "Running Shoes",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      rating: 4.7,
      description: "Professional running shoes with comfort technology",
      category: "fashion",
      stock: 30
    },
    {
      id: 9,
      name: "Backpack",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      rating: 4.5,
      description: "Durable backpack with laptop compartment",
      category: "fashion",
      stock: 22
    },
    {
      id: 10,
      name: "Smartphone",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      rating: 4.8,
      description: "Latest smartphone with advanced camera system",
      category: "electronics",
      stock: 10
    }
  ];

  const showToast = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showToast(`${product.name} added to cart!`);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const newWishlist = prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      return newWishlist;
    });
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = searchQuery 
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="product-list-container">
      <div className="category-filters">
        <button 
          className={`category-btn ${category === 'all' ? 'active' : ''}`}
          onClick={() => setCategory('all')}
        >
          All Products
        </button>
        <button 
          className={`category-btn ${category === 'electronics' ? 'active' : ''}`}
          onClick={() => setCategory('electronics')}
        >
          Electronics
        </button>
        <button 
          className={`category-btn ${category === 'fashion' ? 'active' : ''}`}
          onClick={() => setCategory('fashion')}
        >
          Fashion
        </button>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <button 
                className={`wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
                onClick={() => toggleWishlist(product.id)}
              >
                <FaHeart />
              </button>
              {product.stock < 10 && (
                <span className="stock-badge">Only {product.stock} left!</span>
              )}
            </div>
            
            <div className="product-info">
              <h3 onClick={() => navigate(`/ecommerce/product/${product.id}`)}>
                {product.name}
              </h3>
              <div className="rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar 
                    key={index}
                    className={index < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                  />
                ))}
                <span>({product.rating})</span>
              </div>
              <p className="description">{product.description}</p>
              <div className="product-footer">
                <span className="price">${product.price}</span>
                <button 
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showNotification && (
        <div className="notification fade-in">
          {notificationMessage}
        </div>
      )}
    </div>
  );
};

export default ProductList; 