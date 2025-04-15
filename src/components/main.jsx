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
    element: <Root />, //layout principal
    children :[
      {
        path:"home", //route enfant
        element : <App />, //composant afficher quand on est sur /home
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
