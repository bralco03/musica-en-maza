import React from 'react';
import './extrainfo.css';

const Extrainfo = () => {
    return(
        <div className="row center extrainfo valign-wrapper grey lighten-3">
            <div className="col s4">
                <i className="large material-icons blue-text">headset</i>
                <h1>Escucha</h1>
                <h4>A los musicos de mazatlan</h4>
            </div>
            <div className="col s4">
                <i className="large material-icons blue-text">location_on</i>
                <h1>Enterate</h1>
                <h4>En donde estan tocando</h4>
            </div>
            <div className="col s4">
            <i className="large material-icons blue-text">monetization_on</i>
                <h1>Dona</h1>
                <h4>A sus causas</h4>
            </div>
        </div>
    )
}

export default Extrainfo;