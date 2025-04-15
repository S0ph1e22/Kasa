//layout général, les enfants du routeur y sont injectés automatiquement dans l'outlet, contient tout ce qui est répété sur toutes les pages

import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import App from "../components/App.jsx";
import Banner from "../components/Banner.jsx";

export default function Root() {
    console.log("root est appelée")
    return (
      <>
       <Header />
       <Banner />
       <div id="detail"></div>
       <App />
       <Footer />
      </>
    );
  }
  