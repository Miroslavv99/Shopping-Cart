import useCategoryData from "../../hooks/useCategoryData";

function CategoriesList({ setUrl }) {
  const { categories, errorMessage, categoriesLoading } = useCategoryData();

  if (categoriesLoading) return <span>loading...</span>;
  if (errorMessage) return <span>{errorMessage}</span>;

  console.log(categories);

  return (
    <div>
      {categories.map((category) => {
        return (
          <button onClick={() => setUrl(category.url)} key={category.slug}>
            {category.name}
          </button>
        );
      })}
    </div>
  );
}

export default CategoriesList;
