import { useContext } from "react";
import Loading from "../Loading/Loading";
import ShopItem from "../../components/ShopItem/ShopItem";
import styles from "./ProductsList.module.css";
import ShopContext from "../../contexts/ShopContext";
import CartContext from "../../contexts/CartContext";
import ErrorState from "../ErrorState/ErrorState";

function ProductsList() {
  const { productData, productsError, productLoading, getProductData } =
    useContext(ShopContext);
  const { addToCart } = useContext(CartContext);

  if (productLoading) return <Loading />;

  return (
    <>
      {productsError ? (
        <ErrorState
          errorMessage={`PRODUCTS Error: ${productsError}`}
          fetchData={getProductData}
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
