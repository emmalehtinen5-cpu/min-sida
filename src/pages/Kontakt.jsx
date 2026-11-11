
/* =========================================
   KONTAKT.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
   SVENSKA / ENGELSKA / FINSKA
   LJUST OCH MÖRKT LÄGE
========================================= */

import { useState } from "react";

import arkitekturBild from "../assets/bildsspel.png";

import "./Kontakt.css";

/* =========================================
   1. ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    etikett: "KONTAKT / SAMARBETE",
    rubrik: "Kontakta mig",

    intro:
      "Har du en fråga, en idé eller vill diskutera ett möjligt samarbete?",

    horAvDig: "Hör gärna av dig.",

    underrubrik:
      "Jag är öppen för nya idéer, möjligheter och samarbeten.",

    namn: "Namn",
    namnPlaceholder: "Ditt namn",

    epost: "E-post",
    epostPlaceholder: "namn@exempel.se",

    meddelande: "Meddelande",
    meddelandePlaceholder: "Skriv ditt meddelande här...",

    teckenKvar: "tecken kvar",

    felTomt:
      "Du måste fylla i alla fält innan du fortsätter.",

    felEpost:
      "Ange en giltig e-postadress.",

    felMeddelande:
      "Meddelandet måste innehålla minst 10 tecken.",

    fortsatt: "FORTSÄTT",

    tack: "Tack",

    bekraftelse:
      "Dina uppgifter är ifyllda och kontrollerade. Formuläret är ännu inte kopplat till en mejltjänst, så inget meddelande har skickats.",

    tillbaka: "TILLBAKA TILL FORMULÄRET",

    bildAlt: "Arkitektur och visualisering",

    ljust: "LJUST LÄGE",
    morkt: "MÖRKT LÄGE",
  },

  en: {
    etikett: "CONTACT / COLLABORATION",
    rubrik: "Contact me",

    intro:
      "Do you have a question, an idea or would you like to discuss a potential collaboration?",

    horAvDig: "Feel free to get in touch.",

    underrubrik:
      "I am open to new ideas, opportunities and collaborations.",

    namn: "Name",
    namnPlaceholder: "Your name",

    epost: "Email",
    epostPlaceholder: "name@example.com",

    meddelande: "Message",
    meddelandePlaceholder: "Write your message here...",

    teckenKvar: "characters remaining",

    felTomt:
      "Please fill in all fields before continuing.",

    felEpost:
      "Please enter a valid email address.",

    felMeddelande:
      "Your message must contain at least 10 characters.",

    fortsatt: "CONTINUE",

    tack: "Thank you",

    bekraftelse:
      "Your information has been entered and validated. The form is not yet connected to an email service, so no message has been sent.",

    tillbaka: "BACK TO FORM",

    bildAlt: "Architecture and visualization",

    ljust: "LIGHT MODE",
    morkt: "DARK MODE",
  },

  fi: {
    etikett: "YHTEYDENOTTO / YHTEISTYÖ",
    rubrik: "Ota yhteyttä",

    intro:
      "Onko sinulla kysyttävää, idea tai haluaisitko keskustella mahdollisesta yhteistyöstä?",

    horAvDig: "Ota rohkeasti yhteyttä.",

    underrubrik:
      "Olen avoin uusille ideoille, mahdollisuuksille ja yhteistyölle.",

    namn: "Nimi",
    namnPlaceholder: "Nimesi",

    epost: "Sähköposti",
    epostPlaceholder: "nimi@esimerkki.fi",

    meddelande: "Viesti",
    meddelandePlaceholder: "Kirjoita viestisi tähän...",

    teckenKvar: "merkkiä jäljellä",

    felTomt:
      "Täytä kaikki kentät ennen jatkamista.",

    felEpost:
      "Anna kelvollinen sähköpostiosoite.",

    felMeddelande:
      "Viestissä on oltava vähintään 10 merkkiä.",

    fortsatt: "JATKA",

    tack: "Kiitos",

    bekraftelse:
      "Tietosi on täytetty ja tarkistettu. Lomaketta ei ole vielä yhdistetty sähköpostipalveluun, joten viestiä ei ole lähetetty.",

    tillbaka: "TAKAISIN LOMAKKEESEEN",

    bildAlt: "Arkkitehtuuri ja visualisointi",

    ljust: "VAALEA TILA",
    morkt: "TUMMA TILA",
  },
};

/* =========================================
   2. KONTAKTKOMPONENT
========================================= */

function Kontakt({
  morkt,
  setMorkt,
  sprak = "sv",
}) {

  /* =====================================
     AKTIVT SPRÅK
  ===================================== */

  const text =
    oversattningar[sprak] || oversattningar.sv;

  /* =====================================
     FORMULÄRETS TILLSTÅND
  ===================================== */

  const [namn, setNamn] = useState("");
  const [epost, setEpost] = useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skickat, setSkickat] = useState(false);
  const [fel, setFel] = useState("");

  const teckenKvar = 500 - meddelande.length;

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
      setFel("tomt");
      return;
    }

    const epostMonster = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!epostMonster.test(epost.trim())) {
      setFel("epost");
      return;
    }

    if (meddelande.trim().length < 10) {
      setFel("meddelande");
      return;
    }

    setFel("");

    // Formuläret är ännu inte kopplat
    // till någon mejltjänst.
    setSkickat(true);
  };

  /* =====================================
     ÖVERSÄTT FELMEDDELANDEN
  ===================================== */

  const felTexter = {
    tomt: text.felTomt,
    epost: text.felEpost,
    meddelande: text.felMeddelande,
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
            {text.etikett}
          </span>

          <h2 id="kontakt-rubrik">
            {text.rubrik}
          </h2>

          <p className="kontakt-text">
            {text.intro}
          </p>

          <p className="kontakt-text">
            {text.horAvDig}
          </p>

          <p className="kontakt-underrubrik">
            {text.underrubrik}
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
                  {text.namn}
                </label>

                <input
                  type="text"
                  id="namn"
                  name="namn"
                  autoComplete="name"
                  placeholder={text.namnPlaceholder}
                  value={namn}
                  onChange={(e) =>
                    setNamn(e.target.value)
                  }
                  required
                />

              </div>

              {/* E-POST */}

              <div className="kontakt-falt">

                <label htmlFor="epost">
                  {text.epost}
                </label>

                <input
                  type="email"
                  id="epost"
                  name="epost"
                  autoComplete="email"
                  placeholder={text.epostPlaceholder}
                  value={epost}
                  onChange={(e) =>
                    setEpost(e.target.value)
                  }
                  required
                />

              </div>

              {/* MEDDELANDE */}

              <div className="kontakt-falt">

                <label htmlFor="meddelande">
                  {text.meddelande}
                </label>

                <textarea
                  id="meddelande"
                  name="meddelande"
                  rows={5}
                  placeholder={text.meddelandePlaceholder}
                  value={meddelande}
                  onChange={(e) =>
                    setMeddelande(e.target.value)
                  }
                  maxLength={500}
                  required
                />

                {/* TECKENRÄKNARE */}

                <p
                  className={`kontakt-teckenraknare ${
                    teckenKvar < 50
                      ? "kontakt-tecken-varning"
                      : ""
                  }`}
                >
                  {teckenKvar} {text.teckenKvar}
                </p>

              </div>

              {/* FELMEDDELANDE */}

              {fel && (
                <p
                  className="kontakt-fel"
                  role="alert"
                >
                  {felTexter[fel]}
                </p>
              )}

              {/* FORTSÄTT-KNAPP */}

              <div className="hero-knapprad">

                <button
                  type="submit"
                  className="kontakt-knapp"
                  disabled={
                    meddelande.trim().length === 0 ||
                    meddelande.length > 500
                  }
                >
                  {text.fortsatt}

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
                {text.tack}, {namn}!
              </h3>

              <p>
                {text.bekraftelse}
              </p>

              <button
                type="button"
                className="kontakt-knapp"
                onClick={() => {
                  setSkickat(false);
                  setFel("");
                }}
              >
                {text.tillbaka}
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
            alt={text.bildAlt}
          />

        </div>

      </div>

      {/* =====================================
          MÖRKT / LJUST LÄGE
      ===================================== */}

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

    </section>
  );
}

export default Kontakt;
