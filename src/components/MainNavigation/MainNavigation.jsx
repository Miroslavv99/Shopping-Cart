import { useState } from "react";
import styles from "./MainNavigation.module.css";
import { Link } from "react-router";

function MainNavigation() {
  const [activeLink, setActiveLink] = useState("");

  function activateLink(e) {
    setActiveLink(e.target.id);
  }

  return (
    <header className={styles.navigation}>
      <Link className="link" to="/">
        <h1>MONERI</h1>
      </Link>
      <div className={styles.links}>
        <Link
          onClick={activateLink}
          id="home"
          className={activeLink === "home" ? styles.active : "link"}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={activateLink}
          id="shop"
          className={activeLink === "shop" ? styles.active : "link"}
          to="shop"
        >
          Shop
        </Link>
        <Link
          onClick={activateLink}
          id="cart"
          className={activeLink === "cart" ? styles.active : "link"}
          to="cart"
        >
          Cart
        </Link>
      </div>
    </header>
  );
}

export default MainNavigation;
