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
          <svg
            width="35px"
            height="35px"
            viewBox="-0.5 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M17.25 7.88501H18.31L19.37 21.425C19.39 21.715 19.16 21.965 18.87 21.965L5.13 22.005C4.84 22.005 4.61 21.755 4.63 21.465L5.60999 7.92502H6.71"
                stroke="#ffffff"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M13.25 8.95502H10.72"
                stroke="#ffffff"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M15.25 10.605V6.33499C15.25 4.48499 13.79 2.995 11.99 2.995C10.19 2.995 8.72998 4.49499 8.72998 6.33499V10.605"
                stroke="#ffffff"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default MainNavigation;
