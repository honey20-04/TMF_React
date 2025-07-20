import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderSummary.css";

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [], address = "", totalPrice = 0 } = location.state || {};

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, [location, navigate]);

  const totalSavings = cartItems.reduce((savings, item) => {
    const original = item.price * (item.quantity || 1);
    const offer = (item.offerPrice || item.price) * (item.quantity || 1);
    return savings + (original - offer);
  }, 0);

  const groupedByRestaurant = cartItems.reduce((groups, item) => {
    const restaurant = item.restaurant || "Unknown Restaurant";
    if (!groups[restaurant]) groups[restaurant] = [];
    groups[restaurant].push(item);
    return groups;
  }, {});

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>

      {cartItems.length === 0 ? (
        <p>No items in your order.</p>
      ) : (
        <>
          <div className="summary-items">
            {Object.entries(groupedByRestaurant).map(([restaurant, items], idx) => (
              <div key={idx} className="restaurant-group">
                <h3 className="restaurant-title">🍽️ {restaurant}</h3>
                {items.map((item, index) => (
                  <div className="summary-item" key={index}>
                    <h4>
                      {item.name}
                      {item.price === 0 && (
                        <span className="free-item"> 🎁 Free</span>
                      )}
                    </h4>
                    <p>Quantity: {item.quantity || 1}</p>
                    <p>
                      Price:{" "}
                      {item.offerPrice && item.offerPrice !== item.price ? (
                        <>
                          <span
                            style={{
                              textDecoration: "line-through",
                              color: "gray",
                            }}
                          >
                            ₹{item.price}
                          </span>{" "}
                          <span>₹{item.offerPrice}</span>
                        </>
                      ) : (
                        <>₹{item.price}</>
                      )}
                    </p>
                    <p>
                      Total: ₹
                      {(item.quantity || 1) * (item.offerPrice || item.price)}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="summary-footer">
            <h3>Delivery Address:</h3>
            <p>{address}</p>

            <h2>Total Paid: ₹{totalPrice}</h2>
            {totalSavings > 0 && (
              <p className="savings">
                🎉 You saved ₹{totalSavings} on this order!
              </p>
            )}

            <div className="place-order-container">
              <button onClick={() => navigate("/")} className="place-order-btn">
                Place Another Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
