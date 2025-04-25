import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";

import Bookings from "../Pages/Bookings ";
import CardDetails from "../Components/CardDetails/CardDetails";
import { Suspense } from "react";
import Blog from "../Pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        hydrateFallbackElement: (
          <div className="text-center text-2xl font-bold ">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
        loader: () => fetch("/doctorsData.json"),
        // Component:Home,
        element: (
          <Suspense fallback={<h1>Data is loading ..............</h1>}>
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/blogs",
        loader: () => fetch("/blog.json"),
        hydrateFallbackElement: (
          <div className="text-center text-2xl font-bold ">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
        ErrorBoundary: Error,
        Component: Blog,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/doctorsData.json"),
        ErrorBoundary: Error,
        //  throw new response error
        Component: CardDetails,
      },
      {
        path: "/bookings",
        loader: () => fetch("/doctorsData.json"),
        hydrateFallbackElement: (
          <div className="text-center text-2xl font-bold ">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
        ErrorBoundary: Error,
        Component: Bookings,
      },
      {
        path: "*",
        hydrateFallbackElement: (
          <h1 className="text-center text-2xl font-bold ">
            Data Loading...........
          </h1>
        ),
        Component: Error,
      },
    ],
  },
]);

export { router };
