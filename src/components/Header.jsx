import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">🍽️ Food Delivery</h1>
      <div className="nav-links">
        <Link className="nav-btn" to="/">Home</Link>
        <Link className="nav-btn" to="/restaurants">Order Now</Link> {/* updated */}
        <Link className="nav-btn" to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Header;
