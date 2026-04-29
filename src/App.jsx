import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router";
import { useReducer } from "react";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import useCart from "./hooks/useCart";
import useLocalStorage from "./hooks/useLocalStorage";
import CartContext from "./contexts/CartContext";
import UiContext from "./contexts/UiContext";
import cartReducer from "./reducers/cartReducer";

function App() {
  const savedCart = JSON.parse(localStorage.getItem("cart"));

  const [cart, dispatch] = useReducer(cartReducer, savedCart ? savedCart : []);

  useLocalStorage(cart);

  const [activeLink, setActiveLink] = useState("home");

  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    changeQuantity,
    clearCart,
  } = useCart(cart, dispatch);

  const productsQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const productsPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );

  return (
    <UiContext.Provider value={{ activeLink, setActiveLink }}>
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          increaseQuantity,
          decreaseQuantity,
          changeQuantity,
          deleteProduct,
          clearCart,
          productsPrice,
          productsQuantity,
        }}
      >
        <main>
          <MainNavigation productsQuantity={productsQuantity} />
          <Outlet />
        </main>
      </CartContext.Provider>
    </UiContext.Provider>
  );
}

export default App;
