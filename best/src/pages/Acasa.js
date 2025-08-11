import { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

import icon1 from "../assets/iconTruck.png";
import icon2 from "../assets/iconPeople.png";
import icon3 from "../assets/warehouse.png";

import firmaImage from "../assets/firma.jpg"; // imaginea despre firmă
import "./Acasa.css";
import Statistici from "../components/Statistici";
import Servicii from "../components/Servicii";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import ServicetCTA from "../components/ServiceCTA";

const images = [img1, img2, img3];

const navItems = [
    { icon: icon1, label: "TRANSPORT AUTO" },
    { icon: icon2, label: "INTERMEDIERI TRANSPORT" },
    { icon: icon3, label: "LOGISTICA SI DEPOZITARE" },
];

export default function Acasa() {
    const [currentImage, setCurrentImage] = useState(0);

    // funcție pentru schimbarea imaginii cu resetarea intervalului
    const handleImageChange = (index) => {
        setCurrentImage(index);
    };

    // Auto-play la fiecare 5 secunde
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImage]); // 👈 acum se resetează când se schimbă imaginea

    return (
        <>
            <div className="acasa-container">
                <div
                    className="image-display"
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                />
                <div className="bottom-navbar">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            className={`nav-button ${currentImage === index ? "active" : ""}`}
                            onClick={() => handleImageChange(index)}
                        >
                            <img src={item.icon} alt={item.label} className="new-icon-style"/>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="firma-container">
                <div className="firma-text">
                    <h2>Despre firma noastră</h2>
                    <p>
                        Suntem o companie specializată în transport auto intern și internațional,
                        oferind servicii rapide și sigure. Cu o flotă modernă și echipă dedicată,
                        asigurăm livrarea eficientă a vehiculelor în cele mai bune condiții.
                    </p>
                    <p>
                        De asemenea, oferim servicii de intermediere transport, logistică și depozitare. Ne mândrim cu profesionalismul și experiența noastră în
                        domeniu, având ca obiectiv principal satisfacția clienților noștri.
                        Colaborăm cu parteneri de încredere și folosim cele mai bune practici pentru a
                        asigura un serviciu de calitate superioară.
                    </p>
                    <p>
                        Contactați-ne pentru a afla mai multe despre serviciile noastre și cum vă putem
                        ajuta în nevoile dumneavoastră de transport și logistică.
                    </p>
                    <p>
                        La sfârșitul  anului 2019 am contabilizat un număr de 6453 autovehicule transportate.
                        Tratam cu atenție fiecare comanda, căutând soluțiile cele mai rapide și eficiente
                        pentru fiecare client.
                    </p>
                </div>
                <div className="firma-imagine">
                    <img src={firmaImage} alt="Despre firma" />
                </div>
            </div>
            <Statistici />
            <Servicii />
            <FAQ />
            <ServicetCTA />
            <MapSection />
            <Footer />
        </>
    );
}
