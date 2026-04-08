import { Outlet, useOutletContext } from "react-router";

function CartLayout() {
  const [
    cart,
    setCart,
    addToCart,
    increaseQuantity,
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
          increaseQuantity,
          decreaseQuantity,
          deleteProduct,
          productsQuantity,
          setProductsQuantity,
        ]}
      />
    </>
  );
}

export default CartLayout;
