import React from "react";
import "./Cart.css";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../../context/cartContext";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart, setDecrease, setIncrease } = useCartContext();
  console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h1>No Items in the Cart</h1>
        <Link to="/home">Continue Shopping</Link>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <h1>Your Shopping Cart</h1>
        <Link to="/home">Continue Shopping</Link>
        <button onClick={clearCart}>Clear Cart</button>
        <div className="cart-container">
          <div className="product-price">
            <h3>Products</h3>
            <h3>Price</h3>
          </div>
          <div className="quantity-total">
            <h3>Quantity</h3>
            <h3>Total</h3>
            <h3>Remove</h3>
          </div>
        </div>
        {cart.map((scart, i) => {
          return (
            <div className="cart-container2" key={i}>
              <div className="product-price2">
                <h3>{scart.dInfo}</h3>
                <h3>${scart.dPrice.toFixed(2)}</h3>
              </div>
              <div className="quantity-total2">
                <CartAmountToggle
                  amount={scart.amount}
                  setDecrease={() => setDecrease(scart.id)}
                  setIncrease={() => setIncrease(scart.id)}
                />
                <h3>${(scart.amount * scart.dPrice).toFixed(2)}</h3>
                <MdDelete
                  onClick={() => {
                    removeItem(scart.id);
                  }}
                  style={{ cursor: "pointer", color: "#ff4d4d" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Cart;
