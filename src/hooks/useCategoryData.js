import { useState, useEffect } from "react";

const useCategoryData = () => {
  const [categories, setCategoryes] = useState();

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

        setCategoryes(parsedResponse);
      } catch (error) {
        if (error.name === "AbortError") return;
      } finally {
        if (controller.signal.aborted) {
        }
      }
    };

    getCategories();

    return () => {
      controller.abort();
    };
  }, []);

  return categories;
};

export default useCategoryData;
