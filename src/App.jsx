import { useState } from "react";
import { Outlet } from "react-router";
import { createContext } from "react";
import "./App.css";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import useCart from "./hooks/useCart";

export const cartContext = createContext(null);

function App() {
  const [cart, setCart] = useState([]);
  const [activeLink, setActiveLink] = useState("home");
  const productsQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const productsPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );
  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    changeQuantity,
  } = useCart(cart, setCart);

  console.log(cart);

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        changeQuantity,
        deleteProduct,
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
    </cartContext.Provider>
  );
}

export default App;
