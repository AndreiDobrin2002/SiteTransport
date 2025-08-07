import CountUp from "react-countup";
import "./Statistici.css";
import { FaTruck, FaCalendarAlt, FaUsers, FaWarehouse } from "react-icons/fa";

const statistici = [
    { icon: <FaTruck />, number: 6453, suffix: "+", text: "Vehicule transportate" },
    { icon: <FaCalendarAlt />, number: 15, suffix: "+", text: "Ani experiență" },
    { icon: <FaUsers />, number: 50, suffix: "+", text: "Subcontractori internaționali" },
    { icon: <FaWarehouse />, number: 20, text: "Zile termen maxim de încărcare" },
];

export default function Statistici() {
    return (
        <div className="statistici-container">
            {statistici.map((stat, index) => (
                <div key={index} className="stat-box">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">
                        <CountUp end={stat.number} duration={3.5} suffix={stat.suffix || ""} />
                    </div>
                    <div className="stat-text">{stat.text}</div>
                </div>
            ))}
        </div>
    );
}
