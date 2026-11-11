
/* =========================================
   APP.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
   RESPONSIV DESIGN
========================================= */

import { useState, useEffect } from "react";
import Studio92 from "./pages/Studio92";
import { sidNamn } from "./data/installningar";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

/* =========================================
   GEMENSAMMA KOMPONENTER
========================================= */

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SidUnderrubrik from "./components/SidUnderrubrik";

/* =========================================
   SIDOR
========================================= */

import Hem from "./pages/Hem";
import OmMig from "./pages/OmMig";
import Kontakt from "./pages/Kontakt";
import Logik from "./pages/Logik";
import MittBollplank from "./pages/MittBollplank";
import ProjektDetalj from "./pages/ProjektDetalj";
import EjHittad from "./pages/EjHittad";

/* =========================================
   STIL
========================================= */

import "./App.css";

/* =========================================
   AUTOMATISK SCROLLNING
========================================= */

function ScrollTillSektion() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.substring(1));

      const scrolla = () => {
        const sektion = document.getElementById(id);

        if (sektion) {
          const position =
            sektion.getBoundingClientRect().top +
            window.scrollY;

          window.scrollTo({
            top: position,
            behavior: "instant",
          });
        }
      };

      const frame = requestAnimationFrame(scrolla);

      return () => cancelAnimationFrame(frame);
    }

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
}

/* =========================================
   ÖVNING – JAVASCRIPT
========================================= */

console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");

/* =========================================
   HUVUDKOMPONENT – APP
========================================= */

function App() {
  const { pathname } = useLocation();

  /* =====================================
     GEMENSAMT SPRÅKVAL
     SVENSKA / ENGELSKA / FINSKA
  ===================================== */

  const [sprak, setSprak] = useState(() => {
    return localStorage.getItem("valtSprak") || "sv";
  });

  useEffect(() => {
    localStorage.setItem("valtSprak", sprak);
    document.documentElement.lang = sprak;
  }, [sprak]);

  /* =====================================
     SIDANS TITEL
  ===================================== */

  useEffect(() => {
    document.title = sidNamn;
  }, []);

  /* =====================================
     GEMENSAMT MÖRKT / LJUST LÄGE
  ===================================== */

  const [morkt, setMorkt] = useState(false);

  /* =====================================
     AKTIVERA MÖRKT LÄGE
  ===================================== */

  useEffect(() => {
    document.body.classList.toggle(
      "morkt-lage",
      morkt
    );

    return () => {
      document.body.classList.remove("morkt-lage");
    };
  }, [morkt]);

  /* =====================================
     SIDANS INNEHÅLL
     RESPONSIV BREDD UTAN SKALNING
  ===================================== */

  return (
    <div className="app">
      <div className="app-skala">

        {/* AUTOMATISK SCROLLNING */}

        <ScrollTillSektion />

        {/* =====================================
            GEMENSAM RAM
        ===================================== */}

        <div className="startsida-ram">

          {/* =====================================
              NAVBAR
          ===================================== */}

          <Navbar sprak={sprak} />

          {/* =====================================
              GEMENSAM UNDERRUBRIK
          ===================================== */}

          {pathname !== "/" &&
            pathname !== "/projekt" && (
              <SidUnderrubrik />
            )}

          {/* =====================================
              SIDORNAS INNEHÅLL
          ===================================== */}

          <main className="app-innehall">

            <Routes>

              {/* HEM */}

              <Route
                path="/"
                element={
                  <Hem
                    morkt={morkt}
                    setMorkt={setMorkt}
                    sprak={sprak}
                  />
                }
              />

              {/* OM MIG */}

              <Route
                path="/om-mig"
                element={
                  <OmMig
                    morkt={morkt}
                    setMorkt={setMorkt}
                    sprak={sprak}
                  />
                }
              />

              {/* KONTAKT */}

              <Route
                path="/kontakt"
                element={
                  <Kontakt
                    morkt={morkt}
                    setMorkt={setMorkt}
                    sprak={sprak}
                  />
                }
              />

              {/* PROJEKT */}

              <Route
                path="/projekt"
                element={
                  <Hem
                    morkt={morkt}
                    setMorkt={setMorkt}
                    sprak={sprak}
                  />
                }
              />

              {/* PROJEKTDETALJ */}

              <Route
                path="/projekt/:id"
                element={<ProjektDetalj />}
              />

              {/* MITT BOLLPLANK */}

              <Route
                path="/mitt-bollplank"
                element={
                  <MittBollplank
                    morkt={morkt}
                    setMorkt={setMorkt}
                    sprak={sprak}
                  />
                }
              />

              {/* STUDIO92 */}

              <Route
                path="/studio92"
                element={
                  <Studio92
                    morkt={morkt}
                    setMorkt={setMorkt}
                    sprak={sprak}
                  />
                }
              />

              {/* LOGIK – JAVASCRIPTÖVNING */}

              <Route
                path="/logik"
                element={<Logik />}
              />

              {/* 404 – SIDAN HITTADES INTE */}

              <Route
                path="*"
                element={<EjHittad />}
              />

            </Routes>

          </main>

        </div>

        {/* =====================================
            FOOTER
        ===================================== */}

        <Footer
          sprak={sprak}
          setSprak={setSprak}
        />

      </div>
    </div>
  );
}

export default App;

