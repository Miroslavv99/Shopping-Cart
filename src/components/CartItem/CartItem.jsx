function CartItem({ product }) {
  const { images, title, price, quantity } = product;
  return (
    <div className="item">
      <img src={images[0]} alt="" />
      {title}
      {price}
      quant: {quantity}
    </div>
  );
}

export default CartItem;
