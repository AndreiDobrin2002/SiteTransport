import React, { useState, useEffect } from "react";
import "./Comanda.css";
import Footer from "../components/Footer";

const Comanda = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        from: "",
        to: "",
        carType: "",
        carCondition: "",
        details: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("_template", "table");  // Aici e cheia pentru tabel
        form.append("Tip autovehicul", formData.carType);
        form.append("Stare autovehicul", formData.carCondition);
        form.append("Locul de preluare", formData.from);
        form.append("Destinația", formData.to);
        form.append("Nume", formData.name);
        form.append("Telefon", formData.phone);
        form.append("Email", formData.email);
        form.append("Detalii suplimentare", formData.details);
        form.append("_captcha", "false");

        fetch("https://formsubmit.co/69edc200a3fdbadca0f072fcb65f6cbf", {
            method: "POST",
            body: form,
        })
            .then(response => {
                if (response.ok) {
                    setSubmitted(true);
                    setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        from: "",
                        to: "",
                        carType: "",
                        carCondition: "",
                        details: "",
                    });
                } else {
                    alert("A apărut o eroare. Încearcă din nou.");
                }
            })
            .catch(() => {
                alert("A apărut o eroare la trimitere.");
            });
    };

    useEffect(() => {
        if (submitted) {
            const timeout = setTimeout(() => {
                setSubmitted(false);
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [submitted]);

    return (
        <div className="comanda-page">
            <h1>Comandă transport auto</h1>
            <div className="comanda-intro">
                <p>
                    Completează formularul de mai jos pentru a plasa o comandă rapidă.
                    Te vom contacta în cel mai scurt timp posibil!
                </p>
            </div>

            <form className="comanda-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="carType"
                    placeholder="Tipul autovehiculului *"
                    value={formData.carType}
                    onChange={handleChange}
                    required
                />
                <select
                    name="carCondition"
                    value={formData.carCondition}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selectează starea autovehiculului *</option>
                    <option value="Auto funcțional">Auto funcțional</option>
                    <option value="Auto nefuncțional">Auto nefuncțional</option>
                </select>
                <input
                    type="text"
                    name="from"
                    placeholder="Locul de preluare *"
                    value={formData.from}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="to"
                    placeholder="Destinația *"
                    value={formData.to}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Nume complet *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="details"
                    placeholder="Detalii suplimentare"
                    value={formData.details}
                    onChange={handleChange}
                />
                <button type="submit">Trimite comanda</button>
            </form>

            {submitted && (
                <div className="comanda-success">
                    <h3>Mulțumim!</h3>
                    <p>Comanda ta a fost trimisă cu succes.</p>
                </div>
            )}

            <Footer/>
        </div>
    );
};

export default Comanda;
