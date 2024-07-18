import React from 'react';
import './CartAmountToggle.css';

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className='cart-amount-toggle'>
      <button onClick={() => setDecrease()} className="toggle-button">-</button>
      <div className="amount">{amount}</div>
      <button onClick={() => setIncrease()} className="toggle-button">+</button>
    </div>
  );
}

export default CartAmountToggle;
