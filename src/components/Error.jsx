import { useRouteError } from "react-router-dom";
import "../styles/Error.scss"
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
        <Header />
        <Banner/>
        <div id="error-page">
            <h1> 404 </h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/home" class="lien-retour_accueil">Retourner sur la page d’accueil</a>
        </div>
        <Footer />
    </>
    );
}
