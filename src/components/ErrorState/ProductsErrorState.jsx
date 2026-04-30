function ProductsErrorState({
  setReloadUrl,
  url,
  errorMessage,
  setErrorMessage,
}) {
  function reloadProducts() {
    setErrorMessage(null);
    setReloadUrl(url);
  }
  return (
    <div>
      Error: {errorMessage}
      <button onClick={reloadProducts}>RELOAD</button>
    </div>
  );
}

export default ProductsErrorState;
