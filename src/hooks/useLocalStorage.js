import { useState, useEffect } from "react";

const useLocalStorage = (cart) => {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
};

export default useLocalStorage;
