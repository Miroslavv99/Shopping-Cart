import { useState } from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ product, cart, setCart }) {
  const [quantity, setQuantity] = useState(1);
  const [inputValue, setInputValue] = useState(0);

  function handleInput(e) {
    setInputValue(e.target.value);
    setQuantity(inputValue);
  }

  function addToCart(product) {
    product.quantity = quantity;
    setCart([...cart, product]);
    console.log(product);
  }

  return (
    <div className={styles.card}>
      <img src={product.images[0]} alt="img" />
      <h4>{product.title}</h4>
      <span>{product.price}</span>
      <input type="number" onChange={handleInput} />
      <button onClick={() => addToCart(product)}>ADD +</button>
    </div>
  );
}

export default ProductCard;
