import React from 'react'
import "../assets/styles/components/Footer.scss"

const Footer = () => (
    <footer className="footer">
        <div className="footer__made">
            Made with
            {" "}
            <span role ="img" aria-label ="heart">
                corazon
            </span>
            by
            <a
                href="https://www.linkedin.com/in/ronny-salas-2525ab13a/"
                rel="noopener noreferrer"
                target="_blank"
                className = "logo"
            >
                <span className="logo-img"></span>
                {" "}
                <span>Ronny Salas</span>
            </a>
            Ronny Salas
        </div>

    </footer>
)

export default Footer
