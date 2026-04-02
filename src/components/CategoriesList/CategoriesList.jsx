import styles from "./CategoriesList.module.css";

function CategoriesList({
  setUrl,
  categories,
  categoriesError,
  categoriesLoading,
  isOpen,
}) {
  if (categoriesLoading) return <span>loading...</span>;
  if (categoriesError) return <span>{errorMessage}</span>;

  function handle(urls) {
    setUrl(urls);
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
          <button onClick={() => handle(category.url)} key={category.slug}>
            {category.name}
          </button>
        );
      })}
    </div>
  );
}

export default CategoriesList;
