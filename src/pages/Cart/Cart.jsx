import { useOutletContext } from "react-router";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Cart.module.css";

function Cart() {
  const [cart, setCart] = useOutletContext();

  return (
    <div className={styles.cart}>
      {cart.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </div>
  );
}

export default Cart;
