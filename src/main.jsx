import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Home from "./components/Layout/Home.jsx";
import Orders from "./components/Orders/Orders.jsx";
import Inventiry from "./components/Inventory/Inventiry.jsx";
import Login from "./components/Login/Login.jsx";
import cartProductsLoader from "./loaders/cartProductsLoader.js";
import CheckOut from "./components/CheckOut/CheckOut.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "inventory",
        element: <Inventiry></Inventiry>,
      },
      {
        path: "checkout",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
