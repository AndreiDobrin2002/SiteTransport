import React, { useState, useEffect } from "react";
import "./Contact.css";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("_template", "table");  // Aici e cheia pentru tabel
        form.append("nume", formData.name);
        form.append("email", formData.email);
        form.append("telefon", formData.phone);
        form.append("mesaj", formData.message);
        form.append("_captcha", "false");

        fetch("https://formsubmit.co/0cc1c5905bff6b76ffa042c60e97684c", {

            method: "POST",
            body: form,
        })
            .then(response => {
                if (response.ok) {
                    setSubmitted(true);
                    setFormData({ name: "", email: "", phone: "", message: "" });
                } else {
                    alert("A apărut o eroare. Încearcă din nou.");
                }
            })
            .catch(() => {
                alert("A apărut o eroare la trimitere.");
            });
    };

    // 🔔 Auto-hide mesajul de confirmare după 5 secunde
    useEffect(() => {
        if (submitted) {
            const timeout = setTimeout(() => {
                setSubmitted(false);
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [submitted]);

    return (
        <div className="contact-page">
            <h1>Contactează-ne</h1>
            <div className="contact-intro">
                <p>
                    Ai o întrebare despre serviciile noastre?
                    Suntem aici să te ajutăm cu orice întrebări sau nevoi legate de transportul auto.
                </p>
                <p>
                    Ne angajăm să răspundem prompt și să oferim soluții adaptate nevoilor tale.
                    Completează formularul de mai jos și vom reveni la tine cât mai curând posibil.
                </p>
                <p>
                    Pentru mai multe informații sau pentru a solicita o ofertă personalizată,
                    nu ezita să ne contactezi la numărul de telefon sau adresa de email afișate pe site.
                </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nume complet *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Adresa de email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Număr de telefon *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Mesaj *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Trimite mesaj</button>
            </form>

            {submitted && (
                <div className="contact-success">
                    <h3>Mulțumim!</h3>
                    <p>Mesajul tău a fost trimis cu succes.</p>
                </div>
            )}

            <MapSection />
            <Footer />
        </div>
    );
};

export default Contact;
