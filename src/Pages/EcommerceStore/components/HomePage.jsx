import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [activeSlide, setActiveSlide] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      rating: 4.5,
      category: "electronics"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d",
      rating: 4.8,
      category: "electronics"
    },
    {
      id: 3,
      name: "Designer Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
      rating: 4.6,
      category: "accessories"
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      rating: 4.7,
      category: "men"
    },
    {
      id: 5,
      name: "Women's Summer Dress",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      rating: 4.4,
      category: "women"
    },
    {
      id: 6,
      name: "Kid's Sneakers",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      rating: 4.3,
      category: "kids"
    },
    {
      id: 7,
      name: "Leather Handbag",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      rating: 4.9,
      category: "accessories"
    },
    {
      id: 8,
      name: "Men's Casual Shirt",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
      rating: 4.5,
      category: "men"
    }
  ];

  // Banner carousel data
  const bannerSlides = [
    {
      id: 1,
      title: "Summer Sale",
      subtitle: "Up to 50% off on selected items",
      cta: "Shop Now",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
      color: "#f8c9d4"
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Check out our latest collection",
      cta: "Discover",
      image: "https://images.unsplash.com/photo-1607083207685-aaf05f2c908c",
      color: "#c9d4f8"
    },
    {
      id: 3,
      title: "Limited Edition",
      subtitle: "Exclusive products for a limited time",
      cta: "View Collection",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
      color: "#d4f8c9"
    }
  ];

  // Auto-rotate banner carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerSlides.length]);

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

  return (
    <div className="homepage-container">
      {/* Banner Carousel */}
      <div className="banner-carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {bannerSlides.map((slide, index) => (
            <div 
              key={slide.id} 
              className="carousel-slide"
              style={{ backgroundColor: slide.color }}
            >
              <div className="slide-content">
                <div className="slide-text">
                  <h2>{slide.title}</h2>
                  <p>{slide.subtitle}</p>
                  <button className="slide-cta" onClick={() => navigate('/ecommerce/products')}>
                    {slide.cta}
                  </button>
                </div>
                <div className="slide-image">
                  <img src={slide.image} alt={slide.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="carousel-indicators">
          {bannerSlides.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${activeSlide === index ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <div className="featured-categories">
        <h2 className="section-title">Featured Categories</h2>
        <div className="categories-grid">
          {[
            { name: "Men", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22", path: "men" },
            { name: "Women", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b", path: "women" },
            { name: "Kids", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea", path: "kids" },
            { name: "Accessories", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d", path: "accessories" }
          ].map((category, index) => (
            <div 
              key={index} 
              className="category-card"
              onClick={() => navigate(`/ecommerce/products?category=${category.path}`)}
            >
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <button 
                  className={`wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  data-testid={`wishlist-btn-${product.id}`}
                >
                  <FaHeart />
                </button>
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
                <div className="product-footer">
                  <span className="price">${product.price}</span>
                  <button 
                    className="add-to-cart"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    data-testid={`add-to-cart-${product.id}`}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
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

export default HomePage; 