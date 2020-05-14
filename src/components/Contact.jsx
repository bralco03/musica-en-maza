import React from 'react';
import './contact.css';
import musicians from '../images/musicians.jpg';

const Contact = () => {
    return(
        <div className="contenedorContacto">
            <div className="textContacto">
             <h1>Escribenos...</h1>
             <h6>Mandanos mensaje a al correo example@outlook.com</h6>
           </div>
           <img src={musicians} alt="background"/>
        </div>
    )
}

export default Contact;