import { useState } from "react";
import styles from "./ShopItem.module.css";
import { useOutletContext } from "react-router";

function ShopItem({ product }) {
  const { images, title, price } = product;
  const [cart, setCart] = useOutletContext();
  const [quantity, setQuantity] = useState(1);

  console.log(title);

  function handleInput(e) {
    setInputValue(e.target.value);
    setQuantity(inputValue);
  }

  function addToCart(product) {
    const foundProduct = cart.find((cartItem) => cartItem.id === product.id);
    if (foundProduct) {
      foundProduct.quantity += 1;
      setCart([...cart]);
    } else {
      product.quantity = quantity;
      setCart([...cart, product]);
    }
  }

  return (
    <div className={styles.card}>
      <img src={images[0]} alt="img" />
      <h4>{title}</h4>
      <span>{price}</span>

      <button onClick={() => addToCart(product)}>ADD +</button>
    </div>
  );
}

export default ShopItem;
