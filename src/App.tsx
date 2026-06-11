// import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.tsx";
import Carousel from "./components/Carousel.tsx";

export default function App() {
  return (
      <>
          <Navbar />
          <Carousel />
          <Carousel />

          {/*<Routes>*/}
            {/*  <Route path="/" element={} />*/}

          {/*</Routes>*/}
      </>
  );
}