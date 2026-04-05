import styles from "./CategoriesList.module.css";

function CategoriesList({
  setUrl,
  categories,
  categoriesError,
  categoriesLoading,
  isOpen,
  setIsOpen,
}) {
  if (categoriesLoading) return <span>loading...</span>;
  if (categoriesError) return <span>{errorMessage}</span>;

  function handleCategory(url) {
    setUrl(url);
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
