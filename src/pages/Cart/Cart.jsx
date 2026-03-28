import { useOutletContext } from "react-router";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Cart.module.css";

function Cart() {
  const [cart, setCart] = useOutletContext();

  console.log(cart);

  return (
    <div className={styles.cart}>
      {cart.map((el) => {
        return (
          <ProductCard
            key={el.id}
            image={el.image}
            title={el.title}
            price={el.price}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </div>
  );
}

export default Cart;
