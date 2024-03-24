import logo from "../img/logos/logo_aix.png";
import sponsor from "../img/sponsors/virtue.png";
import adImg from "../img/illustrations/stade-1.jpg";
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Header() {
    const [menus, setMenus] = useState({
        "À la une": [
            { title: "À la une", links: [{ text: "Actualités", to: "/" }, { text: "Agenda", to: "/" }] }
        ],
        "Équipes": [
            { title: "Équipe Première", links: [{ text: "Effectif", to: "/" }, { text: "Calendrier", to: "/" }, { text: "Classements", to: "/" }] },
            { title: "Jeunes", links: [{ text: "Réserve", to: "/" }, { text: "U-19", to: "/" }] }
        ],
        "Aix FC": [
            { title: "Le Club", links: [{ text: "Histoire", to: "/" }, { text: "Présidents", to: "/" }, { text: "Entraîneurs", to: "/" }, { text: "Hall of Fame", to: "/" }, { text: "Palmarès", to: "/" }] },
            { title: "Le Stade", links: [{ text: "Présentation", to: "/" }, { text: "Stadium Tour", to: "/" }, { text: "Se rendre au stade", to: "/" }] }
        ],
        "Académie": [
            { title: "Notre ADN", links: [{ text: "Présentation", to: "/" }, { text: "Joueurs Formés", to: "/" }] },
            { title: "Les équipes", links: [{ text: "Réserve", to: "/" }, { text: "U-19", to: "/" }] }
        ],
        "Fans": [
            { title: "Espace Supporters", links: [{ text: "Les groupes", to: "/" }, { text: "Se retrouver", to: "/" }, { text: "Fan-Zones", to: "/" }] },
            { title: "Services", links: [{ text: "Boutiques", to: "/" }, { text: "Abonnements", to: "/" }, { text: "Séances de dédicaces", to: "/" }, { text: "Téléchargements", to: "/" }] }
        ],
    });
    const [selectedMenu, setSelectedMenu] = useState(null);
    const headerRef = useRef(null);

    const handleMenuClick = (menuName) => {
        setSelectedMenu(menuName);
    };

    const closeMenu = () => {
        setSelectedMenu(null);
    };

    return (
        <header>
            <div className="topbar">
                <nav className="topbar_left">
                    <ul>
                        <li><Link to="/"><i className="fa-regular fa-handshake"></i>Fondation Aix FC</Link></li>
                        <li><Link to="/boutique"><i className="fa-solid fa-shirt"></i>Boutique</Link></li>
                        <li><Link to="/billetterie"><i className="fa-solid fa-ticket"></i>Billetterie</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="navbar">
                <nav className="navbar_left">
                    <ul>
                        <li><Link className="navbar_logo" to="/"><img src={logo} alt="Logo Aix FC" /></Link></li>
                        {/* Générez les éléments de la navbar en fonction des clés du menu */}
                        {Object.keys(menus).map((menuName, index) => (
                            <li key={index} onClick={() => handleMenuClick(menuName)}>{menuName}</li>
                        ))}
                    </ul>
                </nav>
                <div className="navbar_right">
                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                    <img src={sponsor} alt="Partenaire Premium" />
                </div>
            </div>
            {selectedMenu && (
                <div className="dropdown-menu">
                    <div className="inner">
                        <div className="dropdown-left">
                            {/* Affichez les sous-menus pour le menu sélectionné */}
                            {menus[selectedMenu].map((submenu, index) => (
                                <div className="subMenu" key={index}>
                                    <h3>{submenu.title}</h3>
                                    <ul>
                                        {/* Générez les liens pour chaque sous-menu */}
                                        {submenu.links.map((link, subIndex) => (
                                            <li key={subIndex}><Link to={link.to}>{link.text}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="dropdown-right">
                            <div className="dropdown-ads">
                                <Link><img src={adImg} /></Link>
                                <Link><img src={adImg} /></Link>
                            </div>
                            <i className="closeButton fa-solid fa-x" onClick={closeMenu}></i>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;