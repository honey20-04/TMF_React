import React from 'react';
import homepageImage from '../assets/homepage.jpg'; // ✅ correct path
import './Home.css';

const Home = () => (
  <div className="home-container">
    <h2>Welcome to Our Food Delivery App</h2>
    <img
      src={homepageImage}
      alt="Delicious Food Banner"
      className="home-image"
    />
  </div>
);

export default Home;
