import { useState, useEffect } from "react";

const useCategoryData = () => {
  const [categoriesUrl, setCategoriesUrl] = useState(
    "https://dummyjson.com/products/categories",
  );
  const [categories, setCategories] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const getCategories = async () => {
      try {
        const response = await fetch(categoriesUrl, {
          signal: controller.signal,
        });

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
  }, [categoriesUrl]);

  return { categories, errorMessage, categoriesLoading };
};

export default useCategoryData;
