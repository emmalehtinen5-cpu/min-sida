
/* =========================================
   PROJEKTKORT – MODERN & STRUKTURERAD
========================================= */

import { Link } from "react-router-dom";
import "./ProjektKort.css";

function ProjektKort({
  id,
  titel,
  text,
  bild,
  lank,
  teknik,
}) {
  return (
    <article className="projekt-kort">

      {/* PROJEKTBILD */}

      <div className="projekt-bildram">
        <img
          className="projekt-bild"
          src={bild}
          alt={`Projektbild för ${titel}`}
          loading="lazy"
        />
      </div>

      {/* PROJEKTINFORMATION */}

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

        {/* LÄNK TILL PROJEKTDETALJ */}

        <Link
          className="projekt-detalj-lank"
          to={`/projekt/${id}`}
          aria-label={`Läs mer om ${titel}`}
        >
          LÄS MER
          <span aria-hidden="true"> →</span>
        </Link>

        {/* BEFINTLIG PDF-KNAPP */}

        <a
          className="projekt-lank"
          href={lank}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Öppna projektet ${titel} i en ny flik`}
        >
          SE PROJEKTET
          <span aria-hidden="true">↗</span>
        </a>

      </div>
    </article>
  );
}

export default ProjektKort;
