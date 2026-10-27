
/* =========================================
   APP.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
========================================= */

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

/* GEMENSAMMA KOMPONENTER */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* SIDOR */
import Hem from "./pages/Hem";
import OmMig from "./pages/OmMig";
import Kontakt from "./pages/Kontakt";

/* STIL */
import "./App.css";

function App() {

  /* =====================================
     GEMENSAMT MÖRKT LÄGE
  ===================================== */

  const [morkt, setMorkt] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("morkt-lage", morkt);

    return () => {
      document.body.classList.remove("morkt-lage");
    };
  }, [morkt]);

  return (
    <div className="app">

      {/* GEMENSAM RAM – ALLA SIDOR */}
      <div className="startsida-ram">

        {/* NAVBAR */}
        <Navbar />

        {/* SIDORNAS INNEHÅLL */}
        <main className="app-innehall">

          <Routes>

            {/* STARTSIDAN */}
            <Route
              path="/"
              element={<Hem />}
            />

            {/* OM MIG */}
            <Route
              path="/om-mig"
              element={
                <OmMig
                  morkt={morkt}
                  setMorkt={setMorkt}
                />
              }
            />

            {/* KONTAKT */}
            <Route
              path="/kontakt"
              element={<Kontakt />}
            />

            {/* PROJEKT */}
            <Route
              path="/projekt"
              element={<Hem />}
            />

          </Routes>

        </main>

      </div>

      {/* FOOTER – ALLA SIDOR */}
      <Footer />

    </div>
  );
}

export default App;
