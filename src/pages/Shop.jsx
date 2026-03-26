import useProductData from "../hooks/useProductData";

function Shop() {
  const { productData, errorMessage, loading } = useProductData();

  if (loading) return <h1>loading...</h1>;

  console.log(productData);
  return <div>Shop</div>;
}

export default Shop;
