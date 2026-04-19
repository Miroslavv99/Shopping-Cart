import ShopItem from "../../components/ShopItem/ShopItem";
import styles from "./ProductsList.module.css";

function ProductsList({
  productData,
  productLoading,
  errorMessage,
  addToCart,
}) {
  if (productLoading) return <span>loading...</span>;
  if (errorMessage) return <span>{errorMessage}</span>;

  return (
    <div className={styles.products}>
      {productData.products.map((product) => {
        return (
          <ShopItem key={product.id} product={product} addToCart={addToCart} />
        );
      })}
    </div>
  );
}

export default ProductsList;
