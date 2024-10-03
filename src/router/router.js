import { createBrowserRouter } from "react-router-dom";
import Cart from "../component/Cart";
import App from "../App";
import { Hello } from "../component/Hello";
import Login from "../component/Login";
export default createBrowserRouter([
  {
    children: [
      {
        element: <Cart />,
        path: "/cart",
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
