import React from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Cart.css';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleRemove = (id) => {
    removeFromCart(id);
    toast.info('Item removed from cart');
  };

  const handleBuyNow = () => {
    toast.success('Purchase successful!');
    clearCart();
  };

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="cart-page luxury-bg"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="cart-heading">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            <AnimatePresence>
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id || index}
                  className="cart-item"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <img src={item.image} alt={item.name} />
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(item.name)}
                    >
                      ✕
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="buy-now-btn"
            onClick={handleBuyNow}
          >
            Buy Now
          </motion.button>
        </>
      )}
    </motion.div>
  );
};

export default CartPage;
