import ShopItem from "../../components/ShopItem/ShopItem";
import styles from "./ProductsList.module.css";
import ShopContext from "../../contexts/ShopContext";
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";
import ErrorState from "../ErrorState/ErrorState";

function ProductsList() {
  const { productData, productsError, productLoading } =
    useContext(ShopContext);
  const { addToCart } = useContext(CartContext);

  if (productLoading) return <span>loading...</span>;

  return (
    <>
      {productsError ? (
        <ErrorState errorMessage={`PRODUCTS Error: ${productsError}`} />
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
