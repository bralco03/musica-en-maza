import React, { useEffect} from 'react';
import M from 'materialize-css';
import banner from '../images/banner.jpg';
const Home = () => {
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
                    <div className="section white">
                        <h3>Musica en Mazatlan</h3>
                        <p className="clear">Presumamos el talento mazatleco</p>
                    </div>
                </div>
                
            </div>
        )
    
}

export default Home;