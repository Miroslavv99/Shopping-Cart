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

  return (
    <div className={styles.item}>
      <img src={images[0]} alt="" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{price}</p>
      <p className={styles.quantity}>{quantity}</p>
      <div className={styles.quantitySelection}>
        <button onClick={() => increaseQuantity(product)}>+++</button>
        <input type="number" value={1} />
        <button onClick={() => decreaseQuantity(product)}>---</button>
      </div>
      <button onClick={() => deleteProduct(product)}>DELETE</button>
    </div>
  );
}

export default CartItem;
