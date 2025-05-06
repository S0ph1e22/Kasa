import "../styles/Footer.scss";
import logo_footer from "../assets/logo_footer.png";
import logo_footer_mobile from "../assets/logo_footer_mobile.png";

function Footer(){
    return (
        <footer>
            <img src={logo_footer} alt="logo kasa" className="kasa-logo-footer"></img>
            <img src={logo_footer_mobile} alt="logo kasa" className="kasa-logo-footer-mobile"></img>
        </footer>
    )
}

export default Footer