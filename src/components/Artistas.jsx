import React from 'react';
import Malavista from '../images/malavista.jpg';
import Rex from '../images/rexrock.jpg';
import Cryps from '../images/loscryps.png';
import './artistas.css';

const Artistas = () => {
    return(
        <div className="container">
            <div className="divider"></div>
            <h4 className="center artistTitle ">Artistas</h4>
            
                
                <div className="article center">
                    <img src={Malavista} alt="malavista" className="circle responsive-img image"/>
                    <h3>Malavista Social Club</h3>
                    <p className="artistText">Malavista es un grupo de musica tradicional mexicana, excelente para turistas
                        y para gente del puerto.
                    </p>
                </div>
                
                <div className="divider"></div>
                
                <div className="article center">
                    <img src={Rex} alt="rex rock" className="circle responsive-img image"/>
                    <h3>Rex Rock</h3>
                    <p className="artistText">Rex Rock es un grupo con algunos de los integrantes mas talentosos 
                       del puerto en cuanto al genero rock.
                    </p>
                </div>
                
                <div className="divider"></div>
                
                <div className="article center">
                    <img src={Cryps} alt="los cryps" className="circle responsive-img image"/>
                    <h3>Los Cryps</h3>
                    <p className="artistText">Los Cryps son un grupo que te haran mover el eskeleto
                      con su rock n roll sesentero y setentero.
                    </p>
                </div>
                    
                <div className="divider"></div>
        </div>
    )
}


export default Artistas;