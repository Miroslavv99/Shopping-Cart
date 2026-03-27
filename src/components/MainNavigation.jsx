import styles from "./MainNavigation.module.css";
import { Link } from "react-router";

function MainNavigation() {
  return (
    <header className={styles.navigation}>
      <h1>MONERI</h1>
      <div className={styles.links}>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="shop">
          Shop
        </Link>
        <Link className="link" to="cart">
          Cart
        </Link>
      </div>
    </header>
  );
}

export default MainNavigation;
