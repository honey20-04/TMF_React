import React from "react";
import { useParams } from "react-router-dom";
import "./Menu.css";

const menuData = {
  Novotel: [
    {
      id: "rest1-1",
      name: "Paneer Butter Masala",
      price: 250,
      rating: 4.5,
      restaurant:"Novotel",
      image: require("../assets/pannerbuttermasala.jpg"),
    },
    {
      id: "rest1-2",
      name: "Butter Naan",
      price: 40,
      rating: 4,
      restaurant:"Novotel",
      image: require("../assets/butternaan.jpeg"),
    },
    {
      id: "rest1-3",
      name: "noodles",
      price: 300,
      rating: 3,
      restaurant:"Novotel",
      image: require("../assets/noodles.jpeg"),
    },
    {
      id: "rest1-4",
      name: "Chicken Bone Soup",
      price: 250,
      rating: 4,
      restaurant:"Novotel",
      image: require("../assets/chiken bone soup.jpeg"),
    },
    {
      id: "rest1-5",
      name: "Vanilla Icecream",
      price: 100,
      rating: 4,
      restaurant:"Novotel",
      image: require("../assets/vanilla.jpeg"),
    },
  ],
  Daspalla: [
    {
      id: "rest2-1",
      name: "Masala Dosa",
      price: 100,
      rating: 4.3,
      image: require("../assets/masaladosa.jpeg"),
    },
    {
      id: "rest2-2",
      name: "Idli Sambar",
      price: 60,
      rating: 4.2,
      image: require("../assets/idlisambar.jpeg"),
    },
    {
      id: "rest2-3",
      name: "Dal Makhani",
      price: 350,
      rating: 3,
      image: require("../assets/dal makhani.jpeg"),
    },
    {
      id: "rest2-4",
      name: "Veg Thali",
      price: 600,
      rating: 4,
      image: require("../assets/veg thali.jpeg"),
    },
    {
      id: "rest2-5",
      name: "Veg Manchow Soup",
      price: 150,
      offerPrice: 99,
      rating: 4,
      image: require("../assets/vegmanchowsoup.jpg"),
    },
  ],
  KFC: [
    {
      id: "rest3-1",
      name: "Zinger Burger",
      price: 160,
      rating: 4.6,
      image: require("../assets/zingerburger.jpeg"),
    },
    {
      id: "rest3-2",
      name: "Chicken Bucket",
      price: 499,
      rating: 4.8,
      image: require("../assets/chickenbucket.jpeg"),
    },
    {
      id: "rest3-3",
      name: "Smoky Red Chicken 5pc",
      price: 550,
      rating: 5,
      image: require("../assets/smoky.jpeg"),
    },
    {
      id: "rest3-4",
      name: "Peri Peri Chicken 5 Leg Piece",
      price: 500,
      rating: 5,
      image: require("../assets/peri.jpeg"),
    },
  ],
  DominosPizza: [
    {
      id: "rest4-1",
      name: "Veg Pizza",
      price: 299,
      rating: 4.1,
      image: require("../assets/vegpizza.jpeg"),
    },
    {
      id: "rest4-2",
      name: "Garlic Bread",
      price: 129,
      rating: 3.9,
      image: require("../assets/garlicbread.jpeg"),
    },
    {
      id: "rest4-3",
      name: "Non Veg Loaded Pizza",
      price: 205,
      rating: 4.5,
      image: require("../assets/loaded.jpeg"),
    },
    {
      id: "rest4-4",
      name: "Taco Mexicana Non veg",
      price: 180,
      rating: 4.3,
      image: require("../assets/taco.jpeg"),
    },
  ],
  PizzaHut: [
    {
      id: "rest5-1",
      name: "Pepperoni Pizza",
      price: 399,
      rating: 4.4,
      image: require("../assets/pepperoni.jpeg"),
    },
    {
      id: "rest5-2",
      name: "Stuffed Crust Pizza",
      price: 459,
      rating: 4.2,
      image: require("../assets/stuffedcrust.jpeg"),
    },
    {
      id: "rest5-3",
      name: "Chilli Paneer Sizzle Pizza",
      price: 200,
      rating: 3.9,
      image: require("../assets/chilli.jpeg"),
    },
    {
      id: "rest5-4",
      name: "Tandoori Paneer Pizza",
      price: 319,
      rating: 4.9,
      image: require("../assets/tandoori.jpeg"),
    },
  ],
  BurgerKing: [
    {
      id: "rest6-1",
      name: "Whopper",
      price: 199,
      rating: 4.3,
      image: require("../assets/whopper.jpeg"),
    },
    {
      id: "rest6-2",
      name: "Fries",
      price: 89,
      rating: 4,
      image: require("../assets/fries.jpeg"),
    },
    {
      id: "rest6-3",
      name: "Korean Spicy Chicken Burger",
      price: 299,
      rating: 3.9,
      image: require("../assets/korean.jpeg"),
    },
    {
      id: "rest6-4",
      name: "Crispy Chicken Burger+veg Makhani",
      price: 200,
      rating: 4.6,
      image: require("../assets/bk.jpeg"),
    },
  ],
  TawaHotel: [
    {
      id: "rest7-1",
      name: "Tawa Roti",
      price: 15,
      rating: 3.8,
      image: require("../assets/tawaroti.jpeg"),
    },
    {
      id: "rest7-2",
      name: "Dal Tadka",
      price: 180,
      rating: 4.2,
      image: require("../assets/daltadka.jpeg"),
    },
    {
      id: "rest7-3",
      name: "Chicken Karahi",
      price: 200,
      rating: 3.9,
      image: require("../assets/karahi.jpeg"),
    },
    {
      id: "rest7-4",
      name: "Tikka Paratha Roll",
      price: 200,
      rating: 4.8,
      image: require("../assets/tikka.jpeg"),
    },
    {
      id: "rest7-5",
      name: "Chicken Lollipop",
      price: 280,
      offerPrice:149,
      rating: 4.8,
      image: require("../assets/chickenlollipop.jpeg"),
    },
  ],
  HabitatCafe: [
    {
      id: "rest8-1",
      name: "Cold Coffee",
      price: 120,
      rating: 4.6,
      image: require("../assets/coldcoffee.jpeg"),
    },
    {
      id: "rest8-2",
      name: "Veg Sandwich",
      price: 90,
      rating: 4.0,
      image: require("../assets/vegsandwich.jpeg"),
    },
    {
      id: "rest8-3",
      name: "Rose Latte ",
      price: 220,
      rating: 5.0,
      image: require("../assets/rose.jpeg"),
    },
    {
      id: "rest8-4",
      name: "Flat Waite",
      price: 200,
      rating: 4.8,
      image: require("../assets/flat.jpeg"),
    },
  ],
  Koreanstreetfood: [
    {
      id: "rest9-1",
      name: "Chicken Ramen",
      price: 350,
      rating: 4.7,
      image: require("../assets/chickenramen.jpg"),
    },
    {
      id: "rest9-2",
      name: "Veg Ramen",
      price: 320,
      rating: 4.4,
      image: require("../assets/vegramen.jpg"),
    },
    {
      id: "rest9-3",
      name: "Bibimbap",
      price: 380,
      rating: 4.6,
      image: require("../assets/bibimbap.jpg"),
    },
    {
      id: "rest9-4",
      name: "Kimchi",
      price: 100,
      rating: 4.2,
      image: require("../assets/kimchi.jpg"),
    },
  ],
};

const Menu = ({ addToCart, removeFromCart, cart }) => {
  const { restaurantId } = useParams();
  const items = menuData[restaurantId] || [];

  return (
    <div className="menu">
      <h2>Menu for {restaurantId}</h2>
      <div className="menu-grid">
        {items.length === 0 ? (
          <p>No menu available for this restaurant.</p>
        ) : (
          items.map((item) => {
            const cartItem = cart.find((i) => i.id === item.id);

            return (
              <div className="menu-card" key={item.id}>
                <img src={item.image} alt={item.name} className="menu-image" />
                <h3>{item.name}</h3>
                <p>
                  {item.offerPrice ? (
                    <>
                      <span className="original-price">₹{item.price}</span>{" "}
                      <span className="offer-price">₹{item.offerPrice}</span>
                    </>
                  ) : (
                    <>₹{item.price}</>
                  )}
                </p>

                <div className="rating-stars">
                  {"★".repeat(Math.floor(item.rating))}
                  {"☆".repeat(5 - Math.floor(item.rating))}
                  <span className="rating-number">
                    {item.rating.toFixed(1)}
                  </span>
                </div>

                {!cartItem ? (
                  <button className="add-btn" onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
                ) : (
                  <div className="cart-controls">
                    <div className="quantity-controls">
                      <button
                        className="minus-btn"
                        onClick={() => removeFromCart(item)}
                        disabled={cartItem.quantity <= 0}
                      >
                        −
                      </button>
                      <span>{cartItem.quantity}</span>
                      <button
                        className="plus-btn"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                    <p className="total-price">
                      Total: ₹{cartItem.quantity * item.price}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Menu;
