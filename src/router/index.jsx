import { ManagerHomePage } from "../pages/manager/home";
import { createBrowserRouter, redirect } from "react-router-dom";
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
import SignUpPage from "../pages/SignUp";
import { MANAGER_SESSION, STORAGE_KEY } from "../utils/const";
import secureLocalStorage from "react-secure-storage";
import { getCategories, getCourses } from "../service/courseService";

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
    id: MANAGER_SESSION,
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY);

      if (!session || session.role !== "manager") {
        throw redirect("/manage/sign-in");
      }

      return session;
    },
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ManagerHomePage />,
      },
      {
        path: "/manager/courses",
        loader: async () => {
          const data = await getCourses();

          console.log(data);

          return data;
        },
        element: <ManageCoursePage />,
      },
      {
        path: "/manager/courses/create",
        loader: async () => {
          const categories = await getCategories();

          return categories;
        },
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
