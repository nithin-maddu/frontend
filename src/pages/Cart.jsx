import React from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.css'; // ✅ Add this line for CSS import

const Cart = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">No items in the cart.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
