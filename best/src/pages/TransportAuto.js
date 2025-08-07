import React from "react";
import "./Despre.css";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import ServicetCTA from "../components/ServiceCTA";

const TransportAuto = () => {
    return (
        <div className="despre-container">
            <h1 className="despre-title">Transport auto</h1>
            <div className="livrare-section">
                <h2 className="livrare-title">Zone de Tranzit și Livrare</h2>
                <div className="livrare-grid">
                    <div className="livrare-col">
                        <h3>Tranzităm țări precum</h3>
                        <ul>
                            <li>Olanda</li>
                            <li>Belgia</li>
                            <li>Germania</li>
                            <li>Austria</li>
                            <li>Ungaria</li>
                            <li>Cehia</li>
                            <li>Slovacia</li>
                            <li>Polonia</li>
                            <li>Franța</li>
                            <li>Italia</li>
                        </ul>
                    </div>

                    <div className="livrare-col">
                        <h3>Orașe în care livrăm</h3>
                        <ul>
                            <li>ARAD</li>
                            <li>TIMIȘOARA</li>
                            <li>DEVA</li>
                            <li>SIBIU</li>
                            <li>BRAȘOV</li>
                            <li>TÂRGU-SECUIESC</li>
                            <li>FOCȘANI</li>
                            <li>TECUCI</li>
                            <li>GALAȚI</li>
                            <li>BACĂU</li>
                            <li>BUCUREȘTI</li>
                            <li>PLOIEȘTI</li>
                            <li>PITEȘTI</li>
                            <li>TÂRGOVIȘTE</li>
                        </ul>
                    </div>
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

export default TransportAuto;
