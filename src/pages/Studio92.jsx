
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

function Studio92({ morkt, setMorkt }) {
  return (
    <main className="studio92">
  {/* STUDIO92 / IDÉRUM */}

  <span className="studio92-etikett">
    STUDIO92 / IDÉRUM
  </span>
      {/* RUBRIK */}

      <h1>
        STUDIO<sup>92</sup>
      </h1>
     {/* VÄRLDSKLOCKOR – EGEN SEKTION */}
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
      alt="Modernistisk byggnad mot salviagrön himmel"
    />
    <img
    src={perfektbild}
    className="studio92-ansikte"
    alt="Konstnärlig ansiktsillustration"
  />
  </div>

  {/* MITTEN – PROJEKT / YTRUMME */}
  <section className="studio92-projekt">
    <div className="studio92-sektionsrubrik">
      <span className="studio92-nummer">01</span>
      <h2>PROJEKT / YTRUMME.</h2>
    </div>

    <div className="studio92-projekt-plats">
      <span>＋</span>
      <p>
        PLATS FÖR NÄSTA PROJEKT,
        <br />
        IDÉER ELLER VISUALISERINGAR
      </p>
    </div>
  </section>

  {/* HÖGER – ATT GÖRA */}
  <div className="studio92-hoger">
    <div className="studio92-tva-sektioner">
            {/* 02 – ATT GÖRA */}
      <TodoLista />

      {/* 03 – DAGENS TANKE */}
      <DagensTanke />

    </div>
     
  </div>

</div>
<div className="studio92-avdelare"></div>
{/* 04 – URBANA PLATSER */}

<UrbanaPlatser />
{/* 05 – VÄDRET JUST NU */}

<section className="studio92-vader">
  <div className="studio92-sektionsrubrik">
    <span className="studio92-nummer">05</span>
    <h2>VÄDRET JUST NU.</h2>
  </div>

  <Väder morkt={morkt} />
</section>

      {/* MÖRKT / LJUST LÄGE */}

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

    </main>
  );
}

export default Studio92;
