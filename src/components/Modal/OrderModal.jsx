import styles from "./OrderModal.module.css";

function OrderModal({ setShowModal }) {
  return (
    <div className={styles.orderModal} onClick={() => setShowModal(false)}>
      <div className={styles.modalContent}>
        <h1>Your order has been placed.</h1>
        <p> We will contact you shortly to confirm your order.</p>
        <button onClick={() => setShowModal(false)}>CLOSE</button>
      </div>
    </div>
  );
}

export default OrderModal;
