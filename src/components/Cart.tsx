import Model from "./UI/Model";
import {useContext} from "react";
import CartContext from "./store/CartContext";
import {currencyFormatter} from "./../util/formatting"
import Button from "./UI/Button";
import UserProgressContext from "./store/UserProgress";
import CartItem from "./CartItem";

export default function Cart() {
  let cartContext = useContext(CartContext);
  let userProgressContext = useContext(UserProgressContext);

  let cartTotal = cartContext.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price
  }, 0);

  function handleCloseCart() {
    userProgressContext.hideCart();
  }

  return <Model className="cart" open={userProgressContext.progress === 'cart'}>
    <h2>Your Cart</h2>
    <ul>
      {cartContext.items.map((item) => (
          <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onIncrease={() => cartContext.addItem(item)}
              onDecrease={() => cartContext.removeItem(item.id)}
          />
      ))}
    </ul>
    <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
    <p className="modal-actions">
      <Button textOnly onClick={handleCloseCart}>
        Close
      </Button>
      {cartContext.items.length > 0 && (
          <Button onClick={handleCloseCart}>Go to Checkout</Button>
      )}
    </p>
  </Model>
}