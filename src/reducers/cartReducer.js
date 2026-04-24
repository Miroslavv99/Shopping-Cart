const cartReducer = (cart, action) => {
  switch (action.type) {
    case "change_quantity":
      return cart.map((item) => {
        if (item.id === action.product.id) {
          return { ...item, quantity: action.value };
        } else {
          return item;
        }
      });
      break;

    case "increase_quantity":
      return cart.map((item) => {
        if (item.id === action.product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      break;

    case "decrease_quantity":
      return cart.map((item) => {
        if (item.id === action.product.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      break;

    case "delete_product":
      return cart.filter((item) => item.id !== action.product.id);
      break;

    case "add_to_cart":
      action.product.quantity = 1;
      return [...cart, action.product];
      break;

    case "clear_cart":
      return [];

    default:
      return cart;
      break;
  }
};

export default cartReducer;
