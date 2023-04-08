import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar1.css";
export const Navbar1 = () => {
    return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/edu">Education</Link>
                    <Link to="/exp">Experiences</Link>
                    <Link to="/pjs">Projects</Link>
                    <Link to="/tskills">Skills</Link>
                </li>
            </ul>
        </nav>
    </div>
    );
}