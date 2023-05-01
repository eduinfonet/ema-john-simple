import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  //const cart = props.cart; or
  //const { cart } = props;
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h3>Order Summery</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price:$ {totalPrice.toFixed(2)}</p>
      <p>Total Shipping:$ {totalShipping.toFixed(2)}</p>
      <p>Tax: $ {tax.toFixed(2)} </p>
      <h3>Grand Total:$ {grandTotal.toFixed(2)} </h3>
    </div>
  );
};

export default Cart;
