import { Outlet, useOutletContext } from "react-router";

function CartLayout() {
  const [cart, setCart, addToCart, increaseQuantity] = useOutletContext();
  return (
    <>
      <Outlet context={[cart, setCart, addToCart, increaseQuantity]} />
    </>
  );
}

export default CartLayout;
