import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaHeart, FaShoppingCart, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Updated product data with real images
  const product = {
    id: parseInt(id),
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 349.99,
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-4.0.3"
    ],
    rating: 4.8,
    description: "Industry-leading noise cancellation with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.",
    features: [
      "Industry-leading noise cancellation",
      "Up to 30-hour battery life",
      "Multipoint connection",
      "Speak-to-chat technology",
      "Touch sensor controls",
      "Wearing detection"
    ],
    stock: 15,
    specifications: {
      "Brand": "Sony",
      "Model": "WH-1000XM4",
      "Color": "Midnight Black",
      "Connectivity": "Bluetooth 5.0, NFC",
      "Battery Life": "Up to 30 hours",
      "Charging Time": "3 hours",
      "Weight": "254g"
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    alert('Product added to cart!');
  };

  return (
    <div className="product-detail-container">
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
            <p>{product.description}</p>
          </div>

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
              >
                <FaMinus />
              </button>
              <input 
                type="number" 
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max={product.stock}
              />
              <button 
                className="quantity-btn"
                onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                disabled={quantity === product.stock}
              >
                <FaPlus />
              </button>
            </div>

            <div className="buttons-wrapper">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                <FaShoppingCart /> Add to Cart
              </button>
              
              <button 
                className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <FaHeart />
              </button>
            </div>
          </div>

          <div className="specifications">
            <h3>Specifications</h3>
            <table>
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 