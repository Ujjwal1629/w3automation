import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { FaHeart, FaStar, FaShoppingCart, FaFilter, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';
import './ProductCatalog.css';

const ProductCatalog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  // Get searchQuery from outlet context
  const { searchQuery } = useOutletContext() || { searchQuery: '' };
  
  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');

  // State for filters
  const [filters, setFilters] = useState({
    categories: categoryParam ? [categoryParam] : [],
    priceRange: [0, 1000],
    sizes: [],
    colors: [],
    sortBy: 'featured'
  });
  
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Available filter options
  const filterOptions = {
    categories: ["men", "women", "kids", "electronics", "accessories", "home"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["red", "blue", "green", "black", "white", "brown", "yellow", "silver", "gold", "pink", "purple"]
  };

  useEffect(() => {
    // Update URL with filters
    const params = new URLSearchParams();
    
    if (filters.categories.length > 0) {
      filters.categories.forEach(cat => params.append('category', cat));
    }
    
    if (filters.sortBy !== 'featured') {
      params.set('sort', filters.sortBy);
    }
    
    // Update URL without page reload
    const newUrl = `${location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);
  }, [filters, location.pathname]);

  // Update categories filter when categoryParam changes
  useEffect(() => {
    if (categoryParam && !filters.categories.includes(categoryParam)) {
      setFilters(prev => ({
        ...prev,
        categories: [categoryParam]
      }));
    }
  }, [categoryParam]);

  const showToast = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showToast(`${product.name} added to cart!`);
    
    // Use global toast if available
    if (window.showToast) {
      window.showToast(`${product.name} added to cart!`, 'success');
    }
  };

  const toggleWishlist = (product) => {
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

  const handleCategoryChange = (category) => {
    setFilters(prev => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter(cat => cat !== category)
        : [...prev.categories, category];
      
      return {
        ...prev,
        categories: newCategories
      };
    });
  };

  const handleSizeChange = (size) => {
    setFilters(prev => {
      const newSizes = prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size];
      
      return {
        ...prev,
        sizes: newSizes
      };
    });
  };

  const handleColorChange = (color) => {
    setFilters(prev => {
      const newColors = prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color];
      
      return {
        ...prev,
        colors: newColors
      };
    });
  };

  const handleSortChange = (e) => {
    setFilters(prev => ({
      ...prev,
      sortBy: e.target.value
    }));
  };

  const handlePriceRangeChange = (e, index) => {
    const value = parseInt(e.target.value);
    setFilters(prev => {
      const newPriceRange = [...prev.priceRange];
      newPriceRange[index] = value;
      return {
        ...prev,
        priceRange: newPriceRange
      };
    });
  };

  // Apply filters to products
  const filteredProducts = products.filter(product => {
    // Search query filter
    const searchMatch = !searchQuery || 
                       product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const categoryMatch = filters.categories.length === 0 || 
                          filters.categories.includes(product.category);
    
    // Price range filter
    const priceMatch = product.price >= filters.priceRange[0] && 
                       product.price <= filters.priceRange[1];
    
    // Size filter
    const sizeMatch = filters.sizes.length === 0 || 
                      (product.sizes && filters.sizes.some(size => product.sizes.includes(size)));
    
    // Color filter
    const colorMatch = filters.colors.length === 0 || 
                       (product.colors && filters.colors.some(color => product.colors.includes(color)));
    
    return searchMatch && categoryMatch && priceMatch && sizeMatch && colorMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.createdAt) - new Date(a.createdAt);
      default:
        return 0;
    }
  });

  return (
    <div className="product-catalog-container">
      <div className="catalog-header">
        <h1>Products</h1>
        <div className="sort-container">
          <label htmlFor="sort-select">Sort by:</label>
          <select 
            id="sort-select" 
            value={filters.sortBy}
            onChange={handleSortChange}
            data-testid="sort-select"
          >
            <option value="featured">Featured</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <button 
          className="mobile-filter-btn"
          onClick={() => setShowMobileFilters(true)}
        >
          <FaFilter /> Filters
        </button>
      </div>

      <div className="catalog-content">
        {/* Desktop Filters Sidebar */}
        <div className="filters-sidebar">
          <div className="filter-section">
            <h3>Categories</h3>
            {filterOptions.categories.map(category => (
              <div key={category} className="filter-option">
                <input
                  type="checkbox"
                  id={`category-${category}`}
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  data-testid={`category-${category}`}
                />
                <label htmlFor={`category-${category}`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              </div>
            ))}
          </div>

          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-inputs">
              <div>
                <label htmlFor="min-price">Min:</label>
                <input
                  type="number"
                  id="min-price"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(e, 0)}
                  min="0"
                  max={filters.priceRange[1]}
                  data-testid="min-price-input"
                />
              </div>
              <div>
                <label htmlFor="max-price">Max:</label>
                <input
                  type="number"
                  id="max-price"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(e, 1)}
                  min={filters.priceRange[0]}
                  data-testid="max-price-input"
                />
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceRangeChange(e, 1)}
              className="price-slider"
              data-testid="price-slider"
            />
          </div>

          <div className="filter-section">
            <h3>Size</h3>
            <div className="size-options">
              {filterOptions.sizes.map(size => (
                <label 
                  key={size} 
                  className={`size-option ${filters.sizes.includes(size) ? 'active' : ''}`}
                >
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={filters.sizes.includes(size)}
                    onChange={() => handleSizeChange(size)}
                    data-testid={`size-${size}`}
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Color</h3>
            <div className="color-options">
              {filterOptions.colors.map(color => (
                <div 
                  key={color} 
                  className={`color-option ${filters.colors.includes(color) ? 'active' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                  data-testid={`color-${color}`}
                >
                  {filters.colors.includes(color) && <span>✓</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filters Sidebar */}
        {showMobileFilters && (
          <div className="mobile-filters-overlay">
            <div className="mobile-filters-sidebar">
              <div className="mobile-filters-header">
                <h2>Filters</h2>
                <button 
                  className="close-filters-btn"
                  onClick={() => setShowMobileFilters(false)}
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="mobile-filters-content">
                <div className="filter-section">
                  <h3>Categories</h3>
                  {filterOptions.categories.map(category => (
                    <div key={category} className="filter-option">
                      <input
                        type="checkbox"
                        id={`mobile-category-${category}`}
                        checked={filters.categories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <label htmlFor={`mobile-category-${category}`}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="filter-section">
                  <h3>Price Range</h3>
                  <div className="price-inputs">
                    <div>
                      <label htmlFor="mobile-min-price">Min:</label>
                      <input
                        type="number"
                        id="mobile-min-price"
                        value={filters.priceRange[0]}
                        onChange={(e) => handlePriceRangeChange(e, 0)}
                        min="0"
                        max={filters.priceRange[1]}
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile-max-price">Max:</label>
                      <input
                        type="number"
                        id="mobile-max-price"
                        value={filters.priceRange[1]}
                        onChange={(e) => handlePriceRangeChange(e, 1)}
                        min={filters.priceRange[0]}
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceRangeChange(e, 1)}
                    className="price-slider"
                  />
                </div>

                <div className="filter-section">
                  <h3>Size</h3>
                  <div className="size-options">
                    {filterOptions.sizes.map(size => (
                      <label 
                        key={size} 
                        className={`size-option ${filters.sizes.includes(size) ? 'active' : ''}`}
                      >
                        <input
                          type="radio"
                          name="mobile-size"
                          value={size}
                          checked={filters.sizes.includes(size)}
                          onChange={() => handleSizeChange(size)}
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <h3>Color</h3>
                  <div className="color-options">
                    {filterOptions.colors.map(color => (
                      <div 
                        key={color} 
                        className={`color-option ${filters.colors.includes(color) ? 'active' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorChange(color)}
                      >
                        {filters.colors.includes(color) && <span>✓</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mobile-filters-footer">
                <button 
                  className="apply-filters-btn"
                  onClick={() => setShowMobileFilters(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="products-container">
          {sortedProducts.length > 0 ? (
            <div className="products-grid">
              {sortedProducts.map(product => (
                <div 
                  key={product.id} 
                  className="product-card"
                  onClick={() => navigate(`/ecommerce/product/${product.id}`)}
                  data-testid={`product-${product.id}`}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <button 
                      className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product);
                      }}
                      data-testid={`wishlist-btn-${product.id}`}
                    >
                      <FaHeart />
                    </button>
                    {product.stock < 10 && (
                      <span className="stock-badge">Only {product.stock} left!</span>
                    )}
                  </div>
                  
                  <div className="product-info">
                    <h3>{product.name}</h3>
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
                      <span className="price">${product.price.toFixed(2)}</span>
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
          ) : (
            <div className="no-products">
              <p>No products found matching your filters.</p>
              <button 
                onClick={() => setFilters({
                  categories: [],
                  priceRange: [0, 1000],
                  sizes: [],
                  colors: [],
                  sortBy: 'featured'
                })}
              >
                Clear All Filters
              </button>
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

export default ProductCatalog; 