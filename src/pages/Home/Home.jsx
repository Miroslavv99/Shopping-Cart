import styles from "./Home.module.css";
import { Link } from "react-router";

function Home() {
  return (
    <div className={styles.home}>
      <h2>
        -Your New <br />
        Everyday Style.
      </h2>
      <div className={styles.shopDescription}>
        <p>DESIGNER CLOTHES BY</p>
        <h1 className={styles.homeLogo}>MONERI</h1>
        <span className={styles.homeDescription}>
          Monery is your destination for designer and comfortable clothes for
          any occasion.
        </span>
        <Link className={styles.shopButton} to="shop">
          Shop Now +
        </Link>
      </div>
    </div>
  );
}

export default Home;
