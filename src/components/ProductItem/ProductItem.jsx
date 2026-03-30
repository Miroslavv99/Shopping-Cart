import { useState } from "react";
import styles from "./ProductItem.module.css";
import { useOutletContext } from "react-router";

function ProductItem({ product }) {
  const { images, title, price } = product;
  const [cart, setCart] = useOutletContext();
  const [quantity, setQuantity] = useState(1);
  const [inputValue, setInputValue] = useState(0);

  console.log(title);

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
      <img src={images[0]} alt="img" />
      <h4>{title}</h4>
      <span>{price}</span>
      <input type="number" onChange={handleInput} />
      <button onClick={() => addToCart(product)}>ADD +</button>
    </div>
  );
}

export default ProductItem;
