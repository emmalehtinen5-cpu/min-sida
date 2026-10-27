
import { Link } from "react-router-dom";
import Valkommen from "./Valkommen";
import arkitekturBild from "../assets/bildsspel.png";
import "./Hero.css";

function Hero() {
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

          <p className="hero-underrubrik">
            arkitektur. kommunikation. visualisering.
          </p>

          <h1
            className="hero-rubrik"
            id="hero-rubrik"
          >
            <span>EMMA</span>
            <span>LEHTINEN</span>
          </h1>

          <div
            className="hero-linje"
            aria-hidden="true"
          />

          <div className="hero-introtext">
            <Valkommen showSkills={false} />
          </div>

          <Link
            className="hero-knapp"
            to="/projekt"
          >
            <span>SE MINA PROJEKT</span>
            <span aria-hidden="true">→</span>
          </Link>

        </div>

        {/* =====================================
            HÖGER – STOR ARKITEKTURBILD
        ===================================== */}

        <div className="hero-bildkolumn">

          <div className="hero-bildram">

            {/* Överlappande salviagröna former */}

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

            {/* Stor sammanhängande illustration */}

            <img
              className="hero-bild"
              src={arkitekturBild}
              alt="Arkitekturillustration med byggnader, vatten och landskap"
            />

          </div>

          {/* =====================================
              CITAT UNDER ILLUSTRATIONEN
          ===================================== */}

          <div className="hero-citatomrade">

            <blockquote className="hero-citat">
              En kreativ plats där data blir till stad
              och analys blir till form.
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
