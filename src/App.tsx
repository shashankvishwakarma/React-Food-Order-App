import Header from "./components/Header";
import Meals from "./components/Meals";
import {CartContextProvider} from "./components/store/CartContext";
import {UserProgressContextProvider} from "./components/store/UserProgress";
import Cart from "./components/Cart";

function App() {
  return (
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header/>
          <Meals/>
          <Cart/>
        </CartContextProvider>
      </UserProgressContextProvider>
  );
}

export default App;
