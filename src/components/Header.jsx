import "../styles/Header.scss";
import logo from "../assets/logo.png"

function Header(){
    return(
        <header>
            <img src={logo} alt='logo kasa' className="kasa-logo-header"></img>
            <nav>
                <ul className="nav-list">
                    <li>
                        <a href="/Home">Accueil</a> {/* pour ajouter le lien de navigation vers la page d'accueil*/}
                    </li>
                    <li>
                        <a href={`/contacts/1`}>A Propos</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header