
/* =========================================
   HEM.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
========================================= */

import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import Raknare from "../components/Raknare";
import Väder from "../components/Vader";


/* =========================================
   1. HEMKOMPONENT
========================================= */

function Hem({
  endastHero = false,
  utanHero = false,
  morkt,
  setMorkt
}) {


  /* =====================================
     2. MÖRKT / LJUST LÄGE – KNAPP
  ===================================== */

  const temaKnapp = (
    <div className="om-mig-installningar">

      <button
        type="button"
        className="om-mig-temaknapp"
        onClick={() => setMorkt(!morkt)}
        aria-pressed={morkt}
      >

        {morkt ? "LJUST LÄGE" : "MÖRKT LÄGE"}

        <span aria-hidden="true">
          {morkt ? "☀" : "☾"}
        </span>

      </button>

    </div>
  );


  /* =====================================
     3. ENDAST HERO
  ===================================== */

  if (endastHero) {
    return (
      <div className="hem-innehall">

        <Hero />

        {temaKnapp}

      </div>
    );
  }


  /* =====================================
     4. UTAN HERO
  ===================================== */

  if (utanHero) {
    return (
      <div className="hem-innehall">

        <Projekt />

        <Raknare />

        {temaKnapp}

      </div>
    );
  }


  /* =====================================
     5. HELA STARTSIDAN
  ===================================== */

  return (
    <div className="hem-innehall">

      {/* HERO */}
      <Hero />

      {/* PROJEKT */}
      <Projekt />

      {/* RÄKNARE */}
      <Raknare />

      {/* VÄDER – ANPASSAS TILL MÖRKT LÄGE */}
      <Väder morkt={morkt} />

      {/* KNAPP FÖR MÖRKT / LJUST LÄGE */}
      {temaKnapp}

    </div>
  );
}

export default Hem;
