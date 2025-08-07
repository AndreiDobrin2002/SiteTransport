import "./MapSection.css";
import React from "react";

export default function MapSection() {
    return (
        <div className="map-container">
            <iframe
                title="harta sediu social"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.4151072736816!2d27.183195276488327!3d45.69236132296713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b418a53d8c430f%3A0x8908ae7f36160aa1!2sBulevardul%20Unirii%2020%2C%20Foc%C8%99ani%20620172!5e0!3m2!1sen!2sro!4v1697289934567!5m2!1sen!2sro"
                width="100%"
                height="500"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="map-overlay">
                <div className="contact-box">
                    <div className="contact-column">
                        <h3>SEDIU SOCIAL</h3>
                        <p>📍 Bulevardul Unirii 20,<br/>Focșani 620172, România</p>
                        <p>
                            📞 <a href="tel:+40737553140" className="contact-link">+40 737 553 140</a>
                        </p>
                        <p>
                            ✉️ <a href="mailto:office@dejtrans.ro" className="contact-link">office@dejtrans.ro</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
