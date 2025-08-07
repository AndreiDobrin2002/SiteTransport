import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCTA.css";

const ServiceCTA = () => {
    return (
        <div className="service-cta">
            <p className="service-cta-text">Vrei mai multe detalii despre serviciile noastre?</p>
            <Link to="/contact" className="service-cta-button">
                <span>CONTACTEAZĂ-NE</span>
                <span className="arrow">→</span>
            </Link>
        </div>
    );
};

export default ServiceCTA;
