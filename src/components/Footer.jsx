import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <footer className="page-footer teal darken-1">
            <div className="container">
                <div className="row footerContent">
                    <div className="col s6">
                    <h4>Musica en Maza Co.</h4>
                    <p>En agradecimiento a todos los artistas.</p>
                    </div>
                
                    <div className="col s6">
                    <h4>Sigue la causa</h4>
                    <ul>
                        <li> <a href="#!">Faceboook</a> </li>
                        <li> <a href="#!">Instagram</a> </li>
                        <li> <a href="#!">youtube</a> </li>
                    </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;