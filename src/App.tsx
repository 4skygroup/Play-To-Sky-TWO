import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./components/form/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Locations from "./pages/Locations.tsx";
import CreatedBy from "./components/CreatedBy.tsx";
import MentionsLegales from "./pages/legalPage/MentionsLegales.tsx";
import PolitiqueConfidentialite from "./pages/legalPage/PolitiqueConfidentialite.tsx";
import ConditionsGeneralesVente from "./pages/legalPage/ConditionsGeneralesVente.tsx";
import ConditionsGeneralesUtilisation from "./pages/legalPage/ConditionsGeneralesUtilisation.tsx";

export default function App() {
  return (
      <div className="overflow-x-hidden">
          <ScrollToTop />
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/localisation" element={<Locations />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/mentions-legal" element={<MentionsLegales />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
              <Route path="/conditions-vente" element={<ConditionsGeneralesVente />} />
              <Route path="/conditions-utilisation" element={<ConditionsGeneralesUtilisation />} />

          </Routes>
          <Footer />
          <CreatedBy />
      </div>
  );
}