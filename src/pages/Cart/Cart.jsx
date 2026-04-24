import { Link } from "react-router";
import { useContext } from "react";
import shopContext from "../../context/shopContext";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.css";

function Cart() {
  const {
    cart,
    setCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    productsQuantity,
    productsPrice,
    clearCart,
    setActiveLink,
  } = useContext(shopContext);

  return (
    <div className={styles.cart}>
      {productsQuantity < 1 ? (
        <div className={styles.emptyCart}>
          <div>
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
                  stroke="#000000"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M13.25 8.95502H10.72"
                  stroke="#000000"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M15.25 10.605V6.33499C15.25 4.48499 13.79 2.995 11.99 2.995C10.19 2.995 8.72998 4.49499 8.72998 6.33499V10.605"
                  stroke="#000000"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <h1>Your cart is empty</h1>
          </div>
          <p>Add more items to your cart. We're sure you'll like something.</p>
          <Link
            onClick={() => setActiveLink("shop")}
            className={styles.shopLink}
            to="/shop"
          >
            Shop Now!
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cart.map((product) => {
              return (
                <CartItem
                  key={product.id}
                  product={product}
                  cart={cart}
                  setCart={setCart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  deleteProduct={deleteProduct}
                />
              );
            })}
            <button onClick={clearCart}>DELETE CART</button>
          </div>
          <div className={styles.orderSummary}>
            FOR PAYMENT: {productsPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
