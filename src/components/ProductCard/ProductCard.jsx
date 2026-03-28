import { useState } from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ image, title, price, cart, setCart }) {
  const [quantity, setQuantity] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  function handleInput(e) {
    setInputValue(e.target.value);
    setQuantity(inputValue);
  }

  function addToCart(item) {
    setCart([...cart, item]);
  }

  return (
    <div className={styles.card}>
      <img src={image} alt="img" />
      <h4>{title}</h4>
      <span>{price}</span>
      <input type="number" onChange={handleInput} />
      <button onClick={() => addToCart({ title, image, price })}>ADD +</button>
    </div>
  );
}

export default ProductCard;
