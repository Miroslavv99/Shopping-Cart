import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";
import useProductData from "../../hooks/useProductData";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import ShopItem from "../../components/ShopItem/ShopItem";

function Shop() {
  const [cart, setCart] = useOutletContext();
  const { setUrl, productData, errorMessage, productLoading } =
    useProductData();

  if (productLoading) return <span className={styles.loading}>loading...</span>;
  if (errorMessage) return <span>{errorMessage}</span>;

  return (
    <>
      <CategoriesList setUrl={setUrl} />
      <div className={styles.shop}>
        {productData.products.map((product) => {
          return (
            <ShopItem
              key={product.id}
              product={product}
              context={[cart, setCart]}
            />
          );
        })}
      </div>
    </>
  );
}

export default Shop;
