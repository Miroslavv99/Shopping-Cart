import { Link } from "react-router";

function MainNavigation() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="cart">Cart</Link>
    </header>
  );
}

export default MainNavigation;
