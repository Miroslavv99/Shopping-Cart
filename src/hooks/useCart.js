const useCart = (cart, setCart) => {
  function increaseQuantity(product) {
    const foundProduct = cart.find((cartItem) => cartItem.id === product.id);
    foundProduct.quantity += 1;
    setCart([...cart]);
  }

  function decreaseQuantity(product) {
    const foundProduct = cart.find((cartItem) => cartItem.id === product.id);

    if (foundProduct.quantity > 1) {
      foundProduct.quantity -= 1;
      setCart([...cart]);
    } else {
      deleteProduct(product);
    }
  }

  function deleteProduct(product) {
    const filtredCart = cart.filter((cartItem) => cartItem.id !== product.id);
    setCart(filtredCart);
  }

  function addToCart(product) {
    const foundProduct = cart.find((cartItem) => cartItem.id === product.id);
    if (foundProduct) {
      increaseQuantity(product);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  }

  return { addToCart, increaseQuantity, decreaseQuantity, deleteProduct };
};

export default useCart;
