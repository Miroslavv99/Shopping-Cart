import { Outlet, useOutletContext } from "react-router";
import Footer from "../components/Footer";

function ShopLayout() {
  const [cart, setCart, addToCart, decreaseQuantity, deleteProduct] =
    useOutletContext();
  return (
    <>
      <Outlet
        context={[cart, setCart, addToCart, decreaseQuantity, deleteProduct]}
      />
      <Footer />
    </>
  );
}

export default ShopLayout;
