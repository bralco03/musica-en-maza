import React from 'react';
const Navbar = () => {
    return(
        <div className="header">
            <nav className="nav-wrapper blue">
                <div className="container">
                    <a href="#" className="brand-logo">PLACEHOLDER</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a>Nuevo</a></li>
                        <li><a>Galeria</a></li>
                        <li><a>Sobre Nosotros</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;