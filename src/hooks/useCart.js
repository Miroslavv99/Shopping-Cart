const useCart = (cart, setCart, productsQuantity) => {
  function changeQuantity(product, value) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, quantity: value } : item,
      ),
    );
  }

  function increaseQuantity(product) {
    if (product.quantity >= 20) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  function decreaseQuantity(product) {
    if (product.quantity > 1) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    } else {
      deleteProduct(product);
    }
  }

  function deleteProduct(product) {
    const filtredCart = cart.filter((cartItem) => cartItem.id !== product.id);

    setCart(filtredCart);
  }

  function addToCart(product) {
    if (product.quantity > 0) {
      increaseQuantity(product);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  }

  return {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    changeQuantity,
  };
};

export default useCart;
