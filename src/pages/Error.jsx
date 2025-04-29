import "../styles/Error.scss"
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

function ErrorPage(){
  return (
    <>
        <Header />
        <div id="error-page">
            <h1> 404 </h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/home" class="lien-retour-accueil">Retourner sur la page d’accueil</a>
        </div>
        <Footer />
    </>
    );
}

export default ErrorPage