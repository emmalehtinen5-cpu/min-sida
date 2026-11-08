
/* =========================================
   APP.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
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
import MittBollplank from "./pages/MittBollplank";

/* =========================================
   STIL
========================================= */

import "./App.css";

/* =========================================
   AUTOMATISK SCROLLNING
========================================= */

function ScrollTillSektion({ skala }) {
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
  }, [pathname, hash, skala]);

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
     PROPORTIONERLIG SKALNING
  ===================================== */

  const [skala, setSkala] = useState(
    () => Math.min(1, window.innerWidth / 1440)
  );

  useEffect(() => {
    const uppdateraSkala = () => {
      setSkala(Math.min(1, window.innerWidth / 1440));
    };

    window.addEventListener("resize", uppdateraSkala);

    return () => {
      window.removeEventListener("resize", uppdateraSkala);
    };
  }, []);

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
  ===================================== */

  return (
    <div
      className="app"
      style={{ width: `${1440 * skala}px` }}
    >
      <div
        className="app-skala"
        style={{ transform: `scale(${skala})` }}
      >

        {/* AUTOMATISK SCROLLNING */}

        <ScrollTillSektion skala={skala} />

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
                  />
                }
              />

              {/* MITT BOLLPLANK */}

              <Route
                path="/mitt-bollplank"
                element={
                  <MittBollplank
                    morkt={morkt}
                    setMorkt={setMorkt}
                  />
                }
              />
                <Route path="/studio92"
                 element={
                 <Studio92 
                  morkt={morkt}
                    setMorkt={setMorkt}
                 
                 />
                }

                  />

            </Routes>

          </main>

        </div>

        {/* =====================================
            FOOTER
        ===================================== */}

        <Footer  sprak={sprak} setSprak={setSprak} />

      </div>
    </div>
  );
}

export default App;
