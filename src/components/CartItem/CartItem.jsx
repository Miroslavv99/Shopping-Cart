import { useContext } from "react";
import shopContext from "../../context/shopContext";
import styles from "./CartItem.module.css";

function CartItem({
  product,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
}) {
  const { images, title, price, quantity } = product;
  const { changeQuantity } = useContext(shopContext);
  const totalCost = price * quantity;

  function handleQuantityInput(e) {
    const value = Number(e.target.value);
    if (value < 1) {
      changeQuantity(product, 1);
    } else if (value > 20) {
      changeQuantity(product, 20);
    } else {
      changeQuantity(product, value);
    }
  }

  console.log(product);

  return (
    <div className={styles.item}>
      <img src={images[0]} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>
        Price: <b>{price} $</b>
      </p>
      <p className={styles.totalCost}>
        Total Cost: <b>{totalCost.toFixed(2)} $</b>
      </p>
      <div className={styles.quantitySelection}>
        <p>Quantity: </p>
        <button onClick={() => increaseQuantity(product)}>+</button>
        <input
          type="number"
          value={product.quantity}
          min={1}
          max={20}
          onChange={handleQuantityInput}
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
