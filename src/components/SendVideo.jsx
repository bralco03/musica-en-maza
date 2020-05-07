import React from 'react';
import './sendvideo.css';
import musicians from '../images/musicians.jpg';

const SendVideo  = () => {
    return(
        <div className="bg-div">
            
            <div className="  div-form">
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="E-Mail"/>
                    <input type="text" placeholder="Video title"/>
                    <input type="file" placeholder="Drag video"/>
                    <button>Submit</button>
                </form>
            </div>
            <img src={musicians} alt="musicians"/>
        </div>
    )
}

export default SendVideo;