import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import useCart from "./hooks/useCart";
import { createContext } from "react";

export const changeContext = createContext(null);

function App() {
  const [cart, setCart] = useState([]);
  const [productsQuantity, setProductsQuantity] = useState(0);
  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    changeQuantity,
  } = useCart(cart, setCart, productsQuantity, setProductsQuantity);

  return (
    <changeContext.Provider value={{ changeQuantity }}>
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
    </changeContext.Provider>
  );
}

export default App;
