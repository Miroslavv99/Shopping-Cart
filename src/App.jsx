import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import useCart from "./hooks/useCart";

function App() {
  const [cart, setCart] = useState([]);
  const { addToCart, increaseQuantity, decreaseQuantity, deleteProduct } =
    useCart(cart, setCart);

  return (
    <main>
      <MainNavigation />
      <Outlet
        context={[
          cart,
          setCart,
          addToCart,
          increaseQuantity,
          decreaseQuantity,
          deleteProduct,
        ]}
      />
    </main>
  );
}

export default App;
