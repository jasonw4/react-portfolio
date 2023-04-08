import { React, useState } from 'react';
import Logo from '../logo.png';
import { Navbar1 } from "../components/Navbar1";
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
            <div>
                <Navbar1/>
                <div className = "container">
                    <h1>Hi, I'm</h1>
                    <h1>Jason</h1>
                </div>
            </div>
            )}
        </div>
    )
}