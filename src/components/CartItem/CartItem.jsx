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
      TITLE: {title}
      PRICE: {price}
      quant: {quantity}
      <button onClick={() => increaseQuantity(product)}>+++</button>
      <input type="number" />
      <button onClick={() => decreaseQuantity(product)}>---</button>
      <button onClick={() => deleteProduct(product)}>DELETE</button>
    </div>
  );
}

export default CartItem;
