import { useEffect, useState } from "react";

const useProducts = () => {
  const [productsUrl, setProductsUrl] = useState(
    "https://dummyjson.com/products/category/mens-watches",
  );
  const [productData, setProductData] = useState(null);
  const [productsError, setProductsError] = useState(null);
  const [productLoading, setProductLoading] = useState(true);

  const getProductData = async (controller) => {
    try {
      const response = await fetch(productsUrl, {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Request Failed!");
      }

      const parsedData = await response.json();

      setProductsError(null);
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
  }, [productsUrl]);

  return {
    productData,
    productsError,
    productLoading,
    getProductData,
    setProductsUrl,
  };
};

export default useProducts;
