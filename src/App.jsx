import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import DeliveryForm from "./components/DeliveryForm";
import Home from "./components/Home";
import RestaurantList from "./components/RestaurantList"; // ✅

const App = () => {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (!address.trim()) {
      alert("Please enter your delivery address before checkout.");
      return;
    }

    alert("✅ Order placed successfully!");
    setCart([]);
    setAddress("");
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route
          path="/menu/:restaurantId"
          element={
            <Menu
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cart={cart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <DeliveryForm onSubmit={setAddress} />
              <Cart
                cartItems={cart}
                address={address}
                onCheckout={handleCheckout}
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
