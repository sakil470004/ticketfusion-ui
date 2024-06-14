import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

import LoadingSpinner from "../components/LoadingSpinner";
import Registration from "../pages/Registration/Registration";
import AllEvent from "../pages/AllEvnets/AllEvent";
import EventDetails from "../pages/EventDetails/EventDetails";
import PrivateRoute from "./private/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../pages/DashboardHome/DashboardHome";
import DashboardAllEvent from "../pages/DashboardAllEvent/DashbaordAllEvent";
import AddEvent from "../pages/DashbaordAddEvent/AddEvent";
import EditEvent from "../pages/DashboardEditEvent/EditEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loadingElement: <LoadingSpinner />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      { path: "/register", element: <Registration /> },
      {path: "/events", element: <AllEvent />},
      {path: "/events/:id", element: <EventDetails />},
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    loadingElement: <LoadingSpinner />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <DashboardHome />,
          </PrivateRoute>
        ),
      },
      {
        path: "events",
        element: (
          <PrivateRoute>
            <DashboardAllEvent />,
          </PrivateRoute>
        ),
      },
      {
        path: "add-event",
        element: (
          <PrivateRoute>
            <AddEvent />,
          </PrivateRoute>
        ),
      },
      {
        path: "edit-event/:id",
        element: (
          <PrivateRoute>
            <EditEvent />,
          </PrivateRoute>
        ),
      },
     

      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
