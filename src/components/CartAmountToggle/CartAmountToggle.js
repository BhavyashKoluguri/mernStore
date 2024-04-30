import React from 'react';
import './CartAmountToggle.css'

const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {
  return (
    <div className='cart-button'>
      <button onClick={()=> setDecrease()}>-</button>
      <div>{amount}</div>
      <button onClick={()=> setIncrease()}>+</button>
    </div>
  );
}

export default CartAmountToggle;
