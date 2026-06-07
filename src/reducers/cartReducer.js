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

    case "increase_quantity":
      return cart.map((item) => {
        if (item.id === action.product.id) {
          return {
            ...item,
            quantity: item.quantity >= 20 ? 20 : item.quantity + 1,
          };
        } else {
          return item;
        }
      });

    case "decrease_quantity":
      return cart
        .map((item) => {
          if (item.id === action.product.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0);

    case "delete_product":
      return cart.filter((item) => item.id !== action.product.id);

    case "add_to_cart":
      if (cart.find((el) => el.id === action.product.id)) {
        return cart.map((item) => {
          if (item.id === action.product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...cart, { ...action.product, quantity: 1 }];
      }

    case "clear_cart":
      return [];

    default:
      return cart;
      break;
  }
};

export default cartReducer;
