
/* =========================================
   PROJEKTKORT – MODERN & STRUKTURERAD
   SVENSKA / ENGELSKA / FINSKA
========================================= */

import { Link } from "react-router-dom";
import "./ProjektKort.css";

/* =========================================
   ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    lasMer: "LÄS MER",
    seProjekt: "SE PROJEKTET",
    bildAlt: (titel) => `Projektbild för ${titel}`,
    lasMerAlt: (titel) => `Läs mer om ${titel}`,
    projektAlt: (titel) =>
      `Öppna projektet ${titel} i en ny flik`,
  },

  en: {
    lasMer: "READ MORE",
    seProjekt: "VIEW PROJECT",
    bildAlt: (titel) => `Project image for ${titel}`,
    lasMerAlt: (titel) => `Read more about ${titel}`,
    projektAlt: (titel) =>
      `Open the project ${titel} in a new tab`,
  },

  fi: {
    lasMer: "LUE LISÄÄ",
    seProjekt: "KATSO PROJEKTI",
    bildAlt: (titel) => `Projektin ${titel} kuva`,
    lasMerAlt: (titel) => `Lue lisää projektista ${titel}`,
    projektAlt: (titel) =>
      `Avaa projekti ${titel} uudessa välilehdessä`,
  },
};

/* =========================================
   PROJEKTKORT-KOMPONENT
========================================= */

function ProjektKort({
  id,
  titel,
  text,
  bild,
  lank,
  teknik,
  harReact,
  sprak = "sv",
}) {
  const oversattning =
    oversattningar[sprak] || oversattningar.sv;

  return (
    <article className="projekt-kort">

      {/* =====================================
          PROJEKTBILD
      ===================================== */}

      <div className="projekt-bildram">
        <img
          className="projekt-bild"
          src={bild}
          alt={oversattning.bildAlt(titel)}
          loading="lazy"
        />
      </div>

      {/* =====================================
          PROJEKTINFORMATION
      ===================================== */}

      <div className="projekt-info">

        <h3 className="projekt-kort-rubrik">
          {titel}
        </h3>

        <p className="projekt-kort-text">
          {text}
        </p>

        <span className="projekt-teknik">
          {teknik}
        </span>

        {/* =====================================
            REACT-ETIKETT
        ===================================== */}

        {harReact && (
          <span className="projekt-react-etikett">
            React
          </span>
        )}

        {/* =====================================
            LÄNK TILL PROJEKTDETALJ
        ===================================== */}

        <Link
          className="projekt-detalj-lank"
          to={`/projekt/${id}`}
          aria-label={oversattning.lasMerAlt(titel)}
        >
          {oversattning.lasMer}

          <span aria-hidden="true">
            {" →"}
          </span>
        </Link>

        {/* =====================================
            PDF-KNAPP
        ===================================== */}

        <a
          className="projekt-lank"
          href={lank}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={oversattning.projektAlt(titel)}
        >
          {oversattning.seProjekt}

          <span aria-hidden="true">
            ↗
          </span>
        </a>

      </div>
    </article>
  );
}

export default ProjektKort;
