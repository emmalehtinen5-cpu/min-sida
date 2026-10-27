
/* =========================================
   RÄKNARE – EMMA LEHTINEN
========================================= */

import { useState } from "react";
import "./Raknare.css";

function Raknare() {
  const [antal, setAntal] = useState(0);

  /* MINSKA – ALDRIG UNDER NOLL */
  function minska() {
    setAntal((tidigare) => Math.max(0, tidigare - 1));
  }

  return (
    <div className="raknare">

      <button
        type="button"
        onClick={minska}
        aria-label="Minska antal"
      >
        −
      </button>

      <span
        className={`raknare-antal ${
          antal > 0 ? "positivt" : "noll"
        }`}
        aria-live="polite"
      >
        {antal}
      </span>

      <button
        type="button"
        onClick={() => setAntal((tidigare) => tidigare + 1)}
        aria-label="Öka antal"
      >
        +
      </button>

      <button
        type="button"
        onClick={() => setAntal(0)}
      >
        Nollställ
      </button>

    </div>
  );
}

export default Raknare;
