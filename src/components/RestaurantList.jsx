import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantList.css';

const restaurants = [
  {
    id: 'Novotel',
    name: 'Novotel',
    description: 'Authentic Indian cuisine with rich flavors.',
    image: require('../assets/novotel.jpeg'),
    rating: 4
  },
  {
    id: 'Daspalla',
    name: 'Daspalla',
    description: 'Delicious South Indian meals and snacks.',
    image: require('../assets/daspalla.jpeg'),
    rating: 5
  },
  {
    id: 'KFC',
    name: 'KFC',
    description: 'Crispy and Delicious Chicken',
    image: require('../assets/kfc.png'),
    rating: 5
  },
  {
    id: 'DominosPizza',
    name: 'Dominos Pizza',
    description: 'The Best Pizza',
    image: require('../assets/domions.png'),
    rating: 4
  },
  {
    id: 'PizzaHut',
    name: 'Pizza Hut',
    description: 'Affordable Pizza',
    image: require('../assets/pizzahut.png'),
    rating: 4
  },
  {
    id: 'BurgerKing',
    name: 'Burger King',
    description: 'Tasty Burgers ',
    image: require('../assets/burgerking.png'),
    rating: 4
  },
  {
    id: 'TawaHotel',
    name: 'Tawa Hotel',
    description: 'Hotel and Resort',
    image: require('../assets/tawa.jpeg'),
    rating: 3
  },
  {
    id: 'HabitatCafe',
    name: 'Habitat Cafe',
    description: 'Cafe Refresher',
    image: require('../assets/habitat.png'),
    rating: 4
  },
];

const renderStars = (rating) => {
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, i) =>
    i < rating ? '★' : '☆'
  ).join('');

  return (
    <div className="rating-stars">
      {stars} <span className="rating-number">{rating}.0</span>
    </div>
  );
};


const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      <h2>Select a Restaurant</h2>
      <div className="restaurant-grid">
        {restaurants.map((rest) => (
          <Link to={`/menu/${rest.id}`} key={rest.id} className="restaurant-card">
            <img src={rest.image} alt={rest.name} />
            <h3>{rest.name}</h3>
            <p>{rest.description}</p>
            {renderStars(rest.rating)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
