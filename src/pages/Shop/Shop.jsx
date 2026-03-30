import styles from "./Shop.module.css";
import useProductData from "../../hooks/useProductData";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useOutletContext } from "react-router";

function Shop() {
  const [cart, setCart] = useOutletContext();
  const { setUrl, productData, errorMessage, productLoading } =
    useProductData();

  if (productLoading) return <span className={styles.loading}>loading...</span>;

  console.log(productData);

  return (
    <>
      <CategoriesList setUrl={setUrl} />
      <div className={styles.shop}>
        {productData.products.map((el) => {
          return (
            <ProductCard
              key={el.id}
              product={el}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </>
  );
}

export default Shop;
