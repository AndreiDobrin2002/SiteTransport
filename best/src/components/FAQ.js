import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
    {
        question: "Care sunt costurile transportului unui autovehicul?",
        answer:
            "Costul unui transport diferă în funcție de rută, dimensiunile autovehiculului și starea acestuia. De îndată ce primim cererea de transport, sunt examinate cele mai bune soluții privind prețul și termenul de livrare. Cele mai bune soluții vor fi comunicate clientului."
    },
    {
        question: "Ce tipuri de vehicule transportați?",
        answer: "Transportăm o gamă variată de vehicule, inclusiv autoturisme, SUV-uri, utilitare ușoare și vehicule comerciale.",
    },
    {
        question: "Oferiți transport internațional?",
        answer: "Da, oferim servicii de transport auto internațional în majoritatea țărilor europene.",
    },
    {
        question: "Care sunt metodele de plată acceptate?",
        answer:
            "Acceptăm plata prin transfer bancar, numerar la livrare și alte metode agreate contractual."
    },
    {
        question: "Care este termenul de încărcare și descărcare?",
        answer:
            "Imediat ce primim o solicitare , un formular de comandă , echipa nostra va analiza cererea dumneavostra și vă va trimite o ofertă special creată pentru nevoile dumneavostra . În general, termenul de încărcare variază între 1 și 20 de zile, în funcție de disponibilitatea platformei și a rutei alese."
    },
    {
        question: "Care este valoarea asigurării pe timpul transportului?",
        answer:
            "Toate autovehiculele transportate prin intermediul companiei Best Ride Express beneficiază pe perioada transportului de asigurare CMR în valoare de 1 200 000 EUR, atât ca transportator cât și ca,  casă de expediții."
    },
    {
        question: "Ce documente sunt necesare pentru efectuarea transportului?",
        answer:
            "Este necesară o copie a actului de identitate, talonul vehiculului și eventual dovada de achiziție sau contractul de vânzare-cumpărare. Pentru ca echipa noastră să înceapă organizarea transportului pentru dumneavoastră, avem nevoie să ne trimiteți comanda de transport. La încărcare, personalul nostru calificat, va întocmi scrisoarea de transport  (CMR) și va înmâna un exemplar persoanei care va preda mașina ."
    },
    {
        question: "Câte autovehicule se pot transporta simultan?",
        answer:
            "Fie că aveți un singur autovehicul ( 1 unitate ) sau loturi formate din (5/6 sau 8/9 unități ). Suntem aici să venim în întampinarea nevoilor dumneavostra . Dispecerii Best Ride Express, sunt gata să organizeze transportul autovehiculului dumneavoastră, în cel mai rapid, eficient și sigur mod."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-wrapper">
            <h2 className="faq-title">Întrebări frecvente</h2>
            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        key={index}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            {item.question}
                            <span className={`arrow ${activeIndex === index ? "open" : ""}`}>
                ▼
              </span>
                        </div>
                        <div className="faq-answer-wrapper">
                            <div className="faq-answer">{item.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
