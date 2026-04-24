import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import useCart from "./hooks/useCart";
import useLocalStorage from "./hooks/useLocalStorage";
import shopContext from "./context/shopContext";
import { useReducer } from "react";
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
    <shopContext.Provider
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
        activeLink,
        setActiveLink,
      }}
    >
      <main>
        <MainNavigation productsQuantity={productsQuantity} />
        <Outlet />
      </main>
    </shopContext.Provider>
  );
}

export default App;
