import React from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../context/CartContext'; // Make sure this path is correct
import '../styles/ProductCard.css';

const ProductCard = ({ image, name, price, id }) => {
  const { addToCart } = useCart(); // from CartContext

  const handleAddToCart = () => {
    const product = { id, name, price, image };
    addToCart(product);
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3>{name}</h3>
        <p className="price">₹{price}</p>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
