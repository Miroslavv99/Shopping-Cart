import { useContext } from "react";
import styles from "./CategoriesList.module.css";
import ShopContext from "../../contexts/ShopContext";
import ErrorState from "../ErrorState/ErrorState";
import Loading from "../Loading/Loading";

function CategoriesList({ isOpen, setIsOpen }) {
  const {
    categories,
    setProductsUrl,
    categoriesError,
    categoriesLoading,
    getCategories,
  } = useContext(ShopContext);

  function handleCategory(url) {
    setProductsUrl(url);
    setIsOpen(!isOpen);
  }

  if (categoriesLoading) return <Loading />;
  return (
    <>
      {categoriesError ? (
        <ErrorState
          errorMessage={`Categories Error: ${categoriesError}`}
          fetchData={getCategories}
        />
      ) : (
        <div
          className={
            isOpen ? `${styles.categories} ${styles.open}` : styles.categories
          }
        >
          {categoriesLoading ? (
            <span>loading...</span>
          ) : (
            categories.map((category) => {
              return (
                <button
                  className={styles.category}
                  onClick={() => handleCategory(category.url)}
                  key={category.slug}
                >
                  {category.name}
                </button>
              );
            })
          )}
        </div>
      )}
    </>
  );
}

export default CategoriesList;
