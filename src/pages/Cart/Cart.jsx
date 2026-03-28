import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";

function Cart() {
  const [cart, setCart] = useOutletContext();

  console.log(cart);

  return <div className={styles.cart}>Cart</div>;
}

export default Cart;
