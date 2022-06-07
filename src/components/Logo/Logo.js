import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 mt0"> 
            <Tilt className="Tilt br2 shadow-2" scale={1.2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px', width: '100px'}}>
                <div>
                    <img alt='logo' src={brain}/>
                </div>
            </Tilt>
      </div>
    );
}

export default Logo;