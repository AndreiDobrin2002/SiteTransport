import CountUp from "react-countup";
import "./Statistici.css";
import { FaTruck, FaCalendarAlt, FaUsers, FaWarehouse } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const statistici = [
    { icon: <FaTruck />, number: 6453, suffix: "+", text: "Vehicule transportate" },
    { icon: <FaCalendarAlt />, number: 15, suffix: "+", text: "Ani experiență" },
    { icon: <FaUsers />, number: 50, suffix: "+", text: "Subcontractori internaționali" },
    { icon: <FaWarehouse />, number: 20, text: "Zile termen maxim de încărcare" },
];

export default function Statistici() {
    const { ref, inView } = useInView({
        triggerOnce: false, // Setează la true dacă vrei să declanșezi animația doar o singură dată
        threshold: 0.3,
    });

    return (
        <div className="statistici-container" ref={ref}>
            {statistici.map((stat, index) => (
                <div key={index} className="stat-box">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">
                        {/* Pornește animația doar când inView este true */}
                        {inView ? (
                            <CountUp end={stat.number} duration={3.5} suffix={stat.suffix || ""} />
                        ) : (
                            0
                        )}
                    </div>
                    <div className="stat-text">{stat.text}</div>
                </div>
            ))}
        </div>
    );
}
