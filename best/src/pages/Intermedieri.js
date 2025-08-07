import React from "react";
import "./Despre.css";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import ServicetCTA from "../components/ServiceCTA";
import sediuImg from "../assets/img23.jpg";

const Intermedieri = () => {
    return (
        <div className="despre-container">
            <h1 className="despre-title">Intermedieri transport auto</h1>
            <div className="despre-section">
                <div className="intermediere-text">
                    <p>
                        Societatea noastră vă pune la dispoziție <strong>servicii complete de intermediere a transportului și a tranzacțiilor auto</strong>,
                        atât la nivel național, cât și internațional. Indiferent dacă doriți să transportați un autoturism dintr-un oraș din
                        România sau din orice alt colț al Europei, echipa noastră se ocupă de toate aspectele logistice și administrative pentru
                        ca dumneavoastră să beneficiați de <strong>un proces simplu, sigur și eficient.</strong>
                    </p>
                    <p>
                        Avem o rețea extinsă de parteneri în domeniul transportului auto, ceea ce ne permite să vă oferim soluții rapide, chiar și
                        pentru comenzile cu un număr redus de unități sau din locații mai puțin accesibile. Gestionăm procesul de la preluarea comenzii
                        până la livrarea autoturismului, oferindu-vă transparență și suport constant.
                    </p>
                    <p>
                        Colaborăm exclusiv cu parteneri de încredere și aplicăm cele mai bune practici din domeniul
                        transportului și logisticii. Obiectivul nostru este simplu: <strong>satisfacția completă a
                        clienților</strong> prin servicii de înaltă calitate, livrate cu promptitudine și
                        profesionalism.
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

export default Intermedieri;
