import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";

export default function App() {
  return (
      <div className="overflow-x-hidden">
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />

          </Routes>
      </div>
  );
}