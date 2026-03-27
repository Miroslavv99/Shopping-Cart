import { Outlet, useOutletContext } from "react-router";

function CartLayout() {
  const [cart, setCart] = useOutletContext();
  return (
    <>
      <Outlet context={[cart, setCart]} />
    </>
  );
}

export default CartLayout;
