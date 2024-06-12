// @ts-ignore
import logoImg from '../assets/logo.jpg';
import Button from "./UI/Button";
import {useContext} from "react";
import CartContext from "./store/CartContext";
import UserProgressContext from "./store/UserProgress";

export default function Header() {

  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const totalCartItems = cartContext.items.reduce((totalNumberOfItem, item) => {
    return totalNumberOfItem + item.quantity;
  }, 0)

  function handleShowCart() {
    userProgressContext.showCart();
  }

  return (
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="A restaurant"/>
          <h1>ReactFood</h1>
        </div>
        <nav>
          <Button textOnly onClick={handleShowCart}>
            Cart ({totalCartItems})
          </Button>
        </nav>
      </header>
  );
}
