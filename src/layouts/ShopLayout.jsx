import { Outlet, useOutletContext } from "react-router";
import Footer from "../components/Footer/Footer";

function ShopLayout() {
  const [
    cart,
    setCart,
    addToCart,
    decreaseQuantity,
    deleteProduct,
    productsQuantity,
    setProductsQuantity,
  ] = useOutletContext();
  return (
    <>
      <Outlet
        context={[
          cart,
          setCart,
          addToCart,
          decreaseQuantity,
          deleteProduct,
          productsQuantity,
          setProductsQuantity,
        ]}
      />
      <Footer />
    </>
  );
}

export default ShopLayout;
