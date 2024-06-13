import Header from "./components/Header";
import Meals from "./components/Meals";
import {CartContextProvider} from "./components/store/CartContext";
import {UserProgressContextProvider} from "./components/store/UserProgress";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header/>
          <Meals/>
          <Cart/>
          <Checkout/>
        </CartContextProvider>
      </UserProgressContextProvider>
  );
}

export default App;
