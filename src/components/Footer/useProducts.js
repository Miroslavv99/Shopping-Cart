import { useEffect, useState } from "react";

const useProducts = () => {
  const [url, setUrl] = useState(
    "https://dummyjson.com/products/category/mens-watches",
  );
  const [productData, setProductData] = useState(null);
  const [productsError, setProductsError] = useState(null);
  const [productLoading, setProductLoading] = useState(true);

  const getProductData = async (controller) => {
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
      setProductsError(error.message);
    } finally {
      if (!controller.signal.aborted) {
        setProductLoading(false);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    getProductData(controller);

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    setUrl,
    productData,
    productsError,
    setProductsError,
    productLoading,
  };
};

export default useProducts;
