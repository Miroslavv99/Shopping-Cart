import useCategoryData from "../../hooks/useCategoryData";
import { useOutletContext } from "react-router";

function CategoriesList({ setUrl }) {
  const { categories, categoriesLoading } = useCategoryData();

  if (categoriesLoading) return <span>loading...</span>;

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
