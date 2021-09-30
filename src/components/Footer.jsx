import React from "react";
import logoFacebook from "../assets/static/icons/facebook.png";
import logoTwitter  from "../assets/static/icons/twitter.png";
import logoInstagram  from "../assets/static/icons/instagram.png";
import logoLinkedin  from "../assets/static/icons/linkedin.png";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__made">
      <a
        className="option"
        href="https://www.facebook.com/ronny.salas.7"
        rel="noopener noreferrer"
        target="_blank"
      >
         <img src={logoFacebook} alt="logo" width="45" height="45"></img>
      </a>
      <a
        className="option"
        href="https://twitter.com/RonnySalas"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={logoTwitter} alt="logo" width="45" height="45"></img>
      </a>
      <a
        className="option"
        href="https://www.instagram.com/rsalas459/?hl=es"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={logoInstagram} alt="logo" width="45" height="45"></img>
      </a>
      <a
        className="option"
        href="https://www.linkedin.com/in/ronny-salas-2525ab13a"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={logoLinkedin} alt="logo" width="45" height="45"></img>
      </a>
    </div>
  </footer>
);

export default Footer;
