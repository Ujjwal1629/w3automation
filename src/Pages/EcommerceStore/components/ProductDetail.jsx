import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaHeart, FaShoppingCart, FaMinus, FaPlus, FaChevronLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Find the product from our centralized data
  const product = products.find(p => p.id === parseInt(id));

  // Set default size and color when product loads
  useEffect(() => {
    if (product) {
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      }
      
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
      }
    }
  }, [product]);

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>Sorry, we couldn't find the product you're looking for.</p>
        <button onClick={() => navigate('/ecommerce/products')}>
          Return to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedSize,
      selectedColor,
      quantity
    };
    
    addToCart(productToAdd);
    
    // Show notification
    setNotificationMessage(`${product.name} added to cart!`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
    
    // Use global toast if available
    if (window.showToast) {
      window.showToast(`${product.name} added to cart!`, 'success');
    }
  };

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      
      // Use global toast if available
      if (window.showToast) {
        window.showToast(`${product.name} removed from wishlist`, 'info');
      }
    } else {
      addToWishlist(product);
      
      // Use global toast if available
      if (window.showToast) {
        window.showToast(`${product.name} added to wishlist`, 'success');
      }
    }
  };

  return (
    <div className="product-detail-container">
      <button 
        className="back-button" 
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        <FaChevronLeft /> Back
      </button>
      
      <div className="product-detail-grid">
        <div className="product-images">
          <div className="main-image-container">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="main-image" 
            />
          </div>
          <div className="thumbnail-images">
            {product.images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`${product.name} view ${index + 1}`}
                className={selectedImage === index ? 'selected' : ''}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          
          <div className="rating-section">
            {[...Array(5)].map((_, index) => (
              <FaStar 
                key={index}
                className={index < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
              />
            ))}
            <span className="rating-number">({product.rating})</span>
          </div>

          <div className="price-section">
            <h2>${product.price.toFixed(2)}</h2>
            {product.stock < 10 && (
              <span className="stock-warning">Only {product.stock} left in stock!</span>
            )}
          </div>

          <div className="description-section">
            <p>{product.longDescription || product.description}</p>
          </div>

          {product.sizes && product.sizes.length > 0 && (
            <div className="size-section">
              <h3>Select Size</h3>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                    data-testid={`size-${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.colors && product.colors.length > 0 && (
            <div className="color-section">
              <h3>Select Color</h3>
              <div className="color-options">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`color-btn ${selectedColor === color ? 'selected' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                    data-testid={`color-${color}`}
                  >
                    <span className="sr-only">{color}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="features-list">
            <h3>Key Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="actions-section">
            <div className="quantity-selector">
              <button 
                className="quantity-btn"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                disabled={quantity === 1}
                data-testid="decrease-quantity"
              >
                <FaMinus />
              </button>
              <input 
                type="number" 
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max={product.stock}
                data-testid="quantity-input"
              />
              <button 
                className="quantity-btn"
                onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                disabled={quantity === product.stock}
                data-testid="increase-quantity"
              >
                <FaPlus />
              </button>
            </div>

            <div className="buttons-wrapper">
              <button 
                className="add-to-cart-btn" 
                onClick={handleAddToCart}
                data-testid="add-to-cart-button"
              >
                <FaShoppingCart /> Add to Cart
              </button>
              
              <button 
                className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                onClick={toggleWishlist}
                data-testid="wishlist-button"
              >
                <FaHeart />
              </button>
            </div>
          </div>

          {product.brand && (
            <div className="product-meta">
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
              {product.subcategory && <p><strong>Type:</strong> {product.subcategory}</p>}
          </div>
          )}
        </div>
      </div>

      {/* Notification Toast */}
      {showNotification && (
        <div className="notification fade-in" data-testid="notification-toast">
          {notificationMessage}
        </div>
      )}
    </div>
  );
};

export default ProductDetail; 