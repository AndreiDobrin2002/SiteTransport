import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/" onClick={closeMenu}>
                <img
                    src={scrolled ? logoScrolled : logo}
                    alt="Logo Firma"
                    className="logo"
                />
            </NavLink>

            <button className="burger" onClick={toggleMenu}>
                <div className={`line ${menuOpen ? "open" : ""}`} />
                <div className={`line ${menuOpen ? "open" : ""}`} />
                <div className={`line ${menuOpen ? "open" : ""}`} />
            </button>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><NavLink to="/" onClick={closeMenu}>Acasă</NavLink></li>
                <li><NavLink to="/despre" onClick={closeMenu}>Despre noi</NavLink></li>
                <li className="dropdown">
                    <NavLink to="/servicii" onClick={closeMenu}>Servicii</NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/transport-auto" onClick={closeMenu}>Transport auto</NavLink></li>
                        <li><NavLink to="/logistica-depozitare" onClick={closeMenu}>Logistică și Depozitare</NavLink></li>
                        <li><NavLink to="/intermedieri-transport" onClick={closeMenu}>Intermediere Transport</NavLink></li>
                    </ul>
                </li>

                <li><NavLink to="/galerie" onClick={closeMenu}>Galerie</NavLink></li>
                <li><NavLink to="/comanda" onClick={closeMenu}>Comandă</NavLink></li>
                <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
