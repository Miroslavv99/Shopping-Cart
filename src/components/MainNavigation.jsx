import { Link } from "react-router";

function MainNavigation() {
  return (
    <header>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="shop">
        Shop
      </Link>
      <Link className="link" to="cart">
        Cart
      </Link>
    </header>
  );
}

export default MainNavigation;
