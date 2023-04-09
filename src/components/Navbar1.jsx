import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar1.css";
import Logo from '../logo.png';

export const Navbar1 = () => {
  return (
    <div className="navbar">
      <Link to="/"><img className = "image" src={Logo} alt="Logo"></img></Link>
        <ul className = "Pages">
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
    </div>
  );
}