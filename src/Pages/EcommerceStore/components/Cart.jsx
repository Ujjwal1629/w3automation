import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaChevronLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  // Calculate tax and total
  const subtotal = getCartTotal();
  const tax = subtotal * 0.1; // 10% tax for demo
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + tax + shipping;

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products to your cart yet.</p>
          <button 
            onClick={() => navigate('/ecommerce/products')}
            data-testid="continue-shopping"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <button 
        className="back-button" 
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        <FaChevronLeft /> Continue Shopping
      </button>
      
      <h1>Shopping Cart</h1>
      
      <div className="cart-content">
      <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
        {cart.map(item => (
                <tr key={item.id} className="cart-item" data-testid={`cart-item-${item.id}`}>
                  <td className="product-cell">
                    <div className="product-info">
            <img src={item.image} alt={item.name} />
                      <div>
              <h3>{item.name}</h3>
                        {item.selectedSize && <p>Size: {item.selectedSize}</p>}
                        {item.selectedColor && (
                          <p>
                            Color: 
                            <span 
                              className="color-dot" 
                              style={{ backgroundColor: item.selectedColor }}
                            ></span>
                            {item.selectedColor}
                          </p>
                        )}
                      </div>
            </div>
                  </td>
                  <td className="price-cell">${item.price.toFixed(2)}</td>
                  <td className="quantity-cell">
            <div className="quantity-controls">
              <button 
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        disabled={item.quantity === 1}
                        data-testid={`decrease-${item.id}`}
              >
                        <FaMinus />
              </button>
                      <span data-testid={`quantity-${item.id}`}>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        data-testid={`increase-${item.id}`}
              >
                        <FaPlus />
              </button>
            </div>
                  </td>
                  <td className="total-cell">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="action-cell">
            <button 
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
                      data-testid={`remove-${item.id}`}
            >
              <FaTrash />
            </button>
                  </td>
                </tr>
        ))}
            </tbody>
          </table>
      </div>

      <div className="cart-summary">
          <h2>Order Summary</h2>
        <div className="summary-details">
          <div className="summary-row">
            <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-row">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
              <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button 
          className="checkout-btn"
          onClick={() => navigate('/ecommerce/checkout')}
            data-testid="checkout-button"
        >
          Proceed to Checkout
        </button>
        </div>
      </div>
    </div>
  );
};

export default Cart; 