import React from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as SVGFacebook } from "../assets/static/icons/facebook.svg";
import { ReactComponent as SVGTwitter } from "../assets/static/icons/twitter.svg";
import { ReactComponent as SVGInstagram } from "../assets/static/icons/instagram.svg";
import { ReactComponent as SVGLinkedin } from "../assets/static/icons/linkedin.svg";
import "../assets/styles/components/Footer.scss"

const Footer = () => (
    <footer className="footer">
        <div className="footer__made">
            <Link className="option" to="/">
                <SVGFacebook className="logo" />
            </Link>
            <Link className="option" to="/">
                <SVGTwitter className="logo" />
            </Link>
            <Link className="option" to="/">
                <SVGInstagram className="logo" />
            </Link>
            <Link className="option" to="/">
                <SVGLinkedin className="logo" />
            </Link>
        </div>

    </footer>
)

export default Footer
