//layout général, contient tout ce qui est répété sur toutes les pages

import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { Outlet } from "react-router-dom";

export default function Root() {
 
    return (
      <>
       <Header /> {/*en-tête */}
       <Outlet /> {/*affiche le bon contenu selon l'url, donc contient app et apropos et error*/}
       <Footer /> {/*pied de page */}
      </>
    );
  }
  