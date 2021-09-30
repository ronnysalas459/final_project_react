import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SVGFacebook } from "../assets/static/icons/facebook.svg";
import { ReactComponent as SVGTwitter } from "../assets/static/icons/twitter.svg";
import { ReactComponent as SVGInstagram } from "../assets/static/icons/instagram.svg";
import { ReactComponent as SVGLinkedin } from "../assets/static/icons/linkedin.svg";
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
        <SVGFacebook className="logo" />
      </a>
      <a
        className="option"
        href="https://twitter.com/RonnySalas"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SVGTwitter className="logo" />
      </a>
      <a
        className="option"
        href="https://www.facebook.com/ronny.salas.7"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SVGInstagram className="logo" />
      </a>
      <a
        className="option"
        href="https://www.facebook.com/ronny.salas.7"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SVGLinkedin className="logo" />
      </a>
    </div>
  </footer>
);

export default Footer;
