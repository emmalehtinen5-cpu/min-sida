
/* =========================================
   KONTAKTFORMULÄR – MODERN & STRUKTURERAD
========================================= */

import { useState } from "react";
import "./KontaktFormular.css";

function KontaktFormular() {
  const [namn, setNamn] = useState("");
  const [epost, setEpost] = useState("");
  const [meddelande, setMeddelande] = useState("");
  const [fel, setFel] = useState("");
  const [klart, setKlart] = useState(false);

  /* KONTROLLERA FORMULÄRET */

  const hanteraSkicka = (e) => {
    e.preventDefault();

    if (
      !namn.trim() ||
      !epost.trim() ||
      !meddelande.trim()
    ) {
      setFel("Vänligen fyll i alla fält.");
      return;
    }

    const epostMonster = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!epostMonster.test(epost.trim())) {
      setFel("Ange en giltig e-postadress.");
      return;
    }

    setFel("");
    setKlart(true);
  };

  return (
    <div className="kontakt-formular">

      {!klart ? (
        <form
          className="kontakt-form"
          onSubmit={hanteraSkicka}
          noValidate
        >

          {/* FORMULÄRETS RUBRIK */}
          <div className="kontakt-form-header">

            <span className="kontakt-etikett">
              KONTAKT / SAMARBETE
            </span>

            <h2>Kontakta mig</h2>

            <p className="kontakt-intro">
              Har du en fråga, ett projekt eller vill
              diskutera ett framtida samarbete?
              Hör gärna av dig.
            </p>

          </div>

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
              placeholder="Din e-postadress"
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
              rows="6"
              placeholder="Skriv ditt meddelande..."
              value={meddelande}
              onChange={(e) => setMeddelande(e.target.value)}
              required
            />

          </div>

          {/* FELMEDDELANDE */}
          {fel && (
            <p className="kontakt-fel" role="alert">
              {fel}
            </p>
          )}

          {/* KNAPP */}
          <div className="hero-knapprad">

            <button
              type="submit"
              className="kontakt-knapp"
            >
              Fortsätt
              <span aria-hidden="true">↗</span>
            </button>

          </div>

        </form>
      ) : (

        /* BEKRÄFTELSE */
        <div
          className="kontakt-bekraftelse"
          role="status"
        >

          <h3>Tack, {namn}!</h3>

          <p>
            Dina uppgifter är ifyllda och kontrollerade.
            Formuläret är ännu inte kopplat till en
            mejltjänst, så inget meddelande har skickats.
          </p>

          <button
            type="button"
            className="kontakt-knapp"
            onClick={() => {
              setKlart(false);
              setFel("");
            }}
          >
            Tillbaka till formuläret
          </button>

        </div>
      )}

    </div>
  );
}

export default KontaktFormular;
