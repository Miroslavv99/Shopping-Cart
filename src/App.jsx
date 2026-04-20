import { useState } from "react";
import { Outlet } from "react-router";
import { useEffect } from "react";
import "./App.css";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import useCart from "./hooks/useCart";
import shopContext from "./context/shopContext";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const { cart, setCart } = useLocalStorage();

  const [activeLink, setActiveLink] = useState("home");
  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    changeQuantity,
  } = useCart(cart, setCart);

  const productsQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const productsPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );

  return (
    <shopContext.Provider
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
    </shopContext.Provider>
  );
}

export default App;
