import { ManagerHomePage } from "../pages/manager/home";
import { createBrowserRouter } from "react-router-dom";
import { SignInPage } from "../pages/SignIn";
import { SuccessCheckoutPage } from "../pages/SuccessCheckout";
import Layout from "../components/Layout";
import ManageCoursePage from "../pages/manager/courses";
import ManageCreateCoursePage from "../pages/manager/create-course";
import ManageCourseDetailPage from "../pages/manager/course-detail";
import ManageContentCreatePage from "../pages/manager/course-create-content";
import ManageCoursePreviewPage from "../pages/manager/course-preview";
import ManageStudetnsPage from "../pages/manager/students";
import StudentPage from "../pages/student/student-overview";
import { SignUpPage } from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomePage />,
  },
  {
    path: "/manage/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/manage/sign-up",
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
      {
        path: "/manager/courses/:id",
        element: <ManageCourseDetailPage />,
      },
      {
        path: "/manager/courses/:id/create",
        element: <ManageContentCreatePage />,
      },
      {
        path: "/manager/courses/:id/preview",
        element: <ManageCoursePreviewPage />,
      },
      {
        path: "/manager/students",
        element: <ManageStudetnsPage />,
      },
    ],
  },
  {
    path: "/student",
    element: <Layout isAdmin={false} />,
    children: [
      {
        index: true,
        element: <StudentPage />,
      },
      {
        path: "/student/detail/:id",
        element: <ManageCoursePreviewPage />,
      },
    ],
  },
]);
