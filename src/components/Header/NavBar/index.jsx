import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__ul">
                <li><NavLink className="navbar__link" to="/Accueil">Accueil</NavLink></li>
                <li><NavLink className="navbar__link" to="/Profil">Profil</NavLink></li>
                <li><NavLink className="navbar__link" to="/Reglage">Réglage</NavLink></li>
                <li><NavLink className="navbar__link" to="/Communaute">Communauté</NavLink></li>
            </ul>
        </nav>

    )
}
export default Navbar