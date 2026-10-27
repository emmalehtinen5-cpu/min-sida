
/* =========================================
   404 – MODERN & STRUKTURERAD
========================================= */

import "./EjHittad.css";
import { Link, useNavigate } from "react-router-dom";

function EjHittad() {
  const navigate = useNavigate();

  return (
    <section
      className="ej-hittad"
      aria-labelledby="ej-hittad-rubrik"
    >
      <div className="ej-hittad-innehall">

        {/* LITEN ETIKETT */}
        <span className="ej-hittad-etikett">
          NAVIGATION / FELMEDDELANDE
        </span>

        {/* STORT 404-NUMMER */}
        <span
          className="ej-hittad-nummer"
          aria-hidden="true"
        >
          404
        </span>

        {/* RUBRIK */}
        <h1 id="ej-hittad-rubrik">
          Sidan hittades inte
        </h1>

        {/* BESKRIVNING */}
        <p className="ej-hittad-text">
          Sidan du söker verkar inte finnas,
          eller så har adressen ändrats.
          Du kan gå tillbaka eller fortsätta
          till startsidan.
        </p>

        {/* NAVIGATIONSKNAPPAR */}
        <div className="ej-hittad-knappar">

          <Link
            to="/"
            className="ej-hittad-knapp"
          >
            Till startsidan
            <span aria-hidden="true">↗</span>
          </Link>

          <button
            type="button"
            className="ej-hittad-tillbaka"
            onClick={() => navigate(-1)}
          >
            ← Gå tillbaka
          </button>

        </div>

      </div>
    </section>
  );
}

export default EjHittad;
