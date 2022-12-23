import { createBrowserRouter } from "react-router-dom";
import HomePage from "../layout/HomePage";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import CartPage from "../page/CartPage/CartPage";
import LoginPage from "../page/LoginPage/LoginPage";
import SignIn from "../page/SignIn/SignIn";

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
  {
    path: "signIn",
    element: <SignIn />
  }
]);

export default router;
