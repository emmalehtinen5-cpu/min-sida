
/* =========================================
   PROJEKT – MODERN & STRUKTURERAD
========================================= */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import { antalProjekt } from "../utils/text";

import Portobild from "../assets/portobild.jpg";
import Rosen from "../assets/rosen.png";
import Hero3 from "../assets/Hero3.webp";

/* =========================================
   PROJEKTINFORMATION
========================================= */

const projekt = [
  {
    id: 1,
    titel: "Min portfoliosida",
    text:
      "En visuellt utformad portfolio som presenterar projekt inom arkitektur, stadsutveckling och rumslig gestaltning.",
    teknik: "Analys, Visualisering, Gestaltning",
    bild: Portobild,
    lank: "/projekt/portfoliosida.pdf",
  },
  {
    id: 2,
    titel: "Metodbok – Rosengård",
    text:
      "Analys av Rosengårds urbana miljö med fokus på platsens kvaliteter, möjligheter och utbud för unga vuxna.",
    teknik: "Workshop, Intervjuer, Platsanalys",
    bild: Rosen,
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

/* =========================================
   SAMLA ALLA TEKNIKER MED FOR...OF
========================================= */

const allaTekniker = [];

for (const p of projekt) {
  const tekniker = p.teknik.split(",");

  for (const teknik of tekniker) {
    const namn = teknik.trim();

    if (!allaTekniker.includes(namn)) {
      allaTekniker.push(namn);
    }
  }
}

// Sortera teknikerna alfabetiskt
allaTekniker.sort((a, b) =>
  a.localeCompare(b, "sv")
);

/* =========================================
   PROJEKTKOMPONENT
========================================= */

function Projekt() {
  const { pathname } = useLocation();

  // State för sortering
  const [sortering, setSortering] = useState("standard");

  // State för teknikfilter
  const [valdTeknik, setValdTeknik] = useState("alla");

  // Visa länken till alla projekt på andra sidor
  const visaAllaProjekt = pathname !== "/projekt";

  /* =====================================
     FILTRERA PROJEKT EFTER TEKNIK
  ===================================== */

  const sorteradeProjekt = projekt.filter((p) => {
    if (valdTeknik === "alla") {
      return true;
    }

    const tekniker = p.teknik
      .split(",")
      .map((teknik) => teknik.trim());

    return tekniker.includes(valdTeknik);
  });

  /* =====================================
     SORTERA PROJEKT
  ===================================== */

  // Sortera alfabetiskt efter titel
  if (sortering === "titel") {
    sorteradeProjekt.sort((a, b) =>
      a.titel.localeCompare(b.titel, "sv")
    );
  }

  // Sortera efter flest tekniker
  if (sortering === "tekniker") {
    sorteradeProjekt.sort((a, b) => {
      const antalA = a.teknik.split(",").length;
      const antalB = b.teknik.split(",").length;

      return antalB - antalA;
    });
  }

  return (
    <section
      className="projekt"
      id="projekt"
      aria-labelledby="projekt-rubrik"
    >

      {/* =====================================
          RUBRIK OCH INTRODUKTION
      ===================================== */}

      <div className="projekt-header">
        <div className="projekt-header-text">

          <span className="projekt-etikett">
            UTVALDA ARBETEN / PORTFOLIO
          </span>

          <h2 id="projekt-rubrik">
            Mina projekt
          </h2>

          <p className="projekt-antal">
            {antalProjekt(projekt.length, projekt.length)}
          </p>

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

      {/* =====================================
          SORTERING AV PROJEKT
      ===================================== */}

      <div className="projekt-sortering">

        <label htmlFor="sortera-projekt">
          Sortera projekt:
        </label>

        <select
          id="sortera-projekt"
          value={sortering}
          onChange={(e) => setSortering(e.target.value)}
        >

          <option value="standard">
            Standardordning
          </option>

          <option value="titel">
            Titel A–Ö
          </option>

          <option value="tekniker">
            Flest tekniker först
          </option>

        </select>

      </div>

      {/* =====================================
          FILTRERA PROJEKT EFTER TEKNIK
      ===================================== */}

      <div className="projekt-sortering">

        <label htmlFor="filtrera-teknik">
          Filtrera efter teknik:
        </label>

        <select
          id="filtrera-teknik"
          value={valdTeknik}
          onChange={(e) => setValdTeknik(e.target.value)}
        >

          <option value="alla">
            Alla tekniker
          </option>

          {allaTekniker.map((teknik) => (
            <option
              key={teknik}
              value={teknik}
            >
              {teknik}
            </option>
          ))}

        </select>

      </div>

{/* =====================================
    PROJEKTKORT
===================================== */}

{/* Räknaren ligger UTANFÖR projekt-grid */}

<p className="projekt-filter-antal">
  {sorteradeProjekt.length} av {projekt.length} projekt visas
</p>

<div className="projekt-lista">

  {sorteradeProjekt.map((p) => (
    <ProjektKort
      key={p.id}
      id={p.id}
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
