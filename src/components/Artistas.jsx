import React from 'react';
import Malavista from '../images/malavista.jpg';
import Rex from '../images/rexrock.jpg';
import Cryps from '../images/loscryps.png';
import './artistas.css';

const Artistas = () => {
    return(
        <div className="collection with-header">
            <h4>Artistas</h4>
            <ul className="collection-header">
                <li className="collection-item">
                    <div className="article">
                        <img src={Malavista} alt="malavista" className="circle responsive-img image"/>
                        <h3>Malavista Social Club</h3>
                        <p>Malavista es un grupo de musica tradicional mexicana, excelente para turistas
                            y para gente del puerto.
                        </p>
                    </div>
                </li>
                <li className="collection-item circle responsive-img image">
                    <div className="article ">
                    <img src={Rex} alt="rex rock"/>
                        <h3>Rex Rock</h3>
                        <p>Malavista es un grupo de musica tradicional mexicana, excelente para turistas
                            y para gente del puerto.
                        </p>
                    </div>
                </li>
                <li className="collection-item circle responsive-img image">
                    <div className="article">
                    <img src={Cryps} alt="los cryps"/>
                        <h3>Los Cryps</h3>
                        <p>Malavista es un grupo de musica tradicional mexicana, excelente para turistas
                            y para gente del puerto.
                        </p>
                    </div>
                </li>    
            </ul>
        </div>
    )
}


export default Artistas;