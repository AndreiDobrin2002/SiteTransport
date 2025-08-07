import React from "react";
import "./Despre.css";
import sediuImg from "../assets/serviciu3.jpg"; // imaginea sediului (poți schimba)
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import ServicetCTA from "../components/ServiceCTA";
import MapSection from "../components/MapSection";
import Servicii from "../components/Servicii";

const Despre = () => {
    return (
        <div className="despre-container">
            <h1 className="despre-title">Despre Noi</h1>
            <div className="despre-section">
                <div className="despre-text">
                    <p>
                        Suntem o companie specializată în <strong>transport auto intern și internațional</strong>,
                        oferind servicii rapide, sigure și profesioniste. Cu o flotă modernă și o echipă dedicată,
                        asigurăm livrarea eficientă a vehiculelor în cele mai bune condiții.
                    </p>
                    <p>
                        Pe lângă transportul propriu-zis, oferim și <strong>servicii de intermediere transport,
                        logistică și depozitare</strong>. Ne mândrim cu o abordare orientată către client, în care
                        nevoile tale devin prioritatea noastră. Punem accent pe comunicare, transparență și
                        adaptabilitate.
                    </p>
                    <p>
                        <strong>La sfârșitul anului 2019</strong>, am contabilizat un număr impresionant de <strong>6.453
                        autovehicule transportate</strong>. Fiecare comandă este tratată cu atenție, iar soluțiile
                        propuse sunt mereu gândite pentru a fi <em>rapide, sigure și eficiente</em>.
                    </p>
                    <p>
                        Colaborăm exclusiv cu parteneri de încredere și aplicăm cele mai bune practici din domeniul
                        transportului și logisticii. Obiectivul nostru este simplu: <strong>satisfacția completă a
                        clienților</strong> prin servicii de înaltă calitate, livrate cu promptitudine și
                        profesionalism.
                    </p>
                    <p>
                        Contactați-ne pentru a afla cum vă putem ajuta în nevoile dumneavoastră de transport și
                        logistică. Suntem aici pentru a găsi cea mai bună soluție pentru fiecare client!
                    </p>
                </div>

                <div className="despre-image">
                    <img src={sediuImg} alt="Sediu"/>
                </div>
            </div>
            <Servicii/>
            <div className="despre-valori">
                <h2>Valorile Noastre</h2>
                <ul>
                    <li>✔️ Profesionalism și seriozitate</li>
                    <li>✔️ Respect față de client</li>
                    <li>✔️ Transparență și comunicare</li>
                    <li>✔️ Flexibilitate și eficiență</li>
                </ul>
            </div>

            <div className="despre-valori">
                <h2>Avantajele colaborării cu noi</h2>
                <ul>
                    <li>✔️ Comenzi intre 1 si 9 unitati</li>
                    <li>✔️ Termene de incarcare intre 1 si 20 de zile</li>
                    <li>✔️ Disponibilitate oriunde in Europa</li>
                    <li>✔️ Preste 50 de subcontractori internationali</li>
                </ul>
            </div>

            <div className="despre-contact">
                <h2>Contactează-ne</h2>
                <div className="despre-contact-text">
                    <p>
                        Pentru mai multe informații sau pentru a solicita o ofertă personalizată,
                        nu ezita să ne contactezi la numărul de telefon sau adresa de email afișate pe site.
                    </p>

                    <p>
                        Suntem aici să te ajutăm cu orice întrebări sau nevoi legate de transportul auto.
                    </p>


                    <p>
                        Ne angajăm să răspundem prompt și să oferim soluții adaptate nevoilor tale.
                    </p>
                </div>
            </div>
            <FAQ/>
            <ServicetCTA/>
            <MapSection/>
            <Footer/>
        </div>
    );
};

export default Despre;
