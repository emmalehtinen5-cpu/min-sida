
/* =========================================
   PROJEKT FRÅN API – REACT
   HÄMTA DATA FRÅN EXPRESS-SERVERN
========================================= */


/* =========================================
   01 – IMPORTER
========================================= */

import { useState, useEffect } from "react";


/* =========================================
   02 – PROJEKTKOMPONENT
========================================= */

function ProjektFranApi() {

  /* =====================================
     STATE – PROJEKT, LADDNING OCH FEL
  ===================================== */

  const [projekt, setProjekt] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState(null);


  /* =====================================
     03 – HÄMTA PROJEKT FRÅN API
  ===================================== */

  function hamtaProjekt() {

    setLaddar(true);
    setFel(null);

    fetch("http://localhost:3001/projekt")
      .then((svar) => {
        if (!svar.ok) {
          throw new Error("Kunde inte hämta projekt");
        }
        return svar.json();
      })
      .then((data) => {
        setProjekt(data);
      })
      .catch(() => {
        setFel("Kunde inte hämta projekt");
      })
      .finally(() => {
        setLaddar(false);
      });
  }


  /* =====================================
     04 – HÄMTA VID SIDSTART
  ===================================== */

  useEffect(() => {
    hamtaProjekt();
  }, []);


  /* =====================================
     05 – VISA PROJEKTEN
  ===================================== */

  return (
    <section className="projekt-fran-api">

      <h2>PROJEKT FRÅN MITT API</h2>

      {/* =================================
          UPPDATERA PROJEKT
      ================================= */}

      <button
        type="button"
        onClick={hamtaProjekt}
        disabled={laddar}
      >
        {laddar ? "Laddar..." : "UPPDATERA"}
      </button>

      {laddar && <p>Laddar projekt...</p>}

      {fel && <p>{fel}</p>}

      {projekt.map((p) => (
        <article key={p.id}>
          <h3>{p.titel}</h3>
          <p>{p.beskrivning}</p>
          <p>{p.teknik.join(", ")}</p>
        </article>
      ))}

    </section>
  );
}


/* =========================================
   06 – EXPORTERA KOMPONENTEN
========================================= */

export default ProjektFranApi;
