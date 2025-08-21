import { useEffect } from "react";
import huFlag from "../assets/flags/hu.png";
import enFlag from "../assets/flags/en.png";
import deFlag from "../assets/flags/de.png";
import frFlag from "../assets/flags/fr.png";
import itFlag from "../assets/flags/it.png";
import esFlag from "../assets/flags/es.png";

export default function GoogleTranslateFlags() {
    useEffect(() => {
        if (!document.querySelector("#google-translate-script")) {
            const addScript = document.createElement("script");
            addScript.id = "google-translate-script";
            addScript.src =
                "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            addScript.async = true;
            document.body.appendChild(addScript);
        }

        window.googleTranslateElementInit = () => {
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "ro",
                        autoDisplay: false,
                    },
                    "google_translate_element"
                );
            }
        };
    }, []);

    const changeLanguage = (lang) => {
        const select = document.querySelector(".goog-te-combo");
        if (select) {
            select.value = lang;
            select.dispatchEvent(new Event("change"));
        }
    };

    const languages = [
        { code: "en", label: "English", flag: enFlag },
        { code: "de", label: "Deutsch", flag: deFlag },
        { code: "fr", label: "Français", flag: frFlag },
        { code: "it", label: "Italiano", flag: itFlag },
        { code: "es", label: "Español", flag: esFlag },
        { code: "hu", label: "Magyarország", flag: huFlag },
    ];

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
                alignItems: "center",
                justifyItems: "center",
                maxWidth: "120px", // controlează lățimea totală
            }}
        >
            {languages.map((lang) => (
                <img
                    key={lang.code}
                    src={lang.flag}
                    alt={lang.label}
                    title={lang.label}
                    onClick={() => changeLanguage(lang.code)}
                    style={{
                        cursor: "pointer",
                        width: "32px",
                    }}
                />
            ))}

            {/* Ascundem UI-ul default Google Translate */}
            <div
                id="google_translate_element"
                style={{ position: "absolute", left: "-9999px" }}
            />
        </div>
    );

}
