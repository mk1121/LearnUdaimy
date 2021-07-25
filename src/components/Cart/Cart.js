import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  for (let i = 0, len = cart.length; i < len; i++) {
    const product = cart[i];
    total = total + product.price;
  }
  return (
    <div className="cart">
      <p>
        <b>Quantity: {cart.length} </b>
        <br />
        <b>Total: ${total}</b>
      </p>
    </div>
  );
};

export default Cart;
