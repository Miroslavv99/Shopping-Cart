import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import styles from "./CartItem.module.css";

function CartItem({
  product,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
}) {
  const { images, title, price, quantity } = product;
  const { changeQuantity } = useContext(CartContext);
  const totalCost = price * quantity;

  function handleQuantityInput(e) {
    const value = Number(e.target.value);
    if (value < 1) {
      changeQuantity(product, 1);
    } else if (value > 20) {
      changeQuantity(product, 20);
    } else {
      changeQuantity(product, value);
    }
  }

  return (
    <div className={styles.item}>
      <img src={images[0]} alt={title} />
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.price}>
        <span className={styles.name}>Price:</span>
        {Math.trunc(price)} $
      </p>
      <p className={styles.totalCost}>
        <span className={styles.name}>Total Cost:</span>
        {Math.trunc(totalCost)} $
      </p>
      <div className={styles.quantitySelection}>
        <p className={styles.name}>Quantity:</p>
        <button onClick={() => increaseQuantity(product)}>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
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
                d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                stroke="#7a7a7a"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                stroke="#7a7a7a"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <input
          type="number"
          value={product.quantity}
          min={1}
          max={20}
          onChange={handleQuantityInput}
        />
        <button onClick={() => decreaseQuantity(product)}>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
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
                d="M15 12H9"
                stroke="#7a7a7a"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                stroke="#7a7a7a"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => deleteProduct(product)}
      >
        <svg
          width="30px"
          height="30px"
          viewBox="-2.88 -2.88 37.76 37.76"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          fill="#999999"
          stroke="#999999"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.576"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>delete</title>
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke-width="0.00032"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              {" "}
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-516.000000, -1144.000000)"
                fill="#878787"
              >
                {" "}
                <path
                  d="M538.708,1151.28 C538.314,1150.89 537.676,1150.89 537.281,1151.28 L534.981,1153.58 L532.742,1151.34 C532.352,1150.95 531.718,1150.95 531.327,1151.34 C530.936,1151.73 530.936,1152.37 531.327,1152.76 L533.566,1154.99 L531.298,1157.26 C530.904,1157.65 530.904,1158.29 531.298,1158.69 C531.692,1159.08 532.331,1159.08 532.725,1158.69 L534.993,1156.42 L537.232,1158.66 C537.623,1159.05 538.257,1159.05 538.647,1158.66 C539.039,1158.27 539.039,1157.63 538.647,1157.24 L536.408,1155.01 L538.708,1152.71 C539.103,1152.31 539.103,1151.68 538.708,1151.28 L538.708,1151.28 Z M545.998,1162 C545.998,1163.1 545.102,1164 543.996,1164 L526.467,1164 L518.316,1154.98 L526.438,1146 L543.996,1146 C545.102,1146 545.998,1146.9 545.998,1148 L545.998,1162 L545.998,1162 Z M543.996,1144 L526.051,1144 C525.771,1143.98 525.485,1144.07 525.271,1144.28 L516.285,1154.22 C516.074,1154.43 515.983,1154.71 515.998,1154.98 C515.983,1155.26 516.074,1155.54 516.285,1155.75 L525.271,1165.69 C525.467,1165.88 525.723,1165.98 525.979,1165.98 L525.979,1166 L543.996,1166 C546.207,1166 548,1164.21 548,1162 L548,1148 C548,1145.79 546.207,1144 543.996,1144 L543.996,1144 Z"
                  id="delete"
                  sketch:type="MSShapeGroup"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
