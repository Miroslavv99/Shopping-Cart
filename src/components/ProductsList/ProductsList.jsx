import ShopItem from "../../components/ShopItem/ShopItem";
import ProductsErrorMessage from "../ErrorStates/ProductsErrorState";
import styles from "./ProductsList.module.css";

function ProductsList({
  setErrorMessage,
  setReloadUrl,
  url,
  productData,
  productLoading,
  errorMessage,
  addToCart,
}) {
  if (productLoading) return <span>loading...</span>;

  return (
    <>
      {errorMessage ? (
        <ProductsErrorMessage
          setErrorMessage={setErrorMessage}
          setReloadUrl={setReloadUrl}
          url={url}
          errorMessage={errorMessage}
        />
      ) : (
        <div className={styles.products}>
          {productData.products.map((product) => {
            return (
              <ShopItem
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default ProductsList;
