import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import useCart from "./hooks/useCart";

function App() {
  const [cart, setCart] = useState([]);
  const [productsQuantity, setProductsQuantity] = useState(0);
  const { addToCart, increaseQuantity, decreaseQuantity, deleteProduct } =
    useCart(cart, setCart, productsQuantity, setProductsQuantity);

  return (
    <main>
      <MainNavigation productsQuantity={productsQuantity} />
      <Outlet
        context={[
          cart,
          setCart,
          addToCart,
          increaseQuantity,
          decreaseQuantity,
          deleteProduct,
          productsQuantity,
          setProductsQuantity,
        ]}
      />
    </main>
  );
}

export default App;
