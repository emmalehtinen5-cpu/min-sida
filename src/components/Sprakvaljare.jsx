
/* =========================================
   SPRÅKVÄLJARE – STUDIO92
   JORDGLOB / SPRÅK / UTFÄLLBAR MENY
========================================= */

import "./Sprakvaljare.css";
import { useState } from "react";

function Sprakvaljare({ sprak = "sv", setSprak }) {

  /* =====================================
     01 – VISA / DÖLJ SPRÅKMENY
  ===================================== */

  const [visaFlaggor, setVisaFlaggor] = useState(false);

  /* =====================================
     02 – BYT SPRÅK
  ===================================== */

  function bytSprak(nyttSprak) {
    setSprak(nyttSprak);
    setVisaFlaggor(false);
  }

  /* =====================================
     03 – AKTUELLT SPRÅK
  ===================================== */
    const sprakNamn = {
  sv: "VÄLJ SPRÅK",
  en: "SELECT LANGUAGE",
  fi: "VALITSE KIELI",
      };
  /* =====================================
     04 – SPRÅKALTERNATIV
  ===================================== */

  const sprakAlternativ = [
    {
      kod: "sv",
      text: "SVENSKA – SWEDISH – RUOTSI",
    },
    {
      kod: "en",
      text: "ENGELSKA – ENGLISH – ENGLANTI",
    },
    {
      kod: "fi",
      text: "FINSKA – FINNISH – SUOMI",
    },
  ];

  return (
    <div className="sprakvaljare">
      <div className="sprakvaljare-symboler">

        {/* =====================================
            05 – HUVUDKNAPP MED JORDGLOB
        ===================================== */}

        <button
          type="button"
          className="sprakvaljare-glob"
          aria-label={`Välj språk, vald språk: ${sprakNamn[sprak] ?? "SVENSKA"}`}
          aria-expanded={visaFlaggor}
          aria-controls="sprakvaljare-meny"
          onClick={() => {
  console.log("SPRÅKKNAPPEN KLICKADES");
  setVisaFlaggor(!visaFlaggor);
}}
        >

          {/* JORDGLOB */}
          <svg
            className="sprakvaljare-jordglob"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="currentColor"
              strokeWidth="3"
            />

            <ellipse
              cx="50"
              cy="50"
              rx="22"
              ry="46"
              stroke="currentColor"
              strokeWidth="2.5"
            />

            <path
              d="M50 4V96"
              stroke="currentColor"
              strokeWidth="2.5"
            />

            <path
              d="M4 50H96"
              stroke="currentColor"
              strokeWidth="2.5"
            />

            <path
              d="M12 27 Q50 40 88 27"
              stroke="currentColor"
              strokeWidth="2.5"
            />

            <path
              d="M12 73 Q50 60 88 73"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </svg>

          {/* AKTUELLT SPRÅK */}
          <span className={`sprakvaljare-text ${sprak === "en" ? "sprakvaljare-engelska" : ""}`}>
                {sprakNamn[sprak] || "VÄLJ SPRÅK"}
                      </span>

          {/* LITEN NEDÅTPIL */}
          <svg
            className="sprakvaljare-pil"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 8L12 16L20 8"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

        </button>

        {/* =====================================
            06 – TRE SPRÅKKNAPPAR
        ===================================== */}

        {visaFlaggor && (
          <div
            className="sprakvaljare-flaggor"
            id="sprakvaljare-meny"
          >

            {sprakAlternativ.map((alternativ) => (
              <button
                key={alternativ.kod}
                type="button"
                className={`sprakvaljare-flagga ${
                  sprak === alternativ.kod ? "aktiv" : ""
                }`}
                aria-pressed={sprak === alternativ.kod}
                onClick={() => bytSprak(alternativ.kod)}
              >

                {/* SPRÅKTEXT */}
                <svg className="sprakvaljare-liten-jordglob"
                 viewBox="0 0 100 100"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"> 
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="3" />
                <ellipse cx="50" cy="50" rx="22" ry="46" stroke="currentColor" strokeWidth="2.5" />
                <path d="M50 4V96" stroke="currentColor" strokeWidth="2.5" />
                     <path d="M4 50H96" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M12 27 Q50 40 88 27" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M12 73 Q50 60 88 73" stroke="currentColor" strokeWidth="2.5" />
                  </svg>
                  <span className="sprakvaljare-alternativ-text">
                    {alternativ.text}
                  </span>
                {/* KRAFTIG HÖGERPIL */}
                <svg
                  className="sprakvaljare-hogerpil"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 12H20M13 5L20 12L13 19"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </button>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default Sprakvaljare;
