import { ManagerHome } from "../pages/ManagerHome";
import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHome />,
  },
  {
    path: "/manager/sign-in",
    element: <SignIn />,
  },
  {
    path: "/manager/sign-up",
    element: <SignUp />,
  },
]);
