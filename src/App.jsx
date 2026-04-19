import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import useCart from "./hooks/useCart";
import { createContext } from "react";

export const cartContext = createContext(null);

function App() {
  const [cart, setCart] = useState([]);
  const productsQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    changeQuantity,
  } = useCart(cart, setCart, productsQuantity);

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
        productsQuantity,
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
