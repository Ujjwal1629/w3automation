import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <button onClick={() => navigate('/ecommerce')}>Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
            </div>
            <div className="quantity-controls">
              <button 
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <p className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button 
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-details">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
        </div>
        <button 
          className="checkout-btn"
          onClick={() => navigate('/ecommerce/checkout')}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart; 