import { useEffect, useState } from "react";

const useProductData = () => {
  const [url, setUrl] = useState(
    "https://dummyjson.com/products/category/fragrances",
  );
  const [productData, setProductData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
        }
      }
    };

    getProductData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { setUrl, productData, errorMessage, loading };
};

export default useProductData;
