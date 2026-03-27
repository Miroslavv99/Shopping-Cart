import { Outlet, useOutletContext } from "react-router";
import Footer from "../components/Footer";

function ShopLayout() {
  const [cart, setCart] = useOutletContext();
  return (
    <>
      <Outlet context={[cart, setCart]} />
      <Footer />
    </>
  );
}

export default ShopLayout;
