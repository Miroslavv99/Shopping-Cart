import useProductData from "../../hooks/useProductData";
import ProductCard from "../../components/ProductCard";

function Shop() {
  const { productData, errorMessage, loading } = useProductData();

  if (loading) return <h1>loading...</h1>;

  console.log(productData);
  return (
    <div>
      {productData.map((el) => {
        return <ProductCard url={el.images[0]} />;
      })}
    </div>
  );
}

export default Shop;
