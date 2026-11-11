/* =========================================
   OM MIG – EMMA LEHTINEN
   NORDISK PORTFOLIO
   SVENSKA / ENGELSKA / FINSKA
========================================= */

import Statistik from "../components/Statistik";
import { useState } from "react";
import { NAMN } from "../data/installningar";

import emmaBild from "../assets/emma.webp";
import perfektBild from "../assets/perfektbild.png";
import perfektBildMorkt from "../assets/perfekt2.png";

import "./OmMig.css";

/* =========================================
   ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    etikett: "OM MIG / BAKGRUND",
    rubrik: "Om mig",

    intro:
      "Jag har ett stort intresse för arkitektur, design och hållbar stadsutveckling, med fokus på hur den byggda miljön kan utformas för att skapa funktionella, visuella och hållbara lösningar.",

    lasMer: "LÄS MER",
    visaMindre: "VISA MINDRE",

    extra: [
      "Med kunskaper inom GIS, rumslig analys och visualisering kombinerar jag analytiskt tänkande med teknisk och kreativ kompetens. Jag tycker om att utforska hur data, form och samhällsstrukturer samverkar och hur komplex information kan omvandlas till tydliga analyser, kartor och visuella presentationer.",

      "Min bakgrund inom administration och kundservice har gett mig en god förmåga att arbeta strukturerat, noggrant och självständigt. Jag drivs av att utvecklas, lära mig nya verktyg och hitta lösningar där analys, design och samhällsutveckling möts.",

      "Min kreativa sida präglas av ett intresse för form, färg och gestaltning, där både naturen och den byggda miljön är viktiga inspirationskällor. Samspelet mellan naturliga och skapade miljöer väcker min nyfikenhet och inspirerar till nya perspektiv och idéer.",
    ],

    kompetenser: "KOMPETENSER.",
    kompetensEtikett: "VERKTYG / SPRÅK / KUNSKAP",

    kategorier: [
      "ADOBE",
      "DIGITAL",
      "OFFICE",
      "SPRÅK",
      "ÖVRIGT",
    ],

    sprak: [
      "Svenska",
      "Engelska",
      "Danska",
      "Norska",
      "Spanska",
    ],

    korkort: "B-körkort",

    ljust: "LJUST LÄGE",
    morkt: "MÖRKT LÄGE",

    portrattAlt: "Porträtt av",
    illustrationAlt:
      "Minimalistisk ansiktsillustration i nordisk retrostil",
  },

  en: {
    etikett: "ABOUT ME / BACKGROUND",
    rubrik: "About me",

    intro:
      "I have a strong interest in architecture, design and sustainable urban development, focusing on how the built environment can be designed to create functional, visually appealing and sustainable solutions.",

    lasMer: "READ MORE",
    visaMindre: "SHOW LESS",

    extra: [
      "With knowledge of GIS, spatial analysis and visualization, I combine analytical thinking with technical and creative skills. I enjoy exploring how data, design and social structures interact, and how complex information can be transformed into clear analyses, maps and visual presentations.",

      "My background in administration and customer service has given me the ability to work in a structured, thorough and independent way. I am motivated by personal development, learning new tools and finding solutions where analysis, design and urban development meet.",

      "My creative side is shaped by an interest in form, colour and design, with both nature and the built environment serving as important sources of inspiration. The interaction between natural and man-made environments sparks my curiosity and inspires new perspectives and ideas.",
    ],

    kompetenser: "SKILLS.",
    kompetensEtikett: "TOOLS / LANGUAGES / KNOWLEDGE",

    kategorier: [
      "ADOBE",
      "DIGITAL",
      "OFFICE",
      "LANGUAGES",
      "OTHER",
    ],

    sprak: [
      "Swedish",
      "English",
      "Danish",
      "Norwegian",
      "Spanish",
    ],

    korkort: "Category B driving licence",

    ljust: "LIGHT MODE",
    morkt: "DARK MODE",

    portrattAlt: "Portrait of",
    illustrationAlt:
      "Minimalist facial illustration in a Nordic retro style",
  },

  fi: {
    etikett: "MINUSTA / TAUSTA",
    rubrik: "Minusta",

    intro:
      "Olen erittäin kiinnostunut arkkitehtuurista, muotoilusta ja kestävästä kaupunkikehityksestä. Minua kiinnostaa erityisesti se, miten rakennettua ympäristöä voidaan suunnitella toimivaksi, visuaalisesti miellyttäväksi ja kestäväksi.",

    lasMer: "LUE LISÄÄ",
    visaMindre: "NÄYTÄ VÄHEMMÄN",

    extra: [
      "Paikkatietojärjestelmien (GIS), tilallisen analyysin ja visualisoinnin osaamiseni avulla yhdistän analyyttisen ajattelun tekniseen ja luovaan osaamiseen. Minua kiinnostaa tutkia, miten tieto, muotoilu ja yhteiskunnalliset rakenteet vaikuttavat toisiinsa ja miten monimutkaista tietoa voidaan muuttaa selkeiksi analyyseiksi, kartoiksi ja visuaalisiksi esityksiksi.",

      "Hallinnon ja asiakaspalvelun parissa saamani kokemus on kehittänyt kykyäni työskennellä järjestelmällisesti, huolellisesti ja itsenäisesti. Minua motivoi jatkuva kehittyminen, uusien työkalujen oppiminen ja ratkaisujen löytäminen analyysin, muotoilun ja kaupunkikehityksen rajapinnoilla.",

      "Luovaa puoltani kuvaa kiinnostus muotoihin, väreihin ja suunnitteluun. Sekä luonto että rakennettu ympäristö ovat minulle tärkeitä inspiraation lähteitä. Luonnollisten ja rakennettujen ympäristöjen vuorovaikutus herättää uteliaisuuteni ja innostaa löytämään uusia näkökulmia ja ideoita.",
    ],

    kompetenser: "OSAAMINEN.",
    kompetensEtikett: "TYÖKALUT / KIELET / OSAAMINEN",

    kategorier: [
      "ADOBE",
      "DIGITAALISET TYÖKALUT",
      "OFFICE",
      "KIELET",
      "MUUT",
    ],

    sprak: [
      "Ruotsi",
      "Englanti",
      "Tanska",
      "Norja",
      "Espanja",
    ],

    korkort: "B-ajokortti",

    ljust: "VAALEA TILA",
    morkt: "TUMMA TILA",

    portrattAlt: "Henkilökuva:",
    illustrationAlt:
      "Minimalistinen kasvojen kuvitus pohjoismaisessa retrotyylissä",
  },
};

/* =========================================
   OM MIG – HUVUDKOMPONENT
========================================= */

function OmMig({
  morkt,
  setMorkt,
  sprak = "sv",
}) {

  /* =====================================
     AKTUELLT SPRÅK
  ===================================== */

  const text =
    oversattningar[sprak] || oversattningar.sv;

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
      namn: text.kategorier[0],
      ikon: "lager",
      kompetenser: [
        "Illustrator",
        "Photoshop",
        "InDesign",
      ],
    },
    {
      nummer: "02",
      namn: text.kategorier[1],
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
      namn: text.kategorier[2],
      ikon: "dokument",
      kompetenser: [
        "Excel",
        "PowerPoint",
        "Word",
      ],
    },
    {
      nummer: "04",
      namn: text.kategorier[3],
      ikon: "jordglob",
      kompetenser: text.sprak,
    },
    {
      nummer: "05",
      namn: text.kategorier[4],
      ikon: "bil",
      kompetenser: [text.korkort],
    },
  ];

  return (
    <main
      className={`om-mig-innehall ${
        morkt ? "morkt-lage" : ""
      }`}
    >

      {/* =====================================
          ÖVRE ETIKETT
      ===================================== */}

      <span className="om-mig-etikett">
        {text.etikett}
      </span>

      {/* =====================================
          ÖVRE DEL – TRE KOLUMNER
      ===================================== */}

      <div className="om-mig-toppen">

        {/* VÄNSTER – PORTRÄTT */}

      <div className="om-mig-bildkolumn">
  <div className="om-mig-portrattram">
    <img
      className="om-mig-bild"
      src={emmaBild}
      alt={`${text.portrattAlt} ${NAMN}`}
    />

    <span
      className="om-mig-portrattlinje"
      aria-hidden="true"
    />
  </div>
</div>

        {/* MITTEN – PRESENTATION */}

        <section
          className="om-mig-sektion"
          aria-labelledby="om-mig-rubrik"
        >

          <h1
            id="om-mig-rubrik"
            className="om-mig-rubrik"
          >
            {text.rubrik}
          </h1>

          <div
            className="om-mig-rubriklinje"
            aria-hidden="true"
          />

          {/* INTRODUKTION */}

          <p className="om-mig-intro">
            {text.intro}
          </p>

          {/* LÄS MER / VISA MINDRE */}

          <button
            type="button"
            className="om-mig-lasmer"
            onClick={() => setVisas(!visas)}
            aria-expanded={visas}
            aria-controls="om-mig-extra"
          >
            {visas
              ? text.visaMindre
              : text.lasMer}

            <span aria-hidden="true">
              {visas ? "↑" : "→"}
            </span>
          </button>

          {/* EXTRA PRESENTATIONSTEXT */}

          <div
            id="om-mig-extra"
            className="om-mig-extra-text"
            hidden={!visas}
          >
            {text.extra.map((stycke, index) => (
              <p key={index}>
                {stycke}
              </p>
            ))}
          </div>

        </section>

        {/* HÖGER – ANSIKTSILLUSTRATION */}

        <div className="om-mig-illustration">
          <img
            src={
              morkt
                ? perfektBildMorkt
                : perfektBild
            }
            alt={text.illustrationAlt}
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
        aria-labelledby="kompetenser-rubrik"
      >

        <div className="kompetenser-header">

          <h2 id="kompetenser-rubrik">
            {text.kompetenser}
          </h2>

          <span>
            {text.kompetensEtikett}
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

                <h3>
                  {kategori.namn}
                </h3>

              </div>

              <ul className="kompetenser-lista">
                {kategori.kompetenser.map(
                  (kompetens) => (
                    <li key={kompetens}>
                      {kompetens}
                    </li>
                  )
                )}
              </ul>

            </article>
          ))}

        </div>
      </section>

      {/* =====================================
          STATISTIK
      ===================================== */}

      <Statistik sprak={sprak} />

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

          {morkt
            ? text.ljust
            : text.morkt}

          <span aria-hidden="true">
            {morkt ? "☀" : "☾"}
          </span>

        </button>

      </div>

    </main>
  );
}

export default OmMig;