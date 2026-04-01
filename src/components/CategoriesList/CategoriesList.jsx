function CategoriesList({
  setUrl,
  categories,
  categoriesError,
  categoriesLoading,
}) {
  if (categoriesLoading) return <span>loading...</span>;
  if (categoriesError) return <span>{errorMessage}</span>;

  function handle(urls) {
    setUrl(urls);
  }

  return (
    <div>
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
