import { useEffect, useState } from "react";

const useProductData = () => {
  const [productData, setProductData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const getProductData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
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
          setLoading(false);
        }
      }
    };

    getProductData();

    return () => {
      controller.abort();
    };
  }, []);

  return { productData, errorMessage, loading };
};

export default useProductData;
