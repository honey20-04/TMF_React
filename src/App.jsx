import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import DeliveryForm from "./components/DeliveryForm";
import Home from "./components/Home";
import RestaurantList from "./components/RestaurantList";
import OrderSummary from './components/OrderSummary';

// AppWrapper to use useNavigate outside Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

const App = () => {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

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

  const handleCheckout = (finalCartItems, deliveryAddress, totalPrice) => {
    if (finalCartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (!deliveryAddress.trim()) {
      alert("Please enter your delivery address before checkout.");
      return;
    }

    alert("✅ Order placed successfully!");

    // Navigate to order summary with order details
    navigate("/order-summary", {
      state: {
        cartItems: finalCartItems,
        address: deliveryAddress,
        totalPrice: totalPrice,
      },
    });

    setCart([]);
    setAddress("");
  };

  return (
    <>
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
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </>
  );
};

export default AppWrapper;
