
/* =========================================
   STUDIO92.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
========================================= */

import husstudio from "../assets/husstudio.png";
import perfektbild from "../assets/perfektbild.png";
import Väder from "../components/Vader";
import Varldsklockor from "../components/Varldsklockor";
import TodoLista from "../components/TodoLista";
import DagensTanke from "../components/DagensTanke";
import UrbanaPlatser from "../components/UrbanaPlatser";
import "./Studio92.css";

/* =========================================
   1. ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    etikett: "STUDIO92 / IDÉRUM",
    projekt: "PROJEKT / YTRUMME.",
    projektText1: "PLATS FÖR NÄSTA PROJEKT,",
    projektText2: "IDÉER ELLER VISUALISERINGAR",
    vader: "VÄDRET JUST NU.",
    ljust: "LJUST LÄGE",
    morkt: "MÖRKT LÄGE",
    husAlt: "Modernistisk byggnad mot salviagrön himmel",
    ansikteAlt: "Konstnärlig ansiktsillustration",
  },

  en: {
    etikett: "STUDIO92 / CREATIVE SPACE",
    projekt: "PROJECT / CREATIVE SPACE.",
    projektText1: "SPACE FOR THE NEXT PROJECT,",
    projektText2: "IDEAS OR VISUALIZATIONS",
    vader: "CURRENT WEATHER.",
    ljust: "LIGHT MODE",
    morkt: "DARK MODE",
    husAlt: "Modernist building against a sage-green sky",
    ansikteAlt: "Artistic illustration of a face",
  },

  fi: {
    etikett: "STUDIO92 / IDEATILA",
    projekt: "PROJEKTI / LUOVA TILA.",
    projektText1: "TILAA SEURAAVALLE PROJEKTILLE,",
    projektText2: "IDEOILLE TAI VISUALISOINNEILLE",
    vader: "SÄÄ JUURI NYT.",
    ljust: "VAALEA TILA",
    morkt: "TUMMA TILA",
    husAlt: "Modernistinen rakennus salvianvihreää taivasta vasten",
    ansikteAlt: "Taiteellinen kasvokuvitus",
  },
};

/* =========================================
   2. HUVUDKOMPONENT
========================================= */

function Studio92({ morkt, setMorkt, sprak = "sv" }) {
  const text = oversattningar[sprak] || oversattningar.sv;

  return (
    <main className="studio92">

      {/* STUDIO92 / IDÉRUM */}

      <span className="studio92-etikett">
        {text.etikett}
      </span>

      {/* RUBRIK */}

      <h1>
        STUDIO<sup>92</sup>
      </h1>

      {/* VÄRLDSKLOCKOR – EGEN SEKTION */}
      {/* WORLD TIME ÄR SAMMA PÅ ALLA SPRÅK */}

      <div className="studio92-klockor">
        <span className="studio92-world-time">
          WORLD
          <br />
          TIME
        </span>

        <Varldsklockor />
      </div>

      {/* TRE KOLUMNER – STUDIO92 */}

      <div className="studio92-layout">

        {/* VÄNSTER – ARKITEKTURBILD */}

        <div className="studio92-bild">
          <img
            src={husstudio}
            alt={text.husAlt}
          />

          <img
            src={perfektbild}
            className="studio92-ansikte"
            alt={text.ansikteAlt}
          />
        </div>

        {/* MITTEN – PROJEKT / YTRUMME */}

        <section className="studio92-projekt">
          <div className="studio92-sektionsrubrik">
            <span className="studio92-nummer">01</span>
            <h2>{text.projekt}</h2>
          </div>

          <div className="studio92-projekt-plats">
            <span>＋</span>

            <p>
              {text.projektText1}
              <br />
              {text.projektText2}
            </p>
          </div>
        </section>

        {/* HÖGER – ATT GÖRA */}

        <div className="studio92-hoger">
          <div className="studio92-tva-sektioner">

            {/* 02 – ATT GÖRA */}

            <TodoLista sprak={sprak} />

            {/* 03 – DAGENS TANKE */}

            <DagensTanke sprak={sprak} />

          </div>
        </div>

      </div>

      <div className="studio92-avdelare"></div>

      {/* 04 – URBANA PLATSER */}

      <UrbanaPlatser sprak={sprak} />

      {/* 05 – VÄDRET JUST NU */}

      <section className="studio92-vader">
        <div className="studio92-sektionsrubrik">
          <span className="studio92-nummer">05</span>
          <h2>{text.vader}</h2>
        </div>

        <Väder morkt={morkt} sprak={sprak} />
      </section>

      {/* MÖRKT / LJUST LÄGE */}

      <div className="om-mig-installningar">
        <button
          type="button"
          className="om-mig-temaknapp"
          onClick={() => setMorkt(!morkt)}
          aria-pressed={morkt}
        >
          {morkt ? text.ljust : text.morkt}

          <span aria-hidden="true">
            {morkt ? "☀" : "☾"}
          </span>
        </button>
      </div>

    </main>
  );
}

export default Studio92;
