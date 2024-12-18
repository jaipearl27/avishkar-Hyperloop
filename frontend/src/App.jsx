import React from "react";

import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";
import Pods from "./pages/Pod/Pods";
import Research from "./pages/Research/research";
import Media from "./pages/Media/media";
import Infrastructure from "./pages/Infrastructure/infrastructure";
import TicketCalculator from "./pages/TicketCalculator/ticket_calculator";
import Partner from "./pages/Partner/partner";
import Team from "./pages/Teams/team";
import Blogs from "./pages/Blogs/blogs";

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
          path: "/infrastructure",
          element: <Infrastructure />,
        },
        {
          path: "/pods",
          element: <Pods />,
        },
        {
          path: "/research",
          element: <Research />,
        },
        {
          path: "/media",
          element: <Media />,
        },
        {
          path: "/contactUs",
          element: <ContactUs />,
        },
        {
          path: "/ticketCalculator",
          element: <TicketCalculator />,
        },
        {
          path: "/partner",
          element: <Partner />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/team",
          element: <Team />,
        }
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
