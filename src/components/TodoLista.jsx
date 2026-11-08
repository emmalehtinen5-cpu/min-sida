
/* =========================================
   TODOLISTA.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
   VECKA 45 – LISTOR I STATE
========================================= */

import { useState, useEffect } from "react";
import "./TodoLista.css";
import TodoItem from "./TodoItem";

/* =========================================
   1. LÄS SPARADE UPPGIFTER FRÅN LOCALSTORAGE
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
   2. TODO-KOMPONENT
========================================= */

function TodoLista() {

  /* =====================================
     3. STATE – UPPGIFTER OCH TEXTFÄLT
  ===================================== */

  // Läs sparade uppgifter när komponenten startar
  const [uppgifter, setUppgifter] = useState(
    () => lasSparadeUppgifter()
  );

  const [nyUppgift, setNyUppgift] = useState("");

  /* =====================================
     4. SPARA UPPGIFTER I LOCALSTORAGE
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
     5. LÄGG TILL EN NY UPPGIFT
  ===================================== */

  function laggTillUppgift() {
    const text = nyUppgift.trim();

    // Lägg inte till tomma uppgifter
    if (!text) {
      return;
    }

    // Skapa en ny uppgift
    const uppgift = {
      id: crypto.randomUUID(),
      text: text,
    };

    // Lägg till uppgiften i listan
    setUppgifter((tidigare) => [
      ...tidigare,
      uppgift,
    ]);

    // Töm textfältet
    setNyUppgift("");
  }

  /* =====================================
     6. TA BORT EN UPPGIFT
  ===================================== */

  function taBortUppgift(id) {
    setUppgifter((tidigare) =>
      tidigare.filter(
        (uppgift) => uppgift.id !== id
      )
    );
  }

  /* =====================================
     7. VISA TODO-LISTAN
  ===================================== */

  return (
    <section className="todo-lista">

      {/* RUBRIK */}
      <div className="todo-rubrik">
    <span className="todo-nummer">02</span>
        <h2>ATT GÖRA.</h2>
        </div>

      {/* TEXTFÄLT */}
      <input
        type="text"
        placeholder="Skriv en uppgift..."
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
        Lägg till
      </button>
{/* VISA ALLA UPPGIFTER */}
{uppgifter.length === 0 && (
  <p className="todo-tom">
    Inga uppgifter ännu.
  </p>
)}
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
