import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import GadgetsCards from "../Components/GadgetsCards";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../Components/ErrorPage";
import Support from "../Pages/Support";

const routes = createBrowserRouter([
  {  
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <GadgetsCards></GadgetsCards>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <GadgetsCards></GadgetsCards>,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/gadget/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../gadgets.json"),
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
    ],
  },
]);

export default routes;
