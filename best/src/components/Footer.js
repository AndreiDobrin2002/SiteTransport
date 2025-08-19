import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                {/* Coloana 1 - Logo și descriere */}
                <div className="footer-column">
                    <img src={logo} alt="Logo DejTrans" className="footer-logo"/>
                    <p className="footer-description">
                        Best Ride Express este o companie cu peste 8 ani de experiență în transport auto și logistică.
                        Oferim servicii de calitate în România și la nivel internațional.
                    </p>
                </div>

                {/* Coloana 2 - Harta site-ului */}
                <div className="footer-column">
                    <h4>Harta site-ului</h4>
                    <ul className="footer-links">
                        <li><a href="/">Acasă</a></li>
                        <li><a href="/despre">Despre</a></li>
                        <li><a href="/servicii">Servicii</a></li>
                        <li><a href="/galerie">Galerie</a></li>
                        <li><a href="/comanda">Comandă</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Coloana 3 - Contact */}
                <div className="footer-column">
                    <h4>Contact</h4>
                    <p>📍 Bulevardul Unirii 20,<br/>Focșani 620172, România</p>
                    <p>📞 <a href="tel:+40737553140">+40 737 553 140</a></p>
                    <p>✉️ <a href="mailto:bestrideexpress2017@gmail.com">bestrideexpress2017@gmail.com</a></p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Best Ride Express. Toate drepturile rezervate.</p>
                <div className="social-icons">
                    <a
                        href="https://www.facebook.com/profile.php?id=100064175078737&locale=ro_RO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook-icon"
                        aria-label="Facebook"
                    >
                        <FaFacebookF/>
                    </a>
                    <a
                        href="https://wa.me/40737553140"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-icon"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp/>
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
