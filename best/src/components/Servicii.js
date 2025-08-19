import "./Servicii.css";
import { Link } from "react-router-dom";
import img1 from "../assets/serviciu1.jpg";
import img2 from "../assets/serviciu2.jpg";
import img3 from "../assets/serviciu3.jpg";

const servicii = [
    {
        title: "TRANSPORT AUTO",
        text: "Oferim o gamă variată de servicii de transport intern și internațional",
        img: img1,
        link: "/transport-auto",
    },
    {
        title: "INTERMEDIERI TRANSPORT AUTO",
        text: "Oferim clienților noștri servicii de cea mai bună calitate ca rezultat al experienței de peste 15 ani",
        img: img2,
        link: "/intermedieri-transport",
    },
    {
        title: "LOGISTICĂ ȘI DEPOZITARE AUTO",
        text: "Societatea noastră vă pune la dispoziție servicii de logistică și depozitare auto.",
        img: img3,
        link: "/logistica-depozitare",
    },
];

export default function Servicii() {
    return (
        <div className="servicii-section">
            <div className="servicii-left">
                <div className="underline" />
                <h2>SERVICIILE NOASTRE</h2>
                <p>
                    Cu peste <strong>8 ani experiență</strong> în domeniu, echipa noastră
                    vă poate oferi servicii de cea mai bună calitate precum
                </p>
            </div>

            <div className="servicii-right">
                {servicii.map((item, index) => (
                    <div className="serviciu-card" key={index}>
                        <img src={item.img} alt={item.title} />
                        <div className="serviciu-content">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <Link to={item.link} className="read-more-link">Detalii →</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
