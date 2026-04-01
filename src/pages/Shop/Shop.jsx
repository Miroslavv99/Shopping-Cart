import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";
import useCategories from "../../hooks/useCategories";
import useProducts from "../../hooks/useProducts";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import ProductsList from "../../components/ProductsList/ProductsList";

function Shop() {
  const [cart, setCart, addToCart, increaseQuantity] = useOutletContext();
  const { categories, categoriesError, categoriesLoading } = useCategories();
  const { setUrl, productData, errorMessage, productLoading } = useProducts();

  return (
    <div className={styles.shop}>
      <CategoriesList
        setUrl={setUrl}
        categories={categories}
        categoriesError={categoriesError}
        categoriesLoading={categoriesLoading}
      />
      <ProductsList
        productData={productData}
        errorMessage={errorMessage}
        productLoading={productLoading}
        addToCart={addToCart}
      />
    </div>
  );
}

export default Shop;
