
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
  setMorkt,
  sprak = "sv",
}) {

  /* =====================================
     SPRÅK – SVENSKA / ENGELSKA / FINSKA
  ===================================== */

  const temaTexter = {
    sv: {
      ljust: "LJUST LÄGE",
      morkt: "MÖRKT LÄGE",
    },
    en: {
      ljust: "LIGHT MODE",
      morkt: "DARK MODE",
    },
    fi: {
      ljust: "VAALEA TILA",
      morkt: "TUMMA TILA",
    },
  };

  const temaText = temaTexter[sprak] || temaTexter.sv;

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

        {morkt ? temaText.ljust : temaText.morkt}

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

        <Hero
          namn={fornamn(NAMN)}
          sprak={sprak}
        />

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

        <Projekt sprak={sprak} />

        <Raknare sprak={sprak} />

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
      <Hero
        namn={fornamn(NAMN)}
        sprak={sprak}
      />

      {/* PROJEKT */}
      <Projekt sprak={sprak} />

      {/* RÄKNARE */}
      <Raknare sprak={sprak} />

      {/* GITHUB-PROJEKT */}
      <GitHubRepon sprak={sprak} />

      {/* KNAPP FÖR MÖRKT / LJUST LÄGE */}
      {temaKnapp}

    </div>
  );
}

export default Hem;
