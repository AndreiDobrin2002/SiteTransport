import React from "react";
import "./Servicii.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import ServicetCTA from "../components/ServiceCTA";
import Statistici from "../components/Statistici";
import sediuImg from "../assets/serviciu3.jpg";

const serviciiList = [
    {
        icon: "🚛",
        title: "Transport Auto Intern",
        description: "Servicii rapide și sigure pe întreg teritoriul țării.",
        link: "/transport-auto"
    },
    {
        icon: "🌍",
        title: "Transport Internațional",
        description: "Transport auto flexibil, rapid și disponibil oriunde în Europa.",
        link: "/transport-auto"
    },
    {
        icon: "📦",
        title: "Logistică și Depozitare",
        description: "Servicii complete de logistică și depozitare auto.",
        link: "/logistica-depozitare"
    },
    {
        icon: "🤝",
        title: "Intermediere Transport",
        description: "Intermediere transport și tranzacții auto, intern și internațional.",
        link: "/intermedieri-transport"
    },
    {
        icon: "🕒",
        title: "Programări Flexibile",
        description: "Ne adaptăm programului tău pentru a livra la timp.",
    },
    {
        icon: "📞",
        title: "Suport Clienți 24/7",
        description: "Suntem disponibili oricând ai nevoie de noi.",
    },
];

const Servicii = () => {
    return (
        <div className="servicii-container">
            <h1 className="servicii-title">Serviciile Noastre</h1>

            <div className="servicii-grid">
                {serviciiList.map(({icon, title, description, link}, index) => {
                    const CardContent = (
                        <>
                            <div className="serviciu-icon">{icon}</div>
                            <h3 className="serviciu-title">{title}</h3>
                            <p className="serviciu-description">{description}</p>
                            {link && (
                                <span className="serviciu-link">Detalii →</span>
                            )}
                        </>
                    );

                    return link ? (
                        <Link to={link} key={index} className="serviciu-card link-card">
                            {CardContent}
                        </Link>
                    ) : (
                        <div key={index} className="serviciu-card">
                            {CardContent}
                        </div>
                    );
                })}
            </div>
            <ServicetCTA/>
            <div className="serviciu-section">
                <div className="despre-text">
                    <h1>Servicii eficiente</h1>
                    <p>
                        Experienta echipei noastre si colaborarea cu partenerii nostri ne permit sa realizam trasporturi
                        interne sau internationale,
                        de oriunde din Europa, cu timp de incarcare inre 1 si maxim 20 de zile, in functie de locatia de
                        la care trebuie realizat transportul.
                    </p>
                </div>
                <div className="despre-image">
                    <img src={sediuImg} alt="Sediu"/>
                </div>
            </div>
            <Statistici/>
            <FAQ/>
            <Footer/>
        </div>
    );
};

export default Servicii;
