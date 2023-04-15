import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar1.css";
import Logo from '../logo.png';
import Rubiks from "../rubiks.png";

export const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    const button = document.querySelector('.sidebar');
    button.classList.toggle('spin');
  };
  return (
    <div>
      <div className="navbar">
      <Link to="/"><img className = "image" src={Logo} alt="Logo"></img></Link>
        <ul className = "Pages">
        <button className="sidebar">
          <img className="image" src={Rubiks} alt="sidebar" onClick={handleMenuToggle}></img>
        </button>
        </ul>
    </div>
    {isMenuOpen && (
    <div className="navbar2">
        <ul className = "Pages2">
          <li>
            <Link to="/aboutme" className="navbar-link">About Me</Link>
          </li>
          <li>
            <Link to="/edu" className="navbar-link">Education</Link>
          </li>
          <li>
            <Link to="/exp" className="navbar-link">Experiences</Link>
          </li>
          <li>
            <Link to="/pjs" className="navbar-link">Projects</Link>
          </li>
          <li>
            <Link to="/tskills" className="navbar-link">Skills</Link>
          </li>
        </ul>
    </div>)}
    </div>
  );
}