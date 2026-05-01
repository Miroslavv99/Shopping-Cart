import { useState, useEffect } from "react";

const useCategories = () => {
  const categoriesUrl = "https://dummyjson.com/products/categories";
  const [categories, setCategories] = useState(null);
  const [categoriesError, setCategoriesError] = useState(null);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const getCategories = async (controller) => {
    try {
      const response = await fetch(categoriesUrl, {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Request Error");
      }

      const parsedResponse = await response.json();

      setCategoriesError(null);
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

  useEffect(() => {
    const controller = new AbortController();

    getCategories(controller);

    return () => {
      controller.abort();
    };
  }, []);

  return {
    categories,
    categoriesError,
    setCategoriesError,
    categoriesLoading,
    getCategories,
  };
};

export default useCategories;
