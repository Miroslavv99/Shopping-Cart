import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";
import styles from "./Shop.module.css";
import useCategories from "../../hooks/useCategories";
import useProducts from "../../hooks/useProducts";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import ProductsList from "../../components/ProductsList/ProductsList";
import ShopContext from "../../contexts/ShopContext";

function Shop() {
  const {
    categories,
    categoriesError,
    setCategoriesError,
    categoriesLoading,
    getCategories,
  } = useCategories();

  const {
    setProductsUrl,
    productData,
    productsError,
    setProductsError,
    productLoading,
    getProductData,
  } = useProducts();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ShopContext.Provider
      value={{
        categories,
        setProductsUrl,
        categoriesError,
        categoriesLoading,
        getCategories,
        productData,
        productsError,
        setProductsError,
        productLoading,
        getProductData,
      }}
    >
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
        <CategoriesList isOpen={isOpen} setIsOpen={setIsOpen} />
        <ProductsList />
      </div>
    </ShopContext.Provider>
  );
}

export default Shop;
