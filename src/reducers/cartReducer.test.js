import cartReducer from "./cartReducer";

describe("cartReducer", () => {
  const item = { id: 1, name: "item", quantity: 1 };
  const initialState = [item];

  test("change_quantity", () => {
    const state = cartReducer(initialState, {
      type: "change_quantity",
      product: item,
      value: 5,
    });

    expect(state[0].quantity).toBe(5);
  });

  test("increase_quantity", () => {
    const state = cartReducer(initialState, {
      type: "increase_quantity",
      product: item,
    });

    expect(state[0].quantity).toBe(2);
  });

  test("decrease_quantity removes item if 0", () => {
    const state = cartReducer(initialState, {
      type: "decrease_quantity",
      product: item,
    });

    expect(state.length).toBe(0);
  });

  test("delete_product", () => {
    const state = cartReducer(initialState, {
      type: "delete_product",
      product: item,
    });

    expect(state.length).toBe(0);
  });

  test("add_to_cart existing item", () => {
    const state = cartReducer(initialState, {
      type: "add_to_cart",
      product: item,
    });

    expect(state[0].quantity).toBe(2);
  });

  test("add_to_cart new item", () => {
    const state = cartReducer([], {
      type: "add_to_cart",
      product: item,
    });

    expect(state[0].quantity).toBe(1);
  });

  test("clear_cart", () => {
    const state = cartReducer(initialState, {
      type: "clear_cart",
    });

    expect(state).toEqual([]);
  });
});
