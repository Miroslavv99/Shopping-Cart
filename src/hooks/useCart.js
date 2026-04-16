const useCart = (cart, setCart, productsQuantity, setProductsQuantity) => {
  function changeQuantity(product, value) {
    const foundProduct = cart.find((cartItem) => cartItem.id === product.id);
    foundProduct.quantity = value;
    setCart([...cart]);
  }

  function increaseQuantity(product) {
    const foundProduct = cart.find((cartItem) => cartItem.id === product.id);
    foundProduct.quantity += 1;
    setProductsQuantity(productsQuantity + 1);
    setCart([...cart]);
  }

  function decreaseQuantity(product) {
    const foundProduct = cart.find((cartItem) => cartItem.id === product.id);

    if (foundProduct.quantity > 1) {
      foundProduct.quantity -= 1;
      setProductsQuantity(productsQuantity - 1);
      setCart([...cart]);
    } else {
      deleteProduct(product);
    }
  }

  function deleteProduct(product) {
    const filtredCart = cart.filter((cartItem) => cartItem.id !== product.id);
    setProductsQuantity(productsQuantity - product.quantity);
    setCart(filtredCart);
  }

  function addToCart(product) {
    const foundProduct = cart.find((cartItem) => cartItem.id === product.id);
    if (foundProduct) {
      increaseQuantity(product);
      setProductsQuantity(productsQuantity + 1);
    } else {
      product.quantity = 1;
      setProductsQuantity(productsQuantity + 1);
      setCart([...cart, product]);
    }
  }

  return { addToCart, increaseQuantity, decreaseQuantity, deleteProduct };
};

export default useCart;
