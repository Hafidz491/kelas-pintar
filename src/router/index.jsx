import { ManagerHomePage } from "../pages/manager/home";
import { createBrowserRouter } from "react-router-dom";
import { SignInPage } from "../pages/SignIn";
import { SignUpPage } from "../pages/SignUp";
import { SuccessCheckoutPage } from "../pages/SuccessCheckout";
import Layout from "../components/Layout";
import ManageCoursePage from "../pages/manager/courses";
import ManageCreateCoursePage from "../pages/manager/create-course";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomePage />,
  },
  {
    path: "/manager/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/manager/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/success-checkout",
    element: <SuccessCheckoutPage />,
  },
  {
    path: "/manager",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ManagerHomePage />,
      },
      {
        path: "/manager/courses",
        element: <ManageCoursePage />,
      },
      {
        path: "/manager/courses/create",
        element: <ManageCreateCoursePage />,
      },
    ],
  },
]);
