
/* =========================================
   TODOLISTA.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
   VECKA 45 – LISTOR I STATE
========================================= */

import { useState, useEffect } from "react";
import "./TodoLista.css";
import TodoItem from "./TodoItem";

/* =========================================
   1. ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    rubrik: "ATT GÖRA.",
    placeholder: "Skriv en uppgift...",
    laggTill: "Lägg till",
    tomLista: "Inga uppgifter ännu.",
  },

  en: {
    rubrik: "TO DO.",
    placeholder: "Write a task...",
    laggTill: "Add",
    tomLista: "No tasks yet.",
  },

  fi: {
    rubrik: "TEHTÄVÄT.",
    placeholder: "Kirjoita tehtävä...",
    laggTill: "LISÄÄ",
    tomLista: "Ei vielä tehtäviä.",
  },
};

/* =========================================
   2. LÄS SPARADE UPPGIFTER FRÅN LOCALSTORAGE
========================================= */

function lasSparadeUppgifter() {
  try {
    const sparat = localStorage.getItem("minaUppgifter");

    if (!sparat) {
      return [];
    }

    const lista = JSON.parse(sparat);

    return Array.isArray(lista) ? lista : [];
  } catch (error) {
    console.error(
      "Kunde inte läsa sparade uppgifter:",
      error
    );

    return [];
  }
}

/* =========================================
   3. TODO-KOMPONENT
========================================= */

function TodoLista({ sprak = "sv" }) {
  const text = oversattningar[sprak] || oversattningar.sv;

  /* =====================================
     4. STATE – UPPGIFTER OCH TEXTFÄLT
  ===================================== */

  const [uppgifter, setUppgifter] = useState(
    () => lasSparadeUppgifter()
  );

  const [nyUppgift, setNyUppgift] = useState("");

  /* =====================================
     5. SPARA UPPGIFTER I LOCALSTORAGE
  ===================================== */

  useEffect(() => {
    try {
      localStorage.setItem(
        "minaUppgifter",
        JSON.stringify(uppgifter)
      );
    } catch (error) {
      console.error(
        "Kunde inte spara uppgifter:",
        error
      );
    }
  }, [uppgifter]);

  /* =====================================
     6. LÄGG TILL EN NY UPPGIFT
  ===================================== */

  function laggTillUppgift() {
    const innehall = nyUppgift.trim();

    if (!innehall) {
      return;
    }

    const uppgift = {
      id: crypto.randomUUID(),
      text: innehall,
    };

    setUppgifter((tidigare) => [
      ...tidigare,
      uppgift,
    ]);

    setNyUppgift("");
  }

  /* =====================================
     7. TA BORT EN UPPGIFT
  ===================================== */

  function taBortUppgift(id) {
    setUppgifter((tidigare) =>
      tidigare.filter(
        (uppgift) => uppgift.id !== id
      )
    );
  }

  /* =====================================
     8. VISA TODO-LISTAN
  ===================================== */

  return (
    <section className="todo-lista">

      {/* RUBRIK */}

      <div className="todo-rubrik">
        <span className="todo-nummer">02</span>
        <h2>{text.rubrik}</h2>
      </div>

      {/* TEXTFÄLT */}

      <input
        type="text"
        placeholder={text.placeholder}
        value={nyUppgift}
        onChange={(e) =>
          setNyUppgift(e.target.value)
        }
      />

      {/* LÄGG TILL-KNAPP */}

      <button
        type="button"
        onClick={laggTillUppgift}
      >
        {text.laggTill}
      </button>

      {/* TOM LISTA */}

      {uppgifter.length === 0 && (
        <p className="todo-tom">
          {text.tomLista}
        </p>
      )}

      {/* VISA ALLA UPPGIFTER */}

      <ul className="todo-uppgifter">
        {uppgifter.map((uppgift) => (
          <TodoItem
            key={uppgift.id}
            uppgift={uppgift}
            taBortUppgift={taBortUppgift}
          />
        ))}
      </ul>

    </section>
  );
}

export default TodoLista;
