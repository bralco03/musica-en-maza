import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return(
        <div className="header">
            <nav className="nav-wrapper teal darken-1">
                <div className="container">
                    <Link to="/" className="brand-logo">Musica en Maza</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/videos">Videos</Link></li>
                        <li><Link to="/galeria">Galeria</Link></li>
                        <li><a>¿Eres musico?</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;