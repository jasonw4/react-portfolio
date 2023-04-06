import { React, useState } from 'react';
import Logo from '../logo.png';
import "../styles/HomePage.css";
import { Button } from '../components/button';

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
            <div>
                <div className="new-page">
                    <Button name = "About Me"/>
                </div>
                <div className = "container">
                    <h1>Hi, I'm</h1>
                    <h1>Jason</h1>
                </div>
            </div>
            )}
        </div>
    )
}