import { useState } from "react";
import styles from "./ShopItem.module.css";

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
      <h4 className={styles.productTitle}>{title}</h4>
      <div className={styles.productDescription}>
        <span>${price}</span>
        <button
          className={styles.addProduct}
          onClick={() => addToCart(product)}
        >
          To Cart +
        </button>
      </div>
    </div>
  );
}

export default ShopItem;
