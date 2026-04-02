import { Outlet, useOutletContext } from "react-router";

function CartLayout() {
  const [
    cart,
    setCart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
  ] = useOutletContext();
  return (
    <>
      <Outlet
        context={[
          cart,
          setCart,
          addToCart,
          increaseQuantity,
          decreaseQuantity,
          deleteProduct,
        ]}
      />
    </>
  );
}

export default CartLayout;
