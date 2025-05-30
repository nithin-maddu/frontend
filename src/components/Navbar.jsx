import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import '../pages/Home.css';

const Navbar = ({ cartCount, onCartClick }) => {
  const navigate = useNavigate(); // ✅ FIX: Add this line

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // ✅ make sure your route is all lowercase or matches your router path
    } catch (err) {
      alert('Error logging out: ' + err.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">🛒 ShopEase</div>
      <button className="cart-button" onClick={onCartClick}>View Cart ({cartCount})</button>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
