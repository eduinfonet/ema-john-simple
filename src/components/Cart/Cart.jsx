import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Cart = ({ cart, handleClearCart, children }) => {
  //const cart = props.cart; or
  //const { cart } = props;
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h3>Order Summery</h3>
      <p>Selected Items: {quantity}</p>
      {/* <p>Selected Items: {cart.length}</p> */}
      <p>Total Price:$ {totalPrice.toFixed(2)}</p>
      <p>Total Shipping:$ {totalShipping.toFixed(2)}</p>
      <p>Tax: $ {tax.toFixed(2)} </p>
      <h3>Grand Total:$ {grandTotal.toFixed(2)} </h3>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span> Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
