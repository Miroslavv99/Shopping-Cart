import styles from "./Shop.module.css";
import useProductData from "../../hooks/useProductData";
import useCategoryData from "../../hooks/useCategoryData";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useOutletContext } from "react-router";

function Shop() {
  const { setUrl, productData, errorMessage, loading } = useProductData();
  const categories = useCategoryData();
  const [cart, setCart] = useOutletContext();

  if (loading) return <span className={styles.loading}>loading...</span>;

  console.log(categories);
  console.log(productData);

  return (
    <div className={styles.shop}>
      <div>
        {categories.map((category) => {
          return (
            <button onClick={() => setUrl(category.url)} key={category.slug}>
              {category.name}
            </button>
          );
        })}
      </div>
      {productData.products.map((el) => {
        return (
          <ProductCard
            key={el.id}
            image={el.images[0]}
            title={el.title}
            price={el.price}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </div>
  );
}

export default Shop;
