import { Outlet, useOutletContext } from "react-router";
import Footer from "../components/Footer";

function ShopLayout() {
  const [cart, setCart, addToCart] = useOutletContext();
  return (
    <>
      <Outlet context={[cart, setCart, addToCart]} />
      <Footer />
    </>
  );
}

export default ShopLayout;
