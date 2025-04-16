//layout général, contient tout ce qui est répété sur toutes les pages

import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import { Outlet } from "react-router-dom";

export default function Root() {
    console.log("root est appelée")
    return (
      <>
       <Header /> {/*en-tête */}
       <Banner /> {/*bannière */}
       <Outlet /> {/*app y est injecté */}
       <Footer /> {/*pied de page */}
      </>
    );
  }
  