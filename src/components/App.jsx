//initialise l'application react et crée un routeur, injecte app dans la balise
//<div id="root"</div> de index.html

import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider, Navigate} from "react-router-dom";
import Root from "../routes/root.jsx";
import Home from '../pages/Home.jsx';
import ErrorPage from "../pages/Error.jsx";
import APropos from "../pages/Apropos.jsx";
import Logements from "../pages/Logements.jsx";
import '../styles/App.scss';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, //layout principal
    errorElement: <ErrorPage/>, //page d'erreur
    children :[
      {
        index:true, 
        element:<Navigate to="/home" replace/> //navigate redirige vers la page home donc app.jsx pour avoir les logements et replace pour eviter de garder la redirection dans l'historique
      },
      {
        path:"home", //page home
        element : <Home />, //composant afficher quand on est sur /home
      },
      {
        path:"APropos", //page a propos
        element : <APropos/>, 
      },
      {
        path :"Logements/:id",
        element : <Logements/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
