import { useContext, useRef } from "react";
import ShopContext from "../../contexts/ShopContext";
import styles from "./ErrorState.module.css";

function ErrorState({ errorMessage }) {
  const { productsError, getProductData, categoriesError, getCategories } =
    useContext(ShopContext);

  const productsController = useRef(null);
  const categoriesController = useRef(null);

  function reloadHandler() {
    if (categoriesError) {
      if (categoriesController.current) {
        categoriesController.current.abort();
      }
      categoriesController.current = new AbortController();
      getCategories(categoriesController.current);
    } else {
      if (productsController.current) {
        productsController.current.abort();
      }
      productsController.current = new AbortController();
      getProductData(productsController.current);
    }
  }

  return (
    <div className={styles.errorState}>
      <h1>{errorMessage}</h1>
      <button onClick={reloadHandler}>RELOAD</button>
    </div>
  );
}

export default ErrorState;
