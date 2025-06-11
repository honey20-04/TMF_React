import React from 'react';
import './Menu.css';

const Menu = ({ addToCart, removeFromCart, cart }) => {
  const items = [
    {
      id: 1,
      name: 'Panner Butter Masala',
      price: 250,
      image: require('../assets/pannerbuttermasala.jpg')
    },
    {
      id: 2,
      name: 'Masala Dosa',
      price: 100,
      image: require('../assets/masaladosa.jpeg')
    },
    {
      id: 3,
      name: 'Veg Biryani',
      price: 250,
      image: require('../assets/vegbiryani.jpg')
    },
    {
      id: 4,
      name: 'Gulab Jamun',
      price: 25,
      image: require('../assets/gulabjamun.jpeg')
    }
  ];

  return (
    <div className="menu">
      <h2>Order Now</h2>
      <div className="menu-grid">
        {items.map((item) => {
          const cartItem = cart.find((i) => i.id === item.id);

          return (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

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
                    <button className="plus-btn" onClick={() => addToCart(item)}>
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
        })}
      </div>
    </div>
  );
};

export default Menu;
