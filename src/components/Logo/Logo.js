import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './icons8-brain-50.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 50 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3">
                    <img src={brain} alt="logo"/> 
                </div>
            </Tilt>
        </div>
    ); //eof return
} //eof const Loco

export default Logo;