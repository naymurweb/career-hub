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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element:<Blog/>
      },{
        path:'/statistics',
        element:<Statistics/>
      },
      {
        path:'/appliedjobs',
        element:<AppliedJobs/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
