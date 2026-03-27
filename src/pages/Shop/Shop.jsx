import styles from "./Shop.module.css";
import useProductData from "../../hooks/useProductData";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useOutletContext } from "react-router";

function Shop() {
  const { productData, errorMessage, loading } = useProductData();
  const [cart, setCart] = useOutletContext();

  if (loading) return <h1>loading...</h1>;

  console.log(productData);
  return (
    <div className={styles.shop}>
      {productData.map((el) => {
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

export default Shop;
