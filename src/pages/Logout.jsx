import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './Logout.css'; 
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');  // Redirect to login after logout
    } catch (err) {
      alert('Error logging out: ' + err.message);
    }
  };

  return (
   <div className="logout-container">
      <h2>You are logged in!</h2>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;