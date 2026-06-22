import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./components/form/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

export default function App() {
  return (
      <div className="overflow-x-hidden">
          <ScrollToTop />
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

          </Routes>
          <Footer />
      </div>
  );
}