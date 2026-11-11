
/* =========================================
   PROJEKT – MODERN & STRUKTURERAD
   SVENSKA / ENGELSKA / FINSKA
========================================= */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import projektData from "../data/projekt.json";

import Portobild from "../assets/portobild.jpg";
import Rosen from "../assets/rosen.png";
import Hero3 from "../assets/Hero3.webp";

/* =========================================
   ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    etikett: "UTVALDA ARBETEN / PORTFOLIO",
    rubrik: "Mina projekt",
    beskrivning:
      "Ett urval av projekt inom arkitektur, stadsutveckling och rumslig analys, där idéer och analyser utvecklas till visuella och rumsliga lösningar.",
    allaProjekt: "SE ALLA PROJEKT",
    sortera: "Sortera projekt:",
    standard: "Standardordning",
    titel: "Titel A–Ö",
    tekniker: "Flest tekniker först",
    filtrera: "Filtrera efter teknik:",
    allaTekniker: "Alla tekniker",
    antal: (visas, totalt) =>
      `${visas} av ${totalt} projekt visas`,
    totalt: (antal) =>
      `Visar ${antal} av ${antal} projekt`,
  },

  en: {
    etikett: "SELECTED WORK / PORTFOLIO",
    rubrik: "My projects",
    beskrivning:
      "A selection of projects in architecture, urban development and spatial analysis, where ideas and research are transformed into visual and spatial solutions.",
    allaProjekt: "VIEW ALL PROJECTS",
    sortera: "Sort projects:",
    standard: "Default order",
    titel: "Title A–Z",
    tekniker: "Most technologies first",
    filtrera: "Filter by technology:",
    allaTekniker: "All technologies",
    antal: (visas, totalt) =>
      `Showing ${visas} of ${totalt} projects`,
    totalt: (antal) =>
      `Showing ${antal} of ${antal} projects`,
  },

  fi: {
    etikett: "VALITUT TYÖT / PORTFOLIO",
    rubrik: "Projektini",
    beskrivning:
      "Valikoima arkkitehtuuriin, kaupunkikehitykseen ja paikkatietoanalyysiin liittyviä projekteja, joissa ideat ja analyysit kehittyvät visuaalisiksi ja tilallisiksi ratkaisuiksi.",
    allaProjekt: "KATSO KAIKKI PROJEKTIT",
    sortera: "Järjestä projektit:",
    standard: "Oletusjärjestys",
    titel: "Nimi A–Ö",
    tekniker: "Eniten tekniikoita ensin",
    filtrera: "Suodata tekniikan mukaan:",
    allaTekniker: "Kaikki tekniikat",
    antal: (visas, totalt) =>
      `Näytetään ${visas}/${totalt} projektia`,
    totalt: (antal) =>
      `Näytetään ${antal}/${antal} projektia`,
  },
};

/* =========================================
   PROJEKTINFORMATION
========================================= */

const bilder = {
  1: Portobild,
  2: Rosen,
  3: Hero3,
};

const lankar = {
  1: "/projekt/portfoliosida.pdf",
  2: "/projekt/projekt2.pdf",
  3: "/projekt/projekt3.pdf",
};

const projekt = projektData.map((p) => ({
  ...p,
  bild: bilder[p.id],
  lank: lankar[p.id],
  teknik: p.teknik.join(", "),
  harReact: p.teknik.some(
    (teknik) => teknik.toLowerCase() === "react"
  ),
}));

/* =========================================
   SAMLA ALLA TEKNIKER MED FOR...OF
========================================= */

const allaTekniker = [];

for (const p of projektData) {
  for (const teknik of p.teknik) {
    if (!allaTekniker.includes(teknik)) {
      allaTekniker.push(teknik);
    }
  }
}

// Sortera teknikerna alfabetiskt
allaTekniker.sort((a, b) =>
  a.localeCompare(b, "sv")
);

/* =========================================
   ÖVERSÄTT TEKNIKNAMN I FILTRET
========================================= */

function oversattTeknik(teknik, sprak) {
  if (sprak === "sv") {
    return teknik;
  }

  for (const p of projektData) {
    const index = p.teknik.indexOf(teknik);

    if (index !== -1) {
      return (
        p.oversattningar?.[sprak]?.teknik?.[index] ||
        teknik
      );
    }
  }

  return teknik;
}

/* =========================================
   PROJEKTKOMPONENT
========================================= */

function Projekt({ sprak = "sv" }) {
  const { pathname } = useLocation();

  const text = oversattningar[sprak] || oversattningar.sv;

  /* =====================================
     ÖVERSÄTT PROJEKTENS INNEHÅLL
  ===================================== */

  const oversattaProjekt = projekt.map((p) => {
    const oversattning = p.oversattningar?.[sprak];

    return {
      ...p,
      titel: oversattning?.titel || p.titel,
      text: oversattning?.text || p.text,
      visadTeknik: (
        oversattning?.teknik || p.teknik.split(", ")
      ).join(", "),
    };
  });

  /* =====================================
     STATE – SORTERING OCH FILTER
  ===================================== */

  const [sortering, setSortering] = useState("standard");
  const [valdTeknik, setValdTeknik] = useState("alla");

  // Visa länken till alla projekt på andra sidor
  const visaAllaProjekt = pathname !== "/projekt";

  /* =====================================
     FILTRERA PROJEKT EFTER TEKNIK
  ===================================== */

  const sorteradeProjekt = oversattaProjekt.filter((p) => {
    if (valdTeknik === "alla") {
      return true;
    }

    // Filtrera med ursprungliga svenska värden
    // oavsett vilket språk som visas.
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
      a.titel.localeCompare(b.titel, sprak)
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

  /* =====================================
     VISA PROJEKTSEKTIONEN
  ===================================== */

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
            {text.etikett}
          </span>

          <h2 id="projekt-rubrik">
            {text.rubrik}
          </h2>

          <p className="projekt-antal">
            {text.totalt(projekt.length)}
          </p>

          <p className="projekt-beskrivning">
            {text.beskrivning}
          </p>

        </div>

        {/* VISAS ENDAST PÅ STARTSIDAN */}

        {visaAllaProjekt && (
          <Link
            className="projekt-alla-lank"
            to="/projekt"
          >
            {text.allaProjekt}
            <span aria-hidden="true">→</span>
          </Link>
        )}

      </div>

      {/* =====================================
          SORTERING AV PROJEKT
      ===================================== */}

      <div className="projekt-sortering">

        <label htmlFor="sortera-projekt">
          {text.sortera}
        </label>

        <select
          id="sortera-projekt"
          value={sortering}
          onChange={(e) => setSortering(e.target.value)}
        >
          <option value="standard">
            {text.standard}
          </option>

          <option value="titel">
            {text.titel}
          </option>

          <option value="tekniker">
            {text.tekniker}
          </option>
        </select>

      </div>

      {/* =====================================
          FILTRERA PROJEKT EFTER TEKNIK
      ===================================== */}

      <div className="projekt-sortering">

        <label htmlFor="filtrera-teknik">
          {text.filtrera}
        </label>

        <select
          id="filtrera-teknik"
          value={valdTeknik}
          onChange={(e) => setValdTeknik(e.target.value)}
        >
          <option value="alla">
            {text.allaTekniker}
          </option>

          {allaTekniker.map((teknik) => (
            <option
              key={teknik}
              value={teknik}
            >
              {oversattTeknik(teknik, sprak)}
            </option>
          ))}
        </select>

      </div>

      {/* =====================================
          PROJEKTKORT
      ===================================== */}

      {/* Räknaren ligger UTANFÖR projekt-grid */}

      <p className="projekt-filter-antal">
        {text.antal(
          sorteradeProjekt.length,
          projekt.length
        )}
      </p>

      <div className="projekt-lista">

        {sorteradeProjekt.map((p) => (
          <ProjektKort
            key={p.id}
            id={p.id}
            titel={p.titel}
            text={p.text}
            teknik={p.visadTeknik}
            bild={p.bild}
            lank={p.lank}
            harReact={p.harReact}
            sprak={sprak}
          />
        ))}

      </div>
    </section>
  );
}

export default Projekt;
