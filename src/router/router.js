import { createBrowserRouter } from "react-router-dom";
import Cart from "../component/Cart";
import App from "../App";
import { Hello } from "../component/Hello";
import AllProducts from "../component/User/getAllProduct";
// import Login from "../component/Login";
import Group from "../component/User/getAllGroup";
import DetailProduct from "../component/User/getDetailProduct";
import ProductTheGroup from "../component/User/getProductTheGroup";
import Login from "../component/User/login";
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
      // {
      //   element: <Login />,
      //   path: "/login",
      // },
      {
        element: <AllProducts />,
        path: "/listProducts",
      },
      {
        element: <ProductTheGroup />,
        path: "/product/:idGroup",
      },
      {
        element: <DetailProduct />,
        path: "/detailProduct/:id",
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
