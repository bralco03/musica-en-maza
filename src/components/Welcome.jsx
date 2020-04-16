import React from 'react';
import './welcome.css';

const Welcome = () => {
   return(
       <div className="welcome valign-wrapper">
           <div className="welcome-text">
                <h4>Bienvenido</h4>
                <p className="flow-text">
                    "La música es la mediadora entre el mundo 
                espiritual y el de los sentidos"</p>
                <div className="arrow center-align">
                    <i className="large material-icons"><a href="#">arrow_drop_down</a></i>
                </div>
           </div>
       </div>
   )
}


export default Welcome;