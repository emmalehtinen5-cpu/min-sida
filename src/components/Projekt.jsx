
/* =========================================
   PROJEKT – MODERN & STRUKTURERAD
========================================= */

import { Link, useLocation } from "react-router-dom";

import "./Projekt.css";
import ProjektKort from "./ProjektKort";

import Hero1 from "../assets/Hero1.jpg";
import Hero2 from "../assets/Hero2.jpg";
import Hero3 from "../assets/Hero3.webp";

/* PROJEKTINFORMATION */

const projekt = [
  {
    id: 1,
    titel: "Min portfoliosida",
    text:
      "En visuellt utformad portfolio som presenterar projekt inom arkitektur, stadsutveckling och rumslig gestaltning.",
    teknik: "Analys, Visualisering, Gestaltning",
    bild: Hero1,
    lank: "/projekt/portfoliosida.pdf",
  },
  {
    id: 2,
    titel: "Metodbok – Rosengård",
    text:
      "Analys av Rosengårds urbana miljö med fokus på platsens kvaliteter, möjligheter och utbud för unga vuxna.",
    teknik: "Workshop, Intervjuer, Platsanalys",
    bild: Hero2,
    lank: "/projekt/projekt2.pdf",
  },
  {
    id: 3,
    titel: "Västra Hamnen",
    text:
      "Rumslig analys av Västra Hamnens urbana miljö med fokus på stadsstruktur, gestaltning och platsens kvaliteter.",
    teknik: "Plats- och designanalys, Skisser",
    bild: Hero3,
    lank: "/projekt/projekt3.pdf",
  },
];

function Projekt() {
  const { pathname } = useLocation();

  const visaAllaProjekt = pathname !== "/projekt";

  return (
    <section
      className="projekt"
      id="projekt"
      aria-labelledby="projekt-rubrik"
    >
      {/* RUBRIK OCH INTRODUKTION */}

      <div className="projekt-header">
        <div className="projekt-header-text">
          <span className="projekt-etikett">
            UTVALDA ARBETEN / PORTFOLIO
          </span>

          <h2 id="projekt-rubrik">
            Mina projekt
          </h2>

          <p className="projekt-beskrivning">
            Ett urval av projekt inom arkitektur,
            stadsutveckling och rumslig analys,
            där idéer och analyser utvecklas
            till visuella och rumsliga lösningar.
          </p>
        </div>

        {/* VISAS ENDAST PÅ STARTSIDAN */}

        {visaAllaProjekt && (
          <Link
            className="projekt-alla-lank"
            to="/projekt"
          >
            SE ALLA PROJEKT
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>

      {/* PROJEKTKORT */}

      <div className="projekt-lista">
        {projekt.map((p) => (
          <ProjektKort
            key={p.id}
            titel={p.titel}
            text={p.text}
            teknik={p.teknik}
            bild={p.bild}
            lank={p.lank}
          />
        ))}
      </div>
    </section>
  );
}

export default Projekt;
