const useCart = (cart, setCart) => {
  function increaseQuantity(product) {
    const foundProduct = cart.find((cartItem) => cartItem.id === product.id);
    foundProduct.quantity += 1;
    setCart([...cart]);
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

  return { addToCart, increaseQuantity };
};

export default useCart;
