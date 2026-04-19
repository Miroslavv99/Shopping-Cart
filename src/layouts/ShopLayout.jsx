import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

function ShopLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default ShopLayout;
