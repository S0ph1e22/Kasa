//initialise l'application react et crée un routeur, injecte app dans la balise
//<div id="root"</div> de index.html
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "../routes/root.jsx";
import '../styles/index.css'
import App from './App.jsx'

import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children :[
      {
        path:"home",
        element : <App />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
