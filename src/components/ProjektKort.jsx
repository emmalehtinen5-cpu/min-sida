
/* =========================================
   PROJEKTKORT – MODERN & STRUKTURERAD
========================================= */

import "./ProjektKort.css";

function ProjektKort({
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

        {/* PROJEKTKNAPP */}

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
