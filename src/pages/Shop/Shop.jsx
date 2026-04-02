import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";
import useCategories from "../../hooks/useCategories";
import useProducts from "../../hooks/useProducts";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useState } from "react";

function Shop() {
  const [
    cart,
    setCart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
  ] = useOutletContext();
  const { categories, categoriesError, categoriesLoading } = useCategories();
  const { setUrl, productData, errorMessage, productLoading } = useProducts();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.shop}>
      <button onClick={() => setIsOpen(!isOpen)}>Categories</button>
      <CategoriesList
        setUrl={setUrl}
        categories={categories}
        categoriesError={categoriesError}
        categoriesLoading={categoriesLoading}
        isOpen={isOpen}
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
