import "../styles/Footer.scss";
import logo from "../assets/logo-footer.png"


function Footer(){
    return (
        <footer className="footer">
            
                <img src={logo} alt='logo kasa' className="kasa-logo-footer" />
                <p>© 2020 Kasa. All rights reserved</p>
            
        </footer>
    )
}


export default Footer