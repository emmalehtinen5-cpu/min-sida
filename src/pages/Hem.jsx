
/* =========================================
   HEM.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
========================================= */

import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import Raknare from "../components/Raknare";

function Hem({
  endastHero = false,
  utanHero = false,
  morkt,
  setMorkt
}) {

  /* =====================================
     MÖRKT / LJUST LÄGE – KNAPP
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
     ENDAST HERO
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
     UTAN HERO
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
     HELA STARTSIDAN
  ===================================== */

  return (
    <div className="hem-innehall">

      <Hero />

      <Projekt />

      <Raknare />

      {/* MÖRKT / LJUST LÄGE */}

      {temaKnapp}

    </div>
  );
}

export default Hem;
