import { useState, useEffect } from "react";

const useCategories = () => {
  const categoriesUrl = "https://dummyjson.com/products/categories";
  const [categories, setCategories] = useState(null);
  const [categoriesReloadUrl, setCategoriesReloadUrl] = useState("");
  const [categoriesError, setCategoriesError] = useState(null);
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
        setCategoriesError(error.message);
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
  }, [categoriesReloadUrl]);

  return {
    categoriesUrl,
    setCategoriesReloadUrl,
    categories,
    categoriesError,
    setCategoriesError,
    categoriesLoading,
  };
};

export default useCategories;
