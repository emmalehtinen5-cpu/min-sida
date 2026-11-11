
import { useState, useEffect } from "react";
import "./DagensTanke.css";

/* =========================================
   1. ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    rubrik: "DAGENS TANKE.",
    etikett: "EN IDÉ, EN REFLEKTION ELLER EN TANKE.",
    placeholder: "Vad tänker du på idag?",
    spara: "SPARA TANKE",
    taBort: "TA BORT",
  },

  en: {
    rubrik: "THOUGHT OF THE DAY.",
    etikett: "AN IDEA, A REFLECTION OR A THOUGHT.",
    placeholder: "What's on your mind today?",
    spara: "SAVE THOUGHT",
    taBort: "REMOVE",
  },

  fi: {
    rubrik: "PÄIVÄN AJATUS.",
    etikett: "IDEA, POHDINTA TAI AJATUS.",
    placeholder: "Mitä ajattelet tänään?",
    spara: "TALLENNA AJATUS",
    taBort: "POISTA",
  },
};

/* =========================================
   2. HÄMTA SPARADE TANKAR
========================================= */

function hamtaTankar() {
  try {
    const sparat = localStorage.getItem("studio92-tankar");
    return sparat ? JSON.parse(sparat) : [];
  } catch {
    return [];
  }
}

/* =========================================
   3. HUVUDKOMPONENT
========================================= */

function DagensTanke({ sprak = "sv" }) {
  const text = oversattningar[sprak] || oversattningar.sv;

  const [tankar, setTankar] = useState(hamtaTankar);
  const [nyTanke, setNyTanke] = useState("");

  /* =====================================
     SPARA TANKAR I LOCALSTORAGE
  ===================================== */

  useEffect(() => {
    localStorage.setItem(
      "studio92-tankar",
      JSON.stringify(tankar)
    );
  }, [tankar]);

  /* =====================================
     SPARA NY TANKE
  ===================================== */

  function sparaTanke() {
    const innehall = nyTanke.trim();
    if (!innehall) return;

    const tanke = {
      id: crypto.randomUUID(),
      text: innehall,
      datum: new Date().toLocaleDateString("sv-SE"),
    };

    setTankar((tidigare) => [tanke, ...tidigare]);
    setNyTanke("");
  }

  /* =====================================
     TA BORT TANKE
  ===================================== */

  function taBortTanke(id) {
    setTankar((tidigare) =>
      tidigare.filter((tanke) => tanke.id !== id)
    );
  }

  return (
    <section className="dagens-tanke">

      {/* RUBRIK */}

      <div className="tanke-rubrik">
        <span className="tanke-nummer">03</span>
        <h2>{text.rubrik}</h2>
      </div>

      {/* SKRIV NY TANKE */}

      <div className="tanke-innehall">
        <label htmlFor="ny-tanke">
          {text.etikett}
        </label>

        <textarea
          id="ny-tanke"
          placeholder={text.placeholder}
          value={nyTanke}
          onChange={(e) => setNyTanke(e.target.value)}
          rows={4}
        />

        <button type="button" onClick={sparaTanke}>
          {text.spara}
        </button>
      </div>

      {/* SPARADE TANKAR */}

      <div className="tanke-lista">
        {tankar.map((tanke) => (
          <article className="tanke-kort" key={tanke.id}>
            <span className="tanke-datum">
              {tanke.datum}
            </span>

            <p>{tanke.text}</p>

            <button
              type="button"
              onClick={() => taBortTanke(tanke.id)}
            >
              {text.taBort}
            </button>
          </article>
        ))}
      </div>

    </section>
  );
}

export default DagensTanke;
