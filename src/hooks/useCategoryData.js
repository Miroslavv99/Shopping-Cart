import { useState, useEffect } from "react";

const useCategoryData = () => {
  const [categories, setCategories] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories",
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Request Error");
        }

        const parsedResponse = await response.json();

        setCategories(parsedResponse);
      } catch (error) {
        if (error.name === "AbortError") return;
        setErrorMessage(error.message);
      } finally {
        if (!controller.signal.aborted) {
          setCategoriesLoading(false);
        }
      }
    };

    getCategories();

    return () => {
      controller.abort();
    };
  }, []);

  return { categories, errorMessage, categoriesLoading };
};

export default useCategoryData;
