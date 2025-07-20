import React from 'react';
import homepageImage from '../assets/homepage.webp';
import burgerGif from '../assets/Burger.jpg';
import icecreamGif from '../assets/icecream.jpg';
import pizzaGif from '../assets/pizza.gif';
import ramenGif from '../assets/ramen.jpg';
import chickenlollipop from '../assets/chickenlollipop.jpg';
import vegmanchow from '../assets/vegmanchow.avif';
import './Home.css';

const Home = () => (
  <div className="home-container">
    {/* Left Side Advertisement */}
    <div className="ad-left">
      <div className="ad-content scroll-down">
        <div className="ad-item">
          <img src={burgerGif} alt="Burger" />
          <p>🍔 Get 20% Off on Burgers!</p>
        </div>
        <div className="ad-item">
          <img src={icecreamGif} alt="Ice Cream" />
          <p>🍦 Free Ice Cream on Orders Over ₹399!</p>
        </div>
        <div className="ad-item">
          <img src={vegmanchow} alt="Veg Manchow Soup" />
          <p>🥣 Hot Veg Manchow @ ₹99!</p>
        </div>
      </div>
    </div>

    {/* Right Side Advertisement */}
    <div className="ad-right">
      <div className="ad-content scroll-up">
        <div className="ad-item">
          <img src={pizzaGif} alt="Pizza" />
          <p>🍕 Flat ₹100 Off on All Pizzas!</p>
        </div>
        <div className="ad-item">
          <img src={ramenGif} alt="Ramen" />
          <p>🍜 Buy 1 Get 1 Free on Ramen Bowls!</p>
        </div>
        <div className="ad-item">
          <img src={chickenlollipop} alt="Chicken Lollipop" />
          <p>🍗 Chicken Lollipops @ ₹149 Only!</p>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <h2>Welcome to Our Food Delivery App</h2>
    <img
      src={homepageImage}
      alt="Delicious Food Banner"
      className="home-image"
    />
  </div>
);

export default Home;
