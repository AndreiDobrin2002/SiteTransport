import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo2.png";
import logoScrolled from "../assets/logo.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : "transparent"}`}>
            <Link to="/" onClick={closeMenu}>
                <img
                    src={scrolled ? logoScrolled : logo}
                    alt="Logo Firma"
                    className="logo"
                />
            </Link>

            <button className="burger" onClick={toggleMenu}>
                <div className={`line ${menuOpen ? "open" : ""}`} />
                <div className={`line ${menuOpen ? "open" : ""}`} />
                <div className={`line ${menuOpen ? "open" : ""}`} />
            </button>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><Link to="/" onClick={closeMenu}>Acasă</Link></li>
                <li><Link to="/despre" onClick={closeMenu}>Despre noi</Link></li>
                <li><Link to="/servicii" onClick={closeMenu}>Servicii</Link></li>
                <li><Link to="/galerie" onClick={closeMenu}>Galerie</Link></li>
                <li><Link to="/comanda" onClick={closeMenu}>Comandă</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
