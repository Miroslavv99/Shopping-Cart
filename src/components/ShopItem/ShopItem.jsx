import { useState } from "react";
import styles from "./ShopItem.module.css";
import { useOutletContext } from "react-router";

function ShopItem({ product, addToCart }) {
  const { images, title, price } = product;
  const [quantity, setQuantity] = useState(1);

  function handleInput(e) {
    setInputValue(e.target.value);
    setQuantity(inputValue);
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
