import { useOutletContext } from "react-router";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.css";

function Cart() {
  const [
    cart,
    setCart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
  ] = useOutletContext();
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
            decreaseQuantity={decreaseQuantity}
            deleteProduct={deleteProduct}
          />
        );
      })}
    </div>
  );
}

export default Cart;
