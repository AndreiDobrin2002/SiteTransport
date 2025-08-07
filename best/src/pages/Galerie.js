import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Galerie.css";
import Footer from "../components/Footer";
import ServicetCTA from "../components/ServiceCTA";

// Importă imaginile
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";
import img27 from "../assets/img27.jpg";
import img28 from "../assets/img28.jpg";
import img29 from "../assets/img29.jpg";
import img30 from "../assets/img30.jpg";
import img31 from "../assets/img31.jpg";
import img32 from "../assets/img32.jpg";
import img33 from "../assets/img33.jpg";
import img34 from "../assets/img34.jpg";
import img35 from "../assets/img35.jpg";
import img36 from "../assets/img36.jpg";
import img37 from "../assets/img37.jpg";
import img38 from "../assets/img38.jpg";
import img39 from "../assets/img39.jpg";
import img40 from "../assets/img40.jpg";
import img41 from "../assets/img41.jpg";
import img42 from "../assets/img42.jpg";
import img43 from "../assets/img43.jpg";
import img44 from "../assets/img44.jpg";

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43, img44
];

const Galerie = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <div className="galerie-container">
            <h1 className="galerie-title">Galerie Foto</h1>
            <div className="galerie-grid">
                {images.map((img, index) => (
                    <div key={index} className="galerie-item">
                        <img
                            src={img}
                            alt={`galerie-${index}`}
                            onClick={() => {
                                setPhotoIndex(index);
                                setIsOpen(true);
                            }}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                ))}
            </div>

            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={images.map((img) => ({ src: img }))}
                index={photoIndex}
                on={{ view: ({ index }) => setPhotoIndex(index) }}
            />
            <ServicetCTA />

            <Footer />
        </div>
    );
};

export default Galerie;