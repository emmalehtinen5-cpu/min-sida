
/* =========================================
   VISA MER – EMMA LEHTINEN
   NORDISK PORTFOLIO
========================================= */

import { useState } from "react";
import "./VisaMer.css";

function VisaMer() {
  const [visas, setVisas] = useState(false);

  return (
    <div className="visa-mer">

      {/* VISA MER / VISA MINDRE */}

      <button
        type="button"
        className="visa-mer-knapp"
        onClick={() => setVisas(!visas)}
        aria-expanded={visas}
        aria-controls="visa-mer-text"
      >
        {visas ? "Visa mindre" : "Visa mer"}
      </button>

      {/* TEXT SOM VISAS ELLER DÖLJS */}

      <p
        id="visa-mer-text"
        className="visa-mer-text"
        hidden={!visas}
      >
        Här är den dolda texten!
      </p>

    </div>
  );
}

export default VisaMer;
