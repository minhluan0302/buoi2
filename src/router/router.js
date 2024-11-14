import { createBrowserRouter } from "react-router-dom";
import Cart from "../component/Cart";
import App from "../App";
import { Hello } from "../component/Hello";
import Product from "../component/User/getAllProduct";
import Login from "../component/Login";
import Group from "../component/User/getAllGroup";
export default createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Cart />,
        path: "/cart",
      },
      {
        element: <Group />,
        path: "/group",
      },
      {
        element: <Product />,
        path: "/product",
      },
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <App />,
        path: "/app",
      },
      {
        element: <Hello />,
        path: "/hello",
      },
      {
        element: <h1>404 - Không tìm thấy trang</h1>,
        path: "/*",
      },
    ],
  },
]);
