import { createBrowserRouter } from "react-router-dom";
// import HomePage from "../layout/HomePage";
import ErrorPage from "../page/ErrorPage/ErrorPage";
// import CartPage from "../page/CartPage/CartPage";
import LoginPage from "../page/LoginPage/LoginPage";
import SignIn from "../page/SignIn/SignIn";
// import PersonalPage from "../page/PersonalPage/PersonalPage";
import React from "react";
import Loading from "../component/Loading/Loading";

const LazyPersonal = React.lazy(() => import("../page/PersonalPage/PersonalPage"))

const LazyHome = React.lazy(() => import("../layout/HomePage"))

const LazyCart = React.lazy(() => import("../page/CartPage/CartPage"))

const CheckOut = React.lazy(() => import("../page/Checkout/Checkout.js"))


const router = createBrowserRouter([
  {
    path: "/",
    element: <React.Suspense fallback={<Loading />}><LazyHome /></React.Suspense>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/cartPage",
    element: <React.Suspense fallback={<Loading />}><LazyCart /></React.Suspense>,
  },
  {
    path: "/signIn",
    element: <SignIn />
  },
  {
    path: "/personalPage",
    element: <React.Suspense fallback={<Loading />}><LazyPersonal /></React.Suspense>
  },
  {
    path: "/checkout",
    element: <React.Suspense fallback={<Loading />}><CheckOut /></React.Suspense>,
  }
]);

export default router;
