import { useOutletContext } from "react-router";

function Cart() {
  const [cart, setCart] = useOutletContext();

  console.log(cart);

  return <div>Cart</div>;
}

export default Cart;
