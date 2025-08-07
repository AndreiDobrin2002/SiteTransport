import React from "react";
import "./Despre.css";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import ServicetCTA from "../components/ServiceCTA";
import sediuImg from "../assets/serviciu2.jpg";

const Logistica = () => {
    return (
        <div className="despre-container">
            <h1 className="despre-title">Logistică și depozitare auto</h1>
            <div className="despre-section">
                <div className="intermediere-text">
                    <p>
                        Societatea noastră nu oferă doar servicii de transport auto, ci și un <strong>pachet complet de soluții logistice și de
                        depozitare</strong>, adaptate nevoilor clienților care doresc un proces simplificat, sigur și rapid în gestionarea autoturismelor.
                    </p>
                    <p>
                        Indiferent dacă aveți nevoie de spațiu temporar de depozitare înainte de livrare sau de gestionarea transportului pentru
                        mai multe unități, suntem pregătiți să vă oferim sprijinul necesar în fiecare etapă.
                    </p>
                    <p>
                        Prin colaborarea cu experți și parteneri logistici din întreaga Europă, garantăm un serviciu complet,
                        de la preluarea autoturismului până la livrarea acestuia în condiții optime, cu suport permanent și consiliere personalizată.
                        Obiectivul nostru este simplu: <strong>satisfacția completă a clienților</strong> prin servicii
                        de înaltă calitate, livrate cu promptitudine și profesionalism.
                    </p>
                </div>

                <div className="intermediere-image">
                    <img src={sediuImg} alt="Sediu"/>
                </div>
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
            <Footer/>
        </div>
    );
};

export default Logistica;
