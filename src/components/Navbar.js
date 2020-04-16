import React from 'react';
const Navbar = () => {
    return(
        <div className="header">
            <nav className="nav-wrapper blue">
                <div className="container">
                    <a href="#" className="brand-logo">Musica en Maza</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a>Galeria</a></li>
                        <li><a>Participa</a></li>
                        <li><a>Sobre Nosotros</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;