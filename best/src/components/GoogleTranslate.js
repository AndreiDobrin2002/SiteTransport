import { useState, useEffect, useRef } from "react";
import roFlag from "../assets/flags/ro.png";
import enFlag from "../assets/flags/en.png";
import deFlag from "../assets/flags/de.png";
import frFlag from "../assets/flags/fr.png";
import itFlag from "../assets/flags/it.png";
import esFlag from "../assets/flags/es.png";

const languages = [
    { code: "ro", label: "Română", flag: roFlag },
    { code: "en", label: "English", flag: enFlag },
    { code: "de", label: "Deutsch", flag: deFlag },
    { code: "fr", label: "Français", flag: frFlag },
    { code: "it", label: "Italiano", flag: itFlag },
    { code: "es", label: "Español", flag: esFlag },
];

export default function GoogleTranslateDropdown() {
    const [selected, setSelected] = useState(languages[0]); // implicit Română
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false); // detectăm scroll
    const dropdownRef = useRef(null);

    // Detectăm scroll ca la navbar
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Injectăm scriptul Google Translate
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

    // Ascultăm schimbările făcute de Google Translate (inclusiv X reset)
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const select = document.querySelector(".goog-te-combo");
            if (select) {
                const val = select.value;
                if (val === "" || val === "ro") {
                    setSelected(languages[0]);
                } else {
                    const lang = languages.find((l) => l.code === val);
                    if (lang) setSelected(lang);
                }
            }
        });

        const el = document.getElementById("google_translate_element");
        if (el) observer.observe(el, { subtree: true, childList: true });

        return () => observer.disconnect();
    }, []);

    // Schimbă limba
    const changeLanguage = (lang) => {
        setSelected(lang);
        const select = document.querySelector(".goog-te-combo");
        if (select) {
            select.value = lang.code;
            select.dispatchEvent(new Event("change"));
        }
        setOpen(false);
    };

    // Închide dropdown-ul când dai click în afară
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} style={{ position: "relative", width: "170px" }}>
            {/* Butonul principal */}
            <div
                onClick={() => setOpen(!open)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "6px",
                    padding: "5px 10px",
                    backgroundColor: scrolled
                        ? "#0d1b2a" // ca navbar.scrolled
                        : "rgba(13, 27, 42, 0.6)", // ca navbar.transparent
                    color: "#fff",
                    transition: "background-color 0.3s ease",
                }}
            >
                <img src={selected.flag} alt={selected.label} style={{ width: "24px" }} />
                <span style={{ marginLeft: "8px", flex: 1 }}>{selected.label}</span>
                <span style={{ fontSize: "12px" }}>{open ? "▲" : "▼"}</span>
            </div>

            {/* Dropdown */}
            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: "110%",
                        left: 0,
                        right: 0,
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "6px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                        zIndex: 10,
                        backgroundColor: scrolled ? "#0d1b2a" : "rgba(13, 27, 42, 0.6)",
                        color: "#fff",
                        transition: "background-color 0.3s ease",
                    }}
                >
                    {languages.map(
                        (lang) =>
                            lang.code !== selected.code && (
                                <div
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang)}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "8px 10px",
                                        cursor: "pointer",
                                        transition: "background 0.2s",
                                    }}
                                    className="notranslate"
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.background = "transparent")
                                    }
                                >
                                    <img src={lang.flag} alt={lang.label} style={{ width: "24px" }} />
                                    <span style={{ marginLeft: "8px" }}>{lang.label}</span>
                                </div>
                            )
                    )}
                </div>
            )}

            {/* Ascundem Google Translate UI */}
            <div id="google_translate_element" style={{ position: "absolute", left: "-9999px" }} />
        </div>
    );
}
