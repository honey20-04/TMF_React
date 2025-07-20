// ... imports remain unchanged
import React, { useState } from "react";
import "./Cart.css";
import vanillaIceCreamImg from "../assets/vanilla.jpeg";

const Cart = ({ cartItems, address, onCheckout }) => {
  const [error, setError] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const discountedItems = [];

  cartItems.forEach((item) => {
    let newItem = { ...item };

    // Preserve restaurant info
    const restaurant = newItem.restaurant || "Unknown";

    // 1. 20% OFF on Burgers
    if (newItem.name.toLowerCase().includes("burger")) {
      const discount = newItem.price * 0.2;
      newItem.offerPrice = newItem.price - discount;
      newItem.discountNote = "20% OFF on Burgers 🍔";
    }

    // 2. ₹100 OFF on Pizzas
    else if (newItem.name.toLowerCase().includes("pizza")) {
      const discount = 100;
      newItem.offerPrice = Math.max(newItem.price - discount, 0);
      newItem.discountNote = "₹100 OFF on Pizzas 🍕";
    }

    // 3. ₹149 fixed offer on Chicken Lollipop
    else if (newItem.name.toLowerCase() === "chicken lollipop") {
      newItem.offerPrice = 149;
      newItem.discountNote = "Offer Price ₹149 🍗";
    }

    discountedItems.push({ ...newItem, restaurant });

    // 4. Buy 1 Get 1 Free on Ramen
    if (newItem.name.toLowerCase().includes("ramen") && newItem.quantity > 0) {
      discountedItems.push({
        ...newItem,
        id: newItem.id + "-free",
        name: newItem.name + " (Free)",
        price: 0,
        offerPrice: 0,
        quantity: newItem.quantity,
        discountNote: "Buy 1 Get 1 Free 🍜",
        restaurant,
      });
    }
  });

  const restaurantGroups = discountedItems.reduce((groups, item) => {
    const key = item.restaurant || "Unknown";
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
    return groups;
  }, {});

  const updatedCartItems = [...discountedItems];

  // 5. Free Vanilla Ice Cream from Novotel if total ≥ 499
  const novotelItems = restaurantGroups["Novotel"] || [];
  const novotelTotal = novotelItems.reduce(
    (total, item) => total + (item.offerPrice || item.price) * item.quantity,
    0
  );

  const hasFreeIceCream = updatedCartItems.some(
    (item) => item.name === "Vanilla Ice Cream (Free)"
  );

  if (novotelTotal >= 499 && !hasFreeIceCream) {
    updatedCartItems.push({
      id: "free-icecream-novotel",
      name: "Vanilla Ice Cream (Free)",
      price: 0,
      offerPrice: 0,
      quantity: 1,
      restaurant: "Novotel",
      image: vanillaIceCreamImg,
      discountNote: "Free with Novotel Orders ≥ ₹499 🍨",
    });
  }

  let totalPrice = updatedCartItems.reduce(
    (total, item) =>
      total + (item.offerPrice !== undefined ? item.offerPrice : item.price) * item.quantity,
    0
  );

  const totalSavings = updatedCartItems.reduce((savings, item) => {
    const original = item.price * item.quantity;
    const offer = (item.offerPrice || item.price) * item.quantity;
    return savings + (original - offer);
  }, 0);

  const couponDiscount = totalPrice >= 2000 && couponApplied ? 200 : 0;
  const finalPrice = totalPrice - couponDiscount;

  const handleCheckout = () => {
    if (!address || address.trim() === "") {
      setError("⚠️ Please enter a delivery address before proceeding.");
      return;
    }
    setError("");
    onCheckout(updatedCartItems, address, finalPrice);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {updatedCartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {updatedCartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                {item.image && (
                  <img src={item.image} alt={item.name} className="cart-image" />
                )}
                <div className="cart-details">
                  <h3>
                    {item.name}
                    {item.price === 0 && <span className="free-item"> 🎁 Free</span>}
                  </h3>
                  <p>
                    Price:{" "}
                    {item.offerPrice && item.offerPrice !== item.price ? (
                      <>
                        <span className="original-price">₹{item.price}</span>{" "}
                        <span className="offer-price">₹{item.offerPrice}</span>
                      </>
                    ) : (
                      <>₹{item.price}</>
                    )}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ₹{item.quantity * (item.offerPrice || item.price)}</p>
                  {item.discountNote && (
                    <p className="discount-note">{item.discountNote}</p>
                  )}
                  <p className="restaurant-name">From: {item.restaurant}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Delivery Address:</h3>
            <p>{address || <em style={{ color: "#999" }}>No address provided</em>}</p>
            {error && <p className="error-message">{error}</p>}

            <h2>Grand Total: ₹{finalPrice}</h2>
            {totalSavings > 0 && (
              <p className="savings">🎉 You saved ₹{totalSavings} on this order!</p>
            )}

            <div className="coupon-box">
              <label>
                <input
                  type="checkbox"
                  checked={couponApplied}
                  onChange={() => setCouponApplied(!couponApplied)}
                  disabled={totalPrice < 2000}
                />
                <span className={totalPrice >= 2000 ? "coupon-eligible" : "coupon-disabled"}>
                  {totalPrice >= 2000
                    ? "🎁 Apply ₹200 Coupon Discount (Total above ₹2000)"
                    : `🛒 Spend ₹${2000 - totalPrice} more to unlock ₹200 coupon`}
                </span>
              </label>
            </div>

            {totalPrice >= 2000 && couponApplied && (
              <div className="coupon-note">✅ ₹200 Coupon applied successfully!</div>
            )}

            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
