
/* =========================================
   KONTAKT BACKEND – REACT
   KONTAKTFORMULÄR FÖR EXPRESS API
========================================= */


/* =========================================
   01 – IMPORTER
========================================= */

import { useState } from "react";


/* =========================================
   02 – KONTAKTKOMPONENT
========================================= */

function KontaktBackend() {

  /* =====================================
     STATE – FORMULÄRETS FÄLT
  ===================================== */

  const [namn, setNamn] = useState("");
  const [email, setEmail] = useState("");
  const [meddelande, setMeddelande] = useState("");


  /* =====================================
     03 – HANTERA FORMULÄRET
  ===================================== */

  
/* =====================================
   03 – SKICKA FORMULÄRET TILL EXPRESS
===================================== */

async function hanteraSkicka(e) {
  e.preventDefault();

  try {

    // Skicka formulärdata till backend
    const svar = await fetch(
      "http://localhost:3001/kontakt",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          namn: namn,
          email: email,
          text: meddelande
        })
      }
    );

        
/* =====================================
   KONTROLLERA SERVERNS SVAR
===================================== */

if (!svar.ok) {
  const felData = await svar.json();

  throw new Error(
    felData.fel || "Kunde inte skicka meddelandet"
  );
}

    const data = await svar.json();

    console.log("Svar från servern:", data);
    alert("Meddelandet har skickats!");

    // Töm formuläret
    setNamn("");
    setEmail("");
    setMeddelande("");

  } catch (error) {

  console.error("Fel vid skickning:", error);

  alert(error.message);

}
}
  /* =====================================
     04 – VISA KONTAKTFORMULÄRET
  ===================================== */

  return (
    <section className="kontakt-backend">

      <h2>KONTAKTFORMULÄR – EXPRESS API</h2>

      <form onSubmit={hanteraSkicka}>

        {/* NAMN */}

        <div>
          <label htmlFor="backend-namn">
            Namn
          </label>

          <input
            type="text"
            id="backend-namn"
            value={namn}
            onChange={(e) =>
              setNamn(e.target.value)
            }
          />
        </div>

        {/* E-POST */}

        <div>
          <label htmlFor="backend-email">
            E-post
          </label>

          <input
            type="email"
            id="backend-email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>

        {/* MEDDELANDE */}

        <div>
          <label htmlFor="backend-meddelande">
            Meddelande
          </label>

          <textarea
            id="backend-meddelande"
            rows={5}
            value={meddelande}
            onChange={(e) =>
              setMeddelande(e.target.value)
            }
          />
        </div>

        {/* SKICKA-KNAPP */}

        <button type="submit">
          SKICKA MEDDELANDE
        </button>

      </form>

    </section>
  );
}


/* =========================================
   05 – EXPORTERA KOMPONENTEN
========================================= */

export default KontaktBackend;
