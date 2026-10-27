
/* =========================================
   OM MIG – EMMA LEHTINEN
   NORDISK PORTFOLIO
========================================= */

import { useState } from "react";

import emmaBild from "../assets/emma.webp";
import blomsterBild from "../assets/blomster.png";
import kompetenserBild from "../assets/gay.png";

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
    "Adobe",
    "Digital",
    "Office",
    "Språk",
    "Övrigt",
  ];

  return (
    <main
      className={`om-mig-innehall ${
        morkt ? "morkt-lage" : ""
      }`}
    >

      {/* =====================================
          ÖVRE DEL – TRE KOLUMNER
      ===================================== */}

      <div className="om-mig-toppen">

        {/* =====================================
            VÄNSTER – ORIGINALPORTRÄTT
            MED GRÖN BOX OCH DEKORATIVA LINJER
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
            HÖGER – BLOMSTERKIOSKEN
        ===================================== */}

        <div className="om-mig-illustration">

          <img
            src={blomsterBild}
            alt="Illustration av Blomsterkiosken"
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
          KOMPETENSER
      ===================================== */}

      <section
        className="om-mig-kompetenser"
        aria-label="Kompetenser och programkunskaper"
      >

        {/* DATOR – HELA KOMPETENSBILDEN */}

        <img
          src={kompetenserBild}
          alt="Mina kompetenser inom Adobe, digitala verktyg, Office, språk och B-körkort"
          className="om-mig-kompetensbild"
        />

        {/* =====================================
            MOBIL – FEM BILDUTSNITT
        ===================================== */}

        <div className="om-mig-kompetensmobil">

          {kategorier.map((kategori, index) => (

            <div
              className="om-mig-kompetenskort"
              key={kategori}
            >

              <div
                className="om-mig-kompetensutsnitt"
                role="img"
                aria-label={`Kompetensområde: ${kategori}`}
                style={{
                  backgroundImage: `url(${kompetenserBild})`,
                  backgroundPosition: `${index * 25}% center`,
                }}
              />

            </div>

          ))}

        </div>

      </section>

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
