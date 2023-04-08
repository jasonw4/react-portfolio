import { React, useState } from 'react';
import Logo from '../logo.png';
import { Navbar1 } from "../components/Navbar1";
import { Link } from 'react-router-dom';
import "../styles/HomePage.css";

export const HomePage = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }
    return (
        <div className={`home-page ${clicked ? 'button-clicked' : ''}`}>
            <button className="logobutton" onClick={handleClick}>
            {clicked ? (
                        <Link to="/"><img className="image" src={Logo} alt="logo"/></Link>
                    ) : (
                        <img className="image" src={Logo} alt="logo" />
                    )}
            </button>
            {clicked && (
            <div className={`navbar-wrapper ${clicked ? 'navbar-expanded' : ''}`}>
                <Navbar1/>
            </div>
            )}
        </div>
    )
}