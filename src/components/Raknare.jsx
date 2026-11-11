
/* =========================================
   RÄKNARE – EMMA LEHTINEN
   SVENSKA / ENGELSKA / FINSKA
========================================= */

import { useState } from "react";
import "./Raknare.css";

/* =========================================
   ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    minska: "Minska antal",
    oka: "Öka antal",
    nollstall: "Nollställ",
  },

  en: {
    minska: "Decrease count",
    oka: "Increase count",
    nollstall: "Reset",
  },

  fi: {
    minska: "Vähennä lukumäärää",
    oka: "Lisää lukumäärää",
    nollstall: "Nollaa",
  },
};

/* =========================================
   RÄKNARKOMPONENT
========================================= */

function Raknare({ sprak = "sv" }) {
  const [antal, setAntal] = useState(0);

  const text =
    oversattningar[sprak] || oversattningar.sv;

  /* =====================================
     MINSKA – ALDRIG UNDER NOLL
  ===================================== */

  function minska() {
    setAntal((tidigare) =>
      Math.max(0, tidigare - 1)
    );
  }

  /* =====================================
     ÖKA ANTAL
  ===================================== */

  function oka() {
    setAntal((tidigare) => tidigare + 1);
  }

  /* =====================================
     NOLLSTÄLL RÄKNAREN
  ===================================== */

  function nollstall() {
    setAntal(0);
  }

  /* =====================================
     VISA RÄKNAREN
  ===================================== */

  return (
    <div className="raknare">

      {/* MINSKA */}

      <button
        type="button"
        onClick={minska}
        aria-label={text.minska}
      >
        −
      </button>

      {/* ANTAL */}

      <span
        className={`raknare-antal ${
          antal > 0 ? "positivt" : "noll"
        }`}
        aria-live="polite"
      >
        {antal}
      </span>

      {/* ÖKA */}

      <button
        type="button"
        onClick={oka}
        aria-label={text.oka}
      >
        +
      </button>

      {/* NOLLSTÄLL */}

      <button
        type="button"
        onClick={nollstall}
      >
        {text.nollstall}
      </button>

    </div>
  );
}

export default Raknare;
