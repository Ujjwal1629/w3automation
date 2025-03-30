import React, { useState } from 'react';
import './EcommerceTesting.css';
import { FaShoppingCart, FaHeart, FaStar } from 'react-icons/fa';

const EcommerceTesting = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [step, setStep] = useState('shopping'); // shopping, checkout, confirmation
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      image: "https://via.placeholder.com/200",
      rating: 4.5,
      description: "High-quality wireless headphones with noise cancellation",
      category: "electronics"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 149.99,
      image: "https://via.placeholder.com/200",
      rating: 4.8,
      description: "Track your fitness goals with this advanced smartwatch",
      category: "electronics"
    },
    {
      id: 3,
      name: "Professional Camera",
      price: 899.99,
      image: "https://via.placeholder.com/200",
      rating: 4.9,
      description: "Professional DSLR camera for photography enthusiasts",
      category: "electronics"
    },
    {
      id: 4,
      name: "Gaming Laptop",
      price: 1299.99,
      image: "https://via.placeholder.com/200",
      rating: 4.7,
      description: "High-performance gaming laptop with RTX graphics",
      category: "electronics"
    },
    {
      id: 5,
      name: "Designer Watch",
      price: 299.99,
      image: "https://via.placeholder.com/200",
      rating: 4.6,
      description: "Luxury designer watch with premium build quality",
      category: "fashion"
    },
    {
      id: 6,
      name: "Leather Wallet",
      price: 49.99,
      image: "https://via.placeholder.com/200",
      rating: 4.4,
      description: "Genuine leather wallet with multiple card slots",
      category: "fashion"
    },
    {
      id: 7,
      name: "Wireless Speaker",
      price: 79.99,
      image: "https://via.placeholder.com/200",
      rating: 4.3,
      description: "Portable wireless speaker with deep bass",
      category: "electronics"
    },
    {
      id: 8,
      name: "Running Shoes",
      price: 129.99,
      image: "https://via.placeholder.com/200",
      rating: 4.7,
      description: "Professional running shoes with comfort technology",
      category: "fashion"
    },
    {
      id: 9,
      name: "Backpack",
      price: 59.99,
      image: "https://via.placeholder.com/200",
      rating: 4.5,
      description: "Durable backpack with laptop compartment",
      category: "fashion"
    },
    {
      id: 10,
      name: "Smartphone",
      price: 799.99,
      image: "https://via.placeholder.com/200",
      rating: 4.8,
      description: "Latest smartphone with advanced camera system",
      category: "electronics"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    setStep('checkout');
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setStep('confirmation');
      setCart([]);
    }, 1500);
  };

  // Add to wishlist function
  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="ecommerce-container">
      <header className="ecommerce-header">
        <h1>TechShop</h1>
        <div className="header-controls">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
          </select>
          <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
            <FaShoppingCart />
            <span className="cart-count">{cart.length}</span>
          </div>
        </div>
      </header>

      {step === 'shopping' && (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="wishlist-icon" onClick={() => toggleWishlist(product.id)}>
                <FaHeart className={wishlist.includes(product.id) ? 'wishlist-active' : ''} />
              </div>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < product.rating ? 'star-filled' : 'star-empty'} />
                  ))}
                </div>
                <p>{product.description}</p>
                <p className="price">${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showCart && step === 'shopping' && (
        <div className="cart-sidebar">
          <h2>Shopping Cart</h2>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <input 
                  type="number" 
                  min="1" 
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          {cart.length > 0 && (
            <div className="cart-summary">
              <p>Total: ${getTotalPrice().toFixed(2)}</p>
              <button onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
          )}
        </div>
      )}

      {step === 'checkout' && (
        <div className="checkout-form">
          <h2>Checkout</h2>
          <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Shipping Address</label>
              <textarea required />
            </div>
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" placeholder="1234 5678 9012 3456" required />
            </div>
            <button type="submit">Pay ${getTotalPrice().toFixed(2)}</button>
          </form>
        </div>
      )}

      {step === 'confirmation' && (
        <div className="confirmation">
          <h2>Order Confirmed!</h2>
          <p>Thank you for your purchase. Your order will be delivered soon.</p>
          <button onClick={() => setStep('shopping')}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default EcommerceTesting; 