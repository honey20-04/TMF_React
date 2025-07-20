import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RestaurantList.css";

const restaurants = [
  {
    id: "Novotel",
    name: "Novotel",
    description: "Authentic Indian cuisine with rich flavors.",
    image: require("../assets/novotel.jpeg"),
    rating: 4,
    category: "Indian",
  },
  {
    id: "Daspalla",
    name: "Daspalla",
    description: "Delicious South Indian meals and snacks.",
    image: require("../assets/daspalla.jpeg"),
    rating: 5,
    category: "Indian",
  },
  {
    id: "KFC",
    name: "KFC",
    description: "Crispy and Delicious Chicken",
    image: require("../assets/kfc.png"),
    rating: 5,
    category: "Chicken",
  },
  {
    id: "DominosPizza",
    name: "Dominos Pizza",
    description: "The Best Pizza",
    image: require("../assets/domions.png"),
    rating: 4,
    category: "Pizza",
  },
  {
    id: "PizzaHut",
    name: "Pizza Hut",
    description: "Affordable Pizza",
    image: require("../assets/pizzahut.png"),
    rating: 4,
    category: "Pizza",
  },
  {
    id: "BurgerKing",
    name: "Burger King",
    description: "Tasty Burgers ",
    image: require("../assets/burgerking.png"),
    rating: 4,
    category: "Burgers",
  },
  {
    id: "TawaHotel",
    name: "Tawa Hotel",
    description: "Hotel and Resort",
    image: require("../assets/tawa.jpeg"),
    rating: 3,
    category: "Dhaba",
  },
  {
    id: "HabitatCafe",
    name: "Habitat Cafe",
    description: "Cafe Refresher",
    image: require("../assets/habitat.png"),
    rating: 4,
    category: "Cafe",
  },
  {
    id: "Koreanstreetfood",
    name: "Korean Street Food",
    description: "Best Korean Street Food",
    image: require("../assets/koreanstreetfood.png"),
    rating: 4,
    category: "Korean",
  },
];

const renderStars = (rating) => {
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, i) =>
    i < rating ? "★" : "☆"
  ).join("");

  return (
    <div className="rating-stars">
      {stars} <span className="rating-number">{rating}.0</span>
    </div>
  );
};

const RestaurantList = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRestaurants = restaurants.filter((rest) => {
    const matchesSearch = rest.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || rest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="restaurant-list">
      <h2>Select a Restaurant</h2>

      {/* 🔍 Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-bar"
        />
      </div>
      <div className="category-filter">
        {["All", "Pizza", "Burgers", "Indian", "Chicken", "Cafe", "Dhaba","Korean"].map(
          (cat) => (
            <button
              key={cat}
              className={`category-button ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Grid Layout - remains consistent */}
      <div className="restaurant-grid">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((rest) => (
            <Link
              to={`/menu/${rest.id}`}
              key={rest.id}
              className="restaurant-card"
            >
              <img src={rest.image} alt={rest.name} />
              <h3>{rest.name}</h3>
              <p>{rest.description}</p>
              {renderStars(rest.rating)}
            </Link>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
