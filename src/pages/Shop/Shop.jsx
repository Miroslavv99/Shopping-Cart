import { useContext, useState } from "react";
import { cartContext } from "../../App";
import styles from "./Shop.module.css";
import useCategories from "../../hooks/useCategories";
import useProducts from "../../hooks/useProducts";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import ProductsList from "../../components/ProductsList/ProductsList";

function Shop() {
  const { addToCart } = useContext(cartContext);
  const { categories, categoriesError, categoriesLoading } = useCategories();
  const { setUrl, productData, errorMessage, productLoading } = useProducts();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.shop}>
      <button
        className={styles.categoriesButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          width="44px"
          height="44px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 7H3V6H21V7Z" fill="#080341" />
          <path d="M21 12.5H3V11.5H21V12.5Z" fill="#080341" />
          <path d="M21 18H3V17H21V18Z" fill="#080341" />
        </svg>
      </button>
      <CategoriesList
        setUrl={setUrl}
        categories={categories}
        categoriesError={categoriesError}
        categoriesLoading={categoriesLoading}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
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
