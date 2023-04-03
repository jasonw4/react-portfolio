import { React, useState } from 'react';
import Logo from '../logo.png';

export const HomePage = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }
    return (
        <div className={`home-page ${clicked ? 'button-clicked' : ''}`}>
            <button className="logobutton" onClick={handleClick}>
                <img src={Logo} alt="logo"></img>
            </button>
        </div>
    )
}