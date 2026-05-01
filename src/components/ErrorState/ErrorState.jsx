import styles from "./ErrorState.module.css";
import { useRef } from "react";

function ErrorState({ errorMessage, fetchData }) {
  const controller = useRef(null);

  function reloadHandler() {
    if (controller.current) {
      controller.current.abort();
    }
    controller.current = new AbortController();
    fetchData(controller.current);
  }

  return (
    <div className={styles.errorState}>
      <h1>{errorMessage}</h1>
      <button onClick={reloadHandler}>RELOAD</button>
    </div>
  );
}

export default ErrorState;
