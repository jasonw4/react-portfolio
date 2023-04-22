import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/pages/ContactMe.css";
import IG from "../images/insta.gif";
import GH from "../images/github.png";
import LK from "../images/linkedin.png";
import EM from "../images/gmail.png";

export const ContactMe = () => {
  return (
    <div className="contactme">
      <div className="wrapper">
        <h1 className="content">Let's Connect!</h1>
        <div className="contactlinks">
          <Link to="https://www.instagram.com/jason.wang00/" target="_blank" rel="noopener noreferrer">
            <img className="contactlink" src={IG} alt="Instagram" />
          </Link>
          <Link to="https://github.com/jasonw4" target="_blank" rel="noopener noreferrer">
            <img className="contactlink" src={GH} alt="Github" />
          </Link>
          <Link to="https://www.linkedin.com/in/jason-wang-b9335620b/" target="_blank" rel="noopener noreferrer">
            <img className="contactlink" src={LK} alt="LinkedIn" />
          </Link>
          <a href="mailto: jasonwang7374@gmail.com">
            <img className="contactlink" src={EM} alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
};