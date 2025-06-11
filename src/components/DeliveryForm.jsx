import React, { useState } from 'react';
import './DeliveryForm.css'; // Create this for styling

const DeliveryForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onSubmit(input);
      alert("Address confirmed!");
    }
  };

  return (
    <form className="delivery-form" onSubmit={handleSubmit}>
      <h3>Enter Delivery Address</h3>
      <textarea
        rows="3"
        placeholder="Your address..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="confirm-btn" type="submit">Confirm Address</button>
    </form>
  );
};

export default DeliveryForm;
