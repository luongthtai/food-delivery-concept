import { createBrowserRouter } from "react-router-dom";
import HomePage from "../layout/HomePage";
import LoginPage from "../page/LoginPage/LoginPage";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import CartPage from "../page/CartPage/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "cartPage",
    element: <CartPage />,
  },
]);

export default router;
