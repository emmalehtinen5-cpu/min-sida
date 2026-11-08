
/* =========================================
   HEM.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
========================================= */

import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import Raknare from "../components/Raknare";
import GitHubRepon from "../components/GitHubRepon";
import { NAMN } from "../data/installningar";
import { fornamn } from "../utils/text";

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

        <Hero  namn={fornamn(NAMN)} />

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
      <Hero  namn={fornamn(NAMN)} />

      {/* PROJEKT */}
      <Projekt />

      {/* RÄKNARE */}
      <Raknare />

      {/* GITHUB-PROJEKT */}
      <GitHubRepon />

      {/* KNAPP FÖR MÖRKT / LJUST LÄGE */}
      {temaKnapp}

    </div>
  );
}

export default Hem;
