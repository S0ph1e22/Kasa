import "../styles/Header.scss";
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <header>
            <img src={logo} alt='logo kasa' className="kasa-logo-header"></img>
            <nav>
                <ul className="nav-list">
                    <li>
                        <NavLink to="/home" className="nav-link"> Accueil </NavLink>
                    </li>
                    <li>
                    <NavLink to="/contacts/1" className="nav-link"> A Propos </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header