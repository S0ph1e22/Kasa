//initialise l'application react et crée un routeur, injecte app dans la balise
//<div id="root"</div> de index.html
import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider, Navigate} from "react-router-dom";
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
        index:true, //correspond à la route /
        element:<Navigate to="/home" replace/> //navigate redirige vers la page home donc app.jsx pour avoir les logements et replace pour eviter de garder la redirection dans l'historique
      },
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
