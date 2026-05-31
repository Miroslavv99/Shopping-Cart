import styles from "./OrderModal.module.css";

function OrderModal({ setShowModal }) {
  return (
    <div className={styles.orderModal} onClick={() => setShowModal(false)}>
      <div className={styles.modalContent}>
        <h1>Your Order Succesfuly</h1>
        <button onClick={() => setShowModal(false)}>CLOSE</button>
      </div>
    </div>
  );
}

export default OrderModal;
