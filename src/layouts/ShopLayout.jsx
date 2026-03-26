import { Outlet } from "react-router";
import Footer from "../components/Footer";

function ShopLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default ShopLayout;
