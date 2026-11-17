
/* =========================================
   KONTAKT BACKEND – REACT
   KONTAKTFORMULÄR FÖR EXPRESS API
========================================= */

/* =========================================
   01 – IMPORTER
========================================= */

import { useState } from "react";
import "./KontaktBackend.css";

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
     STATE – STATUS OCH SKICKNING
  ===================================== */

  const [status, setStatus] = useState("");
  const [statusTyp, setStatusTyp] = useState("");
  const [skickar, setSkickar] = useState(false);

  /* =====================================
     03 – SKICKA FORMULÄRET TILL EXPRESS
  ===================================== */

  async function hanteraSkicka(e) {
    e.preventDefault();

    // Förhindra en ny skickning om en pågår
    if (skickar) {
      return;
    }

    // Rensa tidigare statusmeddelande
    setStatus("");
    setStatusTyp("");

    // Markera att skickningen har startat
    setSkickar(true);

    try {

      /* =================================
         SKICKA DATA TILL EXPRESS
      ================================= */

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

      /* =================================
         KONTROLLERA SERVERNS SVAR
      ================================= */

      if (!svar.ok) {
        const felData = await svar.json();

        throw new Error(
          felData.fel || "Kunde inte skicka meddelandet"
        );
      }

      const data = await svar.json();

      console.log("Svar från servern:", data);

      /* =================================
         LYCKAD SKICKNING
      ================================= */

      setStatus("Meddelandet har skickats!");
      setStatusTyp("success");

      // Töm formuläret
      setNamn("");
      setEmail("");
      setMeddelande("");

    } catch (error) {

      /* =================================
         FEL VID SKICKNING
      ================================= */

      console.error("Fel vid skickning:", error);

      setStatus(error.message);
      setStatusTyp("error");

    } finally {

      /* =================================
         AVSLUTA SKICKNINGEN
      ================================= */

      setSkickar(false);
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
            onChange={(e) => setNamn(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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

       
          <button type="submit" disabled={skickar}>
          {skickar ? "SKICKAR..." : "SKICKA MEDDELANDE"}
          </button>


      </form>

      {/* STATUSMEDDELANDE */}

      {status && (
        <p
          className={`kontakt-status ${statusTyp}`}
          role={statusTyp === "error" ? "alert" : "status"}
        >
          {status}
        </p>
      )}

    </section>
  );
}

/* =========================================
   05 – EXPORTERA KOMPONENTEN
========================================= */

export default KontaktBackend;
