
/* =========================================
   KONTAKT.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
   LJUST OCH MÖRKT LÄGE
========================================= */

import { useState } from "react";

import arkitekturBild from "../assets/bildsspel.png";

import "./Kontakt.css";

function Kontakt({ morkt, setMorkt }) {

  /* =====================================
     FORMULÄRETS TILLSTÅND
  ===================================== */

  const [namn, setNamn] = useState("");
  const [epost, setEpost] = useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skickat, setSkickat] = useState(false);
  const [fel, setFel] = useState("");

  /* =====================================
     FORMULÄRVALIDERING
  ===================================== */

  const hanteraKlick = (e) => {
    e.preventDefault();

    if (
      !namn.trim() ||
      !epost.trim() ||
      !meddelande.trim()
    ) {
      setFel(
        "Du måste fylla i alla fält innan du fortsätter."
      );
      return;
    }

    const epostMonster = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!epostMonster.test(epost.trim())) {
      setFel("Ange en giltig e-postadress.");
      return;
    }

    setFel("");

if (meddelande.trim().length < 10) {
  setFel("Meddelandet måste innehålla minst 10 tecken.");
  return;
}


    // Formuläret är ännu inte kopplat
    // till någon mejltjänst.
    setSkickat(true);
  };

  return (
    <section
      className="kontakt1"
      aria-labelledby="kontakt-rubrik"
    >

      {/* =====================================
          VÄNSTER – RUBRIK OCH FORMULÄR
      ===================================== */}

      <div className="kontakt-vanster">

        <div className="kontakt-info">

          <span className="kontakt-etikett">
            KONTAKT / SAMARBETE
          </span>

          <h2 id="kontakt-rubrik">
            Kontakta mig
          </h2>

          <p className="kontakt-text">
            Har du en fråga, en idé eller vill diskutera
            ett möjligt samarbete? 
          </p>
         <p className="kontakt-text">Hör gärna av dig.
          </p>

          <p className="kontakt-underrubrik">
            Jag är öppen för nya idéer, möjligheter och samarbeten.
          </p>

        </div>

        {/* =====================================
            KONTAKTFORMULÄR
        ===================================== */}

        <div className="kontakt-formular">

          {!skickat ? (

            <form
              className="kontakt-form"
              onSubmit={hanteraKlick}
              noValidate
            >

              {/* NAMN */}

              <div className="kontakt-falt">

                <label htmlFor="namn">
                  Namn
                </label>

                <input
                  type="text"
                  id="namn"
                  name="namn"
                  autoComplete="name"
                  placeholder="Ditt namn"
                  value={namn}
                  onChange={(e) => setNamn(e.target.value)}
                  required
                />

              </div>

              {/* E-POST */}

              <div className="kontakt-falt">

                <label htmlFor="epost">
                  E-post
                </label>

                <input
                  type="email"
                  id="epost"
                  name="epost"
                  autoComplete="email"
                  placeholder="namn@exempel.se"
                  value={epost}
                  onChange={(e) => setEpost(e.target.value)}
                  required
                />

              </div>

              {/* MEDDELANDE */}

              <div className="kontakt-falt">

                <label htmlFor="meddelande">
                  Meddelande
                </label>

                <textarea
                   id="meddelande"
                  name="meddelande"
                  rows={5}
                  placeholder="Skriv ditt meddelande här..."
                  value={meddelande}
                  onChange={(e) => setMeddelande(e.target.value)}
                  maxLength={500}
                  required
                        />

              <p className="kontakt-teckenraknare">
             {meddelande.length} / 500 tecken
                </p>
              </div>

              {/* FELMEDDELANDE */}

              {fel && (

                <p
                  className="kontakt-fel"
                  role="alert"
                >
                  {fel}
                </p>

              )}

              {/* FORTSÄTT-KNAPP */}

              <div className="hero-knapprad">

                <button
                  type="submit"
                  className="kontakt-knapp"
                >
                  FORTSÄTT

                  <span aria-hidden="true">
                    ↗
                  </span>

                </button>

              </div>

            </form>

          ) : (

            /* =====================================
               BEKRÄFTELSE
            ===================================== */

            <div
              className="kontakt-bekraftelse"
              role="status"
            >

              <h3>
                Tack, {namn}!
              </h3>

              <p>
                Dina uppgifter är ifyllda och
                kontrollerade. Formuläret är ännu
                inte kopplat till en mejltjänst,
                så inget meddelande har skickats.
              </p>

              <button
                type="button"
                className="kontakt-knapp"
                onClick={() => {
                  setSkickat(false);
                  setFel("");
                }}
              >
                TILLBAKA TILL FORMULÄRET
              </button>

            </div>

          )}

        </div>

      </div>

      {/* =====================================
          HÖGER – ARKITEKTURBILD
      ===================================== */}

      <div className="kontakt-bildkolumn">

        <div className="kontakt-bildram">

          {/* STORA LJUSGRÖNA RUTAN */}

          <div
            className="kontakt-form-bakre"
            aria-hidden="true"
          />

          {/* ARKITEKTURBILD */}

          <img
            className="kontakt-bild"
            src={arkitekturBild}
            alt="Arkitektur och visualisering"
          />

        </div>

      </div>

      {/* =====================================
          MÖRKT / LJUST LÄGE
          LÄNGST NER PÅ KONTAKTSIDAN
      ===================================== */}

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

    </section>
  );
}

export default Kontakt;
