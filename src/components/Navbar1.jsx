import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar1.css";
import Logo from '../logo.png';

export const Navbar1 = () => {
  return (
    <div className="navbar">
        <ul className = "Pages">
          <li>
            <Link to="/"><img className = "image" src={Logo} alt="Logo"></img></Link>
            <Link to="/aboutme" className="navbar-link">About Me</Link>
            <Link to="/edu" className="navbar-link">Education</Link>
            <Link to="/exp" className="navbar-link">Experiences</Link>
            <Link to="/pjs" className="navbar-link">Projects</Link>
            <Link to="/tskills" className="navbar-link">Skills</Link>
          </li>
        </ul>
    </div>
  );
}