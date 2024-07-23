import React from "react";

import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/*",
          element: <NotFound />,
        },
      ],
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
