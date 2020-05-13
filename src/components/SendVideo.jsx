import React from 'react';
import './sendvideo.css';
import musicians from '../images/musicians.jpg';

const SendVideo  = () => {
    return(
        <div className="bg-div">
            
            <div className="  div-form">
                <div>
                    <h1 className="center">Musico</h1>
                    <p className="center">No dudes en mandarnos tus videos. Seran revisados y seleccionados
                        para nuestra pagina. Se te enviara un correo de confirmacion.
                        Asi sabras cuando se suba.
                    </p>
                </div>
                
                <div>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="E-Mail"/>
                    <input type="text" placeholder="Video title"/>
                    <div className="center">
                      <label className="archivoCSS">
                          Subir Video
                        <input type="file" placeholder="Drag video" className="archivo"/>
                      </label>
                    </div>
                    <div className="center">
                      <button>Submit</button>
                    </div>
                </form>
                </div>
            </div>
            <img src={musicians} alt="musicians"/>
        </div>
    )
}

export default SendVideo;