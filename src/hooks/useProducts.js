import { useEffect, useState } from "react";

const useProducts = () => {
  const [url, setUrl] = useState(
    "https://dummyjson.com/products/category/fragrances",
  );
  const [productData, setProductData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [productLoading, setProductLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const getProductData = async () => {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Request Failed!");
        }

        const parsedData = await response.json();

        setProductData(parsedData);
      } catch (error) {
        if (error.name === "AbortError") return;
        setErrorMessage(error.message);
      } finally {
        if (!controller.signal.aborted) {
          setProductLoading(false);
        }
      }
    };

    getProductData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { setUrl, productData, errorMessage, productLoading };
};

export default useProducts;
