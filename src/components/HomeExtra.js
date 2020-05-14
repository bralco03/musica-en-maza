import React, { useEffect} from 'react';
import M from 'materialize-css';
import banner from '../images/banner.jpg';
import './homeExtra.css';

const HomeExtra = () => {
    console.log(M);
    useEffect(() => {
        let elements = document.querySelectorAll('.parallax');
        M.Parallax.init(elements);
    }, []);

        return(
            <div className="col s-12">
                <div className="parallax-container center">
                    <div className="parallax">
                        <img src={banner} alt="banner"/>   
                    </div>
                </div>
                <h2 className="center">El Proyecto</h2>
                    <p className="flow-text center proyectoTexto">Musica en Maza es un proyecto pensado por musicos para musicos, donde la idea es 
                       que la musica de la ciudad se conecte a traves de la musica. En esta pagina podran
                       consultar con sus grupos favoritos del puerto, ver noticias y videos recientes de ellos,
                       y si quieren donar a su causa, poder hacerlo.
                    </p>
            </div>
        )
    
}

export default HomeExtra;