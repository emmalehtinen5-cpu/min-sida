
import { Link } from "react-router-dom";
import Valkommen from "./Valkommen";
import blad from "../assets/blad1.png";
import nolliBild from "../assets/NOLL.MAP.5.png";
import "./Hero.css";
import hushusBild from "../assets/hushus.png";

import {
  Layers2,
  Building2,
  ChartNoAxesCombined,
  Leaf,
  PenTool,
} from "lucide-react";

/* =========================================
   HERO – SVENSKA / ENGELSKA / FINSKA
========================================= */

const oversattningar = {
  sv: {
    morgon: "God morgon",
    dag: "God dag",
    kvall: "God kväll",
    underrubrik: "arkitektur. kommunikation. visualisering.",
    etikett: "HEM / INTRODUKTION",
    projektKnapp: "SE MINA PROJEKT",
    bildAlt: "Giambattista Nollis historiska karta över Rom från 1748",
    citat:
      "En kreativ plats där data blir till stad och analys blir till form.",
  },

  en: {
    morgon: "Good morning",
    dag: "Good afternoon",
    kvall: "Good evening",
    underrubrik: "architecture. communication. visualization.",
    etikett: "HOME / INTRODUCTION",
    projektKnapp: "VIEW MY PROJECTS",
    bildAlt: "Giambattista Nolli's historical map of Rome from 1748",
    citat:
      "A creative space where data becomes a city and analysis takes shape.",
  },

  fi: {
    morgon: "Hyvää huomenta",
    dag: "Hyvää päivää",
    kvall: "Hyvää iltaa",
    underrubrik: "arkkitehtuuri. viestintä. visualisointi.",
    etikett: "ETUSIVU / ESITTELY",
    projektKnapp: "KATSO PROJEKTINI",
    bildAlt: "Giambattista Nollin historiallinen Rooman kartta vuodelta 1748",
    citat:
      "Luova tila, jossa datasta syntyy kaupunkia ja analyysi saa formen.",
  },
};

/* =========================================
   AUTOMATISK HÄLSNING EFTER TID OCH SPRÅK
========================================= */

function hamtaHalsning(sprak) {
  const nu = new Date();

  const timme = nu.getHours();
  const minut = nu.getMinutes();

  const aktuellTid = timme * 60 + minut;

  const morgonStart = 4 * 60 + 30;
  const dagStart = 10 * 60;
  const kvallStart = 18 * 60 + 30;

  const texter = oversattningar[sprak] || oversattningar.sv;

  if (aktuellTid >= morgonStart && aktuellTid < dagStart) {
    return texter.morgon;
  }

  if (aktuellTid >= dagStart && aktuellTid < kvallStart) {
    return texter.dag;
  }

  return texter.kvall;
}

/* =========================================
   HERO-KOMPONENT
========================================= */

function Hero({ namn, sprak = "sv" }) {
  const text = oversattningar[sprak] || oversattningar.sv;

  return (
    <section className="hero" aria-labelledby="hero-rubrik">

      <div className="hero-container">

        {/* =====================================
            VÄNSTER – PRESENTATION
        ===================================== */}

        <div className="hero-innehall">
    
          {/* HÄLSNING – FINSK RETRODESIGN */}

          <div className="hero-halsning-design">

            <div
              className="hero-halsning-natur"
              aria-hidden="true"
            >
              <img
                className="hero-halsning-blad"
                src={blad}
                alt=""
              />
            </div>

            <p className="hero-halsning">
              {hamtaHalsning(sprak)}
            </p>

          </div>

          {/* UNDERRUBRIK */}

          <p className="hero-underrubrik">
            {text.underrubrik}
          </p>

          <span className="hero-etikett">
            {text.etikett}
          </span>
                    <span className="hero-etikett">
            {text.etikett}
          </span>
             <div className="emma-kort">
              {/* ÖVRE RUBRIK MED LINJER */}

<div className="emma-kort-ovrerubrik">
  <span>ARKITEKTUR. KOMMUNIKATION. VISUALISERING.</span>
</div>
          {/* HUVUDRUBRIK – EMMA LEHTINEN */}

          <h1
            className="hero-rubrik"
            id="hero-rubrik"
          >
            <span>
              {namn?.toUpperCase() || "EMMA"} LEHTINEN
            </span>
          </h1>
          <img
  className="emma-kort-bild"
  src={hushusBild}
  alt="Svartvit arkitekturbild"
/>
              {/* PRESENTATIONSTEXT */}

<div className="hero-introtext">
  <Valkommen
    showSkills={false}
    showFraga={false}
    sprak={sprak}
  />
</div>
          {/* PROJEKTKNAPP */}

          <Link
  className="kontakt-knapp"
  to="/#projekt"
>
  {text.projektKnapp}
  <span className="kontakt-knapp-pil" aria-hidden="true">
    ↓
  </span>
</Link>
</div>
        </div>

        {/* =====================================
            HÖGER – NOLLI MAP
        ===================================== */}

        <div className="hero-bildkolumn">

          {/* GEMENSAM DUBBELRAM */}

          <div className="nolli-kort">

            {/* =====================================
                ÖVRE RUBRIK
            ===================================== */}

            <div className="nolli-ovre-rubrik">
              <span>PIANTA GRANDE DI ROMA</span>
            </div>

            {/* =====================================
                NOLLI-KARTA
            ===================================== */}

            <div className="hero-bildram">
              <img
                className="hero-bild"
                src={nolliBild}
                alt={text.bildAlt}
              />
            </div>

            {/* =====================================
                NOLLI-INFORMATION
            ===================================== */}

            <div className="nolli-information">

              {/* VERTIKAL LINJE */}

              <div
                className="nolli-vertikal-linje"
                aria-hidden="true"
              />
              {/* =====================================
                    NOLLI MAP – TITEL, LINJE OCH ÅRTAL
                  ===================================== */}

                      <div className="nolli-titel">
                      <span>NOLLI MAP</span>
                       <div
                      className="nolli-titel-linje"
                      aria-hidden="true"
                      />
                      <span className="nolli-titel-artal">
                       GIOVANNI BATTISTA
                       <br />
                       NOLLI, 1748
                       </span>
                        </div>
                     <p className="nolli-beskrivning">
                <strong>
                  The Nolli Map (<em>Pianta Grande di Roma</em>)
                </strong>{" "}
                is a historic map of Rome created by{" "}
                <strong>
                  Giovanni battista Nolli in 1748.
                </strong>{" "}
                It is renowned for its innovative depiction of the city,
                where public spaces, streets, and the interiors of
                important buildings are shown together, highlighting
                the close relationship between architecture, space,
                and urban life. Its detailed representation of both
                public and private spaces offers a unique perspective
                on the spatial organization of eighteenth-century Rome.

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================
          FEM KOMPETENSOMRÅDEN
      ===================================== */}

      <div className="hero-kompetensrad">

        <div className="hero-kompetens">
          <Layers2 aria-hidden="true" />
          <span>ANALYS &amp; STRATEGI</span>
        </div>

        <div className="hero-kompetens">
          <Building2 aria-hidden="true" />
          <span>ARKITEKTUR &amp; STADSUTVECKLING</span>
        </div>

        <div className="hero-kompetens">
          <ChartNoAxesCombined aria-hidden="true" />
          <span>VISUALISERING &amp; KOMMUNIKATION</span>
        </div>

        <div className="hero-kompetens">
          <Leaf aria-hidden="true" />
          <span>HÅLLBAR UTVECKLING</span>
        </div>

        <div className="hero-kompetens">
          <PenTool aria-hidden="true" />
          <span>KONCEPT &amp; GESTALTNING</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;
