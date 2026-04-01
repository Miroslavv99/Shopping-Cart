import { useOutletContext } from "react-router";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.css";

function Cart() {
  const [cart, setCart, addToCart, increaseQuantity] = useOutletContext();
  console.log(cart);

  return (
    <div className={styles.cart}>
      {cart.map((product) => {
        return (
          <CartItem
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
            increaseQuantity={increaseQuantity}
          />
        );
      })}
    </div>
  );
}

export default Cart;
