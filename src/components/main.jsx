//créer un routeur
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "../routes/root.jsx";
import '../styles/index.css'
//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import App from './components/App.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
