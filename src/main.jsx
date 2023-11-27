import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import Error from "./components/Error/Error.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
import Registion from "./components/Registion/Registion.jsx";
import Login from "./components/Login/Login.jsx";
import AuthContext from "./context/AuthContext.jsx";
import PrivateRouter from "./PrivateRoute/PrivateRouter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <PrivateRouter><Blog /></PrivateRouter>,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/appliedjobs",
        element: <PrivateRouter><AppliedJobs /></PrivateRouter>,
        loader: () => fetch("../public/jobs.json"),
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("../public/jobs.json"),
      },
      {
        path: "/registion",
        element: <Registion />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>
);
