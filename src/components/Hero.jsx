
import { Link } from "react-router-dom";
import Valkommen from "./Valkommen";
import arkitekturBild from "../assets/bildsspel.png";
import "./Hero.css";
import granGoddag from "../assets/gran-goddag.png";

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
    bildAlt:
      "Arkitekturillustration med byggnader, vatten och landskap",
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
    bildAlt:
      "Architectural illustration with buildings, water and landscape",
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
    bildAlt:
      "Arkkitehtuurikuvitus, jossa on rakennuksia, vettä ja maisemaa",
    citat:
      "Luova tila, jossa datasta syntyy kaupunkia ja analyysi saa muodon.",
  },
};

/* =========================================
   AUTOMATISK HÄLSNING EFTER TID OCH SPRÅK
========================================= */

function hamtaHalsning(sprak) {
  const timme = new Date().getHours();
  const texter = oversattningar[sprak] || oversattningar.sv;

  if (timme < 10) {
    return texter.morgon;
  }

  if (timme < 18) {
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
    <section
      className="hero"
      aria-labelledby="hero-rubrik"
    >
      <div className="hero-container">

        {/* =====================================
            VÄNSTER – PRESENTATION
        ===================================== */}

        <div className="hero-innehall">

          <div
            className="hero-ovre-linje"
            aria-hidden="true"
          />

          {/* =====================================
              HÄLSNING – FINSK RETRODESIGN
          ===================================== */}

          <div className="hero-halsning-design">

            {/* SOL / MÅNE OCH TRE GRANAR */}

            <div
              className="hero-halsning-natur"
              aria-hidden="true"
            >

              <div className="hero-halsning-sol" />

              {/* NATURLIGA GRANAR OCH MARKVEGETATION */}

              <img
                className="hero-halsning-granar"
                src={granGoddag}
                alt=""
              />

            </div>

            {/* AUTOMATISK HÄLSNING */}

            <p className="hero-halsning">
              {hamtaHalsning(sprak)}
            </p>

            {/* TRE RAKA HORISONTELLA LINJER */}

            <div
              className="hero-halsning-linjer"
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </div>

          </div>

          {/* =====================================
              UNDERRUBRIK
          ===================================== */}

          <p className="hero-underrubrik">
            {text.underrubrik}
          </p>

          <span className="hero-etikett">
            {text.etikett}
          </span>

          {/* =====================================
              HUVUDRUBRIK
          ===================================== */}

          <h1
            className="hero-rubrik"
            id="hero-rubrik"
          >
            <span>
              {namn?.toUpperCase()} LEHTINEN
            </span>
          </h1>

          <div
            className="hero-linje"
            aria-hidden="true"
          />

          {/* =====================================
              PRESENTATIONSTEXT
          ===================================== */}

          <div className="hero-introtext">
            <Valkommen
              showSkills={false}
              sprak={sprak}
            />
          </div>

          {/* =====================================
              KNAPP – SE MINA PROJEKT
          ===================================== */}

          <Link
            className="kontakt-knapp"
            to="/#projekt"
          >
            {text.projektKnapp}

            <span aria-hidden="true">
              ↓
            </span>
          </Link>

        </div>

        {/* =====================================
            HÖGER – ARKITEKTURBILD
        ===================================== */}

        <div className="hero-bildkolumn">

          <div className="hero-bildram">

            {/* DEKORATIVA SALVIAGRÖNA FORMER */}

            <div
              className="hero-form hero-form-bakre"
              aria-hidden="true"
            />

            <div
              className="hero-form hero-form-framre"
              aria-hidden="true"
            />

            <div
              className="hero-form hero-form-nedre"
              aria-hidden="true"
            />

            {/* ARKITEKTURILLUSTRATION */}

            <img
              className="hero-bild"
              src={arkitekturBild}
              alt={text.bildAlt}
            />

          </div>

          {/* =====================================
              CITAT UNDER ILLUSTRATIONEN
          ===================================== */}

          <div className="hero-citatomrade">

            <blockquote className="hero-citat">
              {text.citat}
            </blockquote>

            <div
              className="hero-citat-linje"
              aria-hidden="true"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
