import { useState, useEffect } from "react";

const useLocalStorage = () => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(savedCart ? savedCart : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return { cart, setCart };
};

export default useLocalStorage;
