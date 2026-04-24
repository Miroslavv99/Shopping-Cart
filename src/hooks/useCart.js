const useCart = (cart, dispatch) => {
  function changeQuantity(product, value) {
    dispatch({
      type: "change_quantity",
      product: product,
      value: value,
    });
  }

  function increaseQuantity(product) {
    if (product.quantity >= 20) return;
    dispatch({
      type: "increase_quantity",
      product: product,
    });
  }

  function decreaseQuantity(product) {
    if (product.quantity > 1) {
      dispatch({
        type: "decrease_quantity",
        product: product,
      });
    } else {
      deleteProduct(product);
    }
  }

  function deleteProduct(product) {
    dispatch({
      type: "delete_product",
      product: product,
    });
  }

  function addToCart(product) {
    if (product.quantity > 0) {
      increaseQuantity(product);
    } else {
      dispatch({
        type: "add_to_cart",
        product: product,
      });
    }
  }

  function clearCart() {
    dispatch({
      type: "clear_cart",
    });
  }

  return {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    changeQuantity,
    clearCart,
  };
};

export default useCart;
