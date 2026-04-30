import styles from "./CategoriesList.module.css";
import ShopContext from "../../contexts/ShopContext";
import { useContext } from "react";

function CategoriesList({ isOpen, setIsOpen }) {
  const {
    categories,
    setProductsUrl,
    categoriesError,
    setCategoriesError,
    categoriesLoading,
  } = useContext(ShopContext);

  if (categoriesLoading) return <span>loading...</span>;
  if (categoriesError) return <span>{categoriesError}</span>;

  function handleCategory(url) {
    setProductsUrl(url);
    setIsOpen(!isOpen);
  }

  console.log(categories);
  return (
    <div
      className={
        isOpen ? `${styles.categories} ${styles.open}` : styles.categories
      }
    >
      {categories.map((category) => {
        return (
          <button
            className={styles.category}
            onClick={() => handleCategory(category.url)}
            key={category.slug}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}

export default CategoriesList;
