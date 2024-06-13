import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

import LoadingSpinner from "../components/LoadingSpinner";
import Registration from "../pages/Registration/Registration";
import AllEvent from "../pages/AllEvnets/AllEvent";
import EventDetails from "../pages/EventDetails/EventDetails";

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
]);
