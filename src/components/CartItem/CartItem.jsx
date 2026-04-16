import { useState } from "react";
import styles from "./CartItem.module.css";

function CartItem({
  product,
  cart,
  setCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
}) {
  const { images, title, price, quantity } = product;
  const [inputValue, setInputValue] = useState(1);

  function handleInput(e) {
    const value = Number(e.target.value);
    if (value < 1) {
      setInputValue(1);
    } else if (value > 20) {
      setInputValue(20);
    } else {
      setInputValue(value);
    }
  }

  return (
    <div className={styles.item}>
      <img src={images[0]} alt="" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{price}</p>
      <p className={styles.quantity}>{quantity}</p>
      <div className={styles.quantitySelection}>
        <button onClick={() => increaseQuantity(product)}>+</button>
        <input
          type="number"
          value={inputValue}
          min={1}
          max={20}
          onChange={handleInput}
        />
        <button onClick={() => decreaseQuantity(product)}>-</button>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => deleteProduct(product)}
      >
        X
      </button>
    </div>
  );
}

export default CartItem;
