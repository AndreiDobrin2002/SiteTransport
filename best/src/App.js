import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Acasa from "./pages/Acasa";
import Despre from "./pages/Despre";
import Servicii from "./pages/Servicii";
import TransportAuto from "./pages/TransportAuto";
import Intermedieri from "./pages/Intermedieri";
import Logistica from "./pages/Logistica";
import Contact from "./pages/Contact";
import Galerie from './pages/Galerie';
import Comanda from "./pages/Comanda";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="content" style={{ margin: 0, padding: 0 }}>
                <Routes>
                    <Route path="/" element={<Acasa />} />
                    <Route path="/despre" element={<Despre />} />
                    <Route path="/servicii" element={<Servicii />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/galerie" element={<Galerie />} />
                    <Route path="/transport-auto" element={<TransportAuto />} />
                    <Route path="/intermedieri-transport" element={<Intermedieri />} />
                    <Route path="/logistica-depozitare" element={<Logistica />} />
                    <Route path="/comanda" element={<Comanda />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
