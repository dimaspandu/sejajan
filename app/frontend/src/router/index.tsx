import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import CreatePatungan from "../pages/CreatePatungan";
// import PatunganDetail from "../pages/PatunganDetail";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/buat",
        element: <CreatePatungan />,
      },
      // {
      //   path: "/patungan/:id",
      //   element: <PatunganDetail />,
      // },
    ],
  },
]);
