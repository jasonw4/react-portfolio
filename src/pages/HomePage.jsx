import { React, useState } from 'react';
import Logo from '../logo.png';
import "../styles/HomePage.css";

export const HomePage = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }
    return (
        <div className={`home-page ${clicked ? 'button-clicked' : ''}`}>
            <button className="logobutton" onClick={handleClick}>
                <img className = "image" src={Logo} alt="logo"></img>
            </button>
            {clicked && (
            <div className="new-page">
                <h1>Welcome to the new page!</h1>
            </div>
            )}
        </div>
    )
}