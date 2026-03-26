import { createBrowserRouter } from "react-router";
import App from "./App";
import ShopLayout from "./layouts/ShopLayout";
import CartLayout from "./layouts/CartLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <ShopLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "shop", element: <Shop /> },
        ],
      },
      {
        element: <CartLayout />,
        children: [{ path: "cart", element: <Cart /> }],
      },
    ],
  },
]);

export default routes;
