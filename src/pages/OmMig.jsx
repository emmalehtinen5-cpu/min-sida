
/* =========================================
   OM MIG – EMMA LEHTINEN
   NORDISK PORTFOLIO
========================================= */
import Statistik from "../components/Statistik";
import { useState } from "react";

import emmaBild from "../assets/emma.webp";
import perfektBild from "../assets/perfektbild.png";
import perfektBildMorkt from "../assets/perfekt2.png";

import "./OmMig.css";

function OmMig({ morkt, setMorkt }) {

  /* =====================================
     LÄS MER / VISA MINDRE
  ===================================== */

  const [visas, setVisas] = useState(false);

  /* =====================================
     KOMPETENSKATEGORIER
  ===================================== */

  const kategorier = [
    {
      nummer: "01",
      namn: "ADOBE",
      ikon: "lager",
      kompetenser: ["Illustrator", "Photoshop", "InDesign"],
    },
    {
      nummer: "02",
      namn: "DIGITAL",
      ikon: "kub",
      kompetenser: [
        "3ds Max",
        "3D-rendering",
        "ArcGIS",
        "AutoCAD",
        "SketchUp",
      ],
    },
    {
      nummer: "03",
      namn: "OFFICE",
      ikon: "dokument",
      kompetenser: ["Excel", "PowerPoint", "Word"],
    },
    {
      nummer: "04",
      namn: "SPRÅK",
      ikon: "jordglob",
      kompetenser: [
        "Svenska",
        "Engelska",
        "Danska",
        "Norska",
        "Spanska",
      ],
    },
    {
      nummer: "05",
      namn: "ÖVRIGT",
      ikon: "bil",
      kompetenser: ["B-körkort"],
    },
  ];

  return (
    <main className={`om-mig-innehall ${morkt ? "morkt-lage" : ""}`}>

      {/* =====================================
          ÖVRE ETIKETT – SEPARAT FRÅN KOLUMNERNA
      ===================================== */}

      <span className="om-mig-etikett">
        OM MIG / BAKGRUND
      </span>

      {/* =====================================
          ÖVRE DEL – TRE KOLUMNER
      ===================================== */}

      <div className="om-mig-toppen">

        {/* =====================================
            VÄNSTER – PORTRÄTT
        ===================================== */}

        <div className="om-mig-bildkolumn">
          <div className="om-mig-portrattram">
            <img
              className="om-mig-bild"
              src={emmaBild}
              alt="Porträtt av Emma Lehtinen"
            />
          </div>
        </div>

        {/* =====================================
            MITTEN – PRESENTATION
        ===================================== */}

        <section
          className="om-mig-sektion"
          aria-labelledby="om-mig-rubrik"
        >
          <h1
            id="om-mig-rubrik"
            className="om-mig-rubrik"
          >
            Om mig
          </h1>

          <div
            className="om-mig-rubriklinje"
            aria-hidden="true"
          />

          {/* INTRODUKTIONSTEXT */}

          <p className="om-mig-intro">
            Jag har ett stort intresse för arkitektur,
            design och hållbar stadsutveckling, med
            fokus på hur den byggda miljön kan utformas
            för att skapa funktionella, visuella och
            hållbara lösningar.
          </p>

          {/* =====================================
              LÄS MER / VISA MINDRE
          ===================================== */}

          <button
            type="button"
            className="om-mig-lasmer"
            onClick={() => setVisas(!visas)}
            aria-expanded={visas}
            aria-controls="om-mig-extra"
          >
            {visas ? "VISA MINDRE" : "LÄS MER"}

            <span aria-hidden="true">
              {visas ? "↑" : "→"}
            </span>
          </button>

          {/* =====================================
              EXTRA PRESENTATIONSTEXT
          ===================================== */}

          <div
            id="om-mig-extra"
            className="om-mig-extra-text"
            hidden={!visas}
          >
            <p>
              Med kunskaper inom GIS, rumslig analys
              och visualisering kombinerar jag analytiskt
              tänkande med teknisk och kreativ kompetens.
              Jag tycker om att utforska hur data, form
              och samhällsstrukturer samverkar och hur
              komplex information kan omvandlas till
              tydliga analyser, kartor och visuella
              presentationer.
            </p>

            <p>
              Min bakgrund inom administration och
              kundservice har gett mig en god förmåga
              att arbeta strukturerat, noggrant och
              självständigt. Jag drivs av att utvecklas,
              lära mig nya verktyg och hitta lösningar
              där analys, design och samhällsutveckling
              möts.
            </p>

            <p>
              Min kreativa sida präglas av ett intresse
              för form, färg och gestaltning, där både
              naturen och den byggda miljön är viktiga
              inspirationskällor. Samspelet mellan
              naturliga och skapade miljöer väcker min
              nyfikenhet och inspirerar till nya
              perspektiv och idéer.
            </p>
          </div>
        </section>

        {/* =====================================
            HÖGER – ANSIKTSILLUSTRATION
        ===================================== */}

        <div className="om-mig-illustration">
          <img
            src={morkt ? perfektBildMorkt : perfektBild}
            alt="Minimalistisk ansiktsillustration i nordisk retrostil"
          />
        </div>

      </div>

      {/* =====================================
          DEKORATIV AVDELARE
      ===================================== */}

      <div
        className="om-mig-avdelare"
        aria-hidden="true"
      />

      {/* =====================================
          KOMPETENSER – ARKITEKTONISK RETRO
      ===================================== */}

      <section
        className="om-mig-kompetenser"
        aria-labelledby="kompetenser-rubrik"
      >
        <div className="kompetenser-header">
          <h2 id="kompetenser-rubrik">
            KOMPETENSER.
          </h2>

          <span>
            VERKTYG / SPRÅK / KUNSKAP
          </span>
        </div>

        <div className="kompetenser-grid">
          {kategorier.map((kategori) => (
            <article
              className="kompetenser-kolumn"
              key={kategori.nummer}
            >
              <div className="kompetenser-rubrikfalt">
                <span className="kompetenser-nummer">
                  {kategori.nummer}
                </span>

                <span
                  className="kompetenser-ikon"
                  aria-hidden="true"
                >
                  {kategori.ikon === "lager" && (
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M32 5 58 20 32 35 6 20Z" />
                      <path d="m12 30-6 5 26 15 26-15-6-5" />
                      <path d="m12 43-6 5 26 15 26-15-6-5" />
                    </svg>
                  )}

                  {kategori.ikon === "kub" && (
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M32 5 58 19v28L32 61 6 47V19Z" />
                      <path d="M6 19 32 34 58 19M32 34v27" />
                    </svg>
                  )}

                  {kategori.ikon === "dokument" && (
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="21" y="7" width="37" height="40" />
                      <rect x="6" y="19" width="40" height="39" />
                      <path d="M21 15h37M6 27h40" />
                    </svg>
                  )}

                  {kategori.ikon === "jordglob" && (
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="32" cy="32" r="27" />
                      <ellipse cx="32" cy="32" rx="12" ry="27" />
                      <path d="M5 32h54M32 5v54" />
                    </svg>
                  )}

                  {kategori.ikon === "bil" && (
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m12 27 6-15h28l6 15 5 7v16H7V34Z" />
                      <path d="M12 27h40M17 50v7H9v-7M55 50v7h-8v-7" />
                      <circle cx="17" cy="38" r="4" />
                      <circle cx="47" cy="38" r="4" />
                    </svg>
                  )}
                </span>

                <h3>{kategori.namn}</h3>
              </div>

              <ul className="kompetenser-lista">
                {kategori.kompetenser.map((kompetens) => (
                  <li key={kompetens}>
                    {kompetens}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
  {/* =====================================
          STATISTIK – TEKNIKER OCH METODER
      ===================================== */}

      <Statistik />
      {/* =====================================
          MÖRKT / LJUST LÄGE
      ===================================== */}

      <div className="om-mig-installningar">
        <button
          type="button"
          className="om-mig-temaknapp"
          onClick={() => setMorkt(!morkt)}
          aria-pressed={morkt}
        >
          {morkt ? "LJUST LÄGE" : "MÖRKT LÄGE"}

          <span aria-hidden="true">
            {morkt ? "☀" : "☾"}
          </span>
        </button>
      </div>

    </main>
  );
}

export default OmMig;
