
/* =========================================
   VÄLKOMMEN – EMMA LEHTINEN
   INTRODUKTION OCH KOMPETENSER
   SVENSKA / ENGELSKA / FINSKA
========================================= */

/* =========================================
   ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    intro:
      "Jag kombinerar analytiskt tänkande med kreativitet, struktur och ett starkt intresse för arkitektur, design och stadsutveckling. Med erfarenhet av internationell kundservice, administration och koordinering har jag utvecklat en god kommunikativ förmåga och ett lösningsorienterat arbetssätt. Jag drivs av att utforska nya perspektiv, utveckla idéer och skapa tydliga, genomarbetade lösningar där människor, form och funktion möts.",

    fraga: [
      "NYFIKEN PÅ MINA ERFARENHETER,",
      "IDÉER OCH VAD JAG",
      "KAN BIDRA MED?",
    ],

    digital: "Digital",
    sprak: "Språk",
    ovrigt: "Övrigt",
    korkort: "B-körkort",

    sprakLista: [
      "Danska",
      "Engelska",
      "Norska",
      "Spanska",
      "Svenska",
    ],
  },

  en: {
    intro:
      "I combine analytical thinking with creativity, structure and a strong interest in architecture, design and urban development. Through experience in international customer service, administration and coordination, I have developed strong communication skills and a solution-oriented approach. I enjoy exploring new perspectives, developing ideas and creating thoughtful, well-crafted solutions where people, form and function come together.",

    fraga: [
      "CURIOUS ABOUT MY EXPERIENCE,",
      "IDEAS AND WHAT I",
      "CAN CONTRIBUTE?",
    ],

    digital: "Digital",
    sprak: "Languages",
    ovrigt: "Other",
    korkort: "Category B driving licence",

    sprakLista: [
      "Danish",
      "English",
      "Norwegian",
      "Spanish",
      "Swedish",
    ],
  },

  fi: {
    intro:
      "Yhdistän analyyttisen ajattelun luovuuteen, järjestelmällisyyteen ja vahvaan kiinnostukseen arkkitehtuuria, muotoilua ja kaupunkikehitystä kohtaan. Kansainvälisestä asiakaspalvelusta, hallinnollisista tehtävistä ja koordinoinnista saamani kokemus on kehittänyt viestintätaitojani ja ratkaisukeskeistä työskentelytapaani. Minua innostaa uusien näkökulmien tutkiminen, ideoiden kehittäminen sekä selkeiden ja huolellisesti suunniteltujen ratkaisujen luominen, joissa ihmiset, muoto ja toiminnallisuus kohtaavat.",

    fraga: [
      "KIINNOSTAVATKO KOKEMUKSENI,",
      "IDEANI JA SE, MITÄ",
      "VOIN TARJOTA?",
    ],

    digital: "Digitaalinen",
    sprak: "Kielet",
    ovrigt: "Muut",
    korkort: "B-luokan ajokortti",

    sprakLista: [
      "Tanska",
      "Englanti",
      "Norja",
      "Espanja",
      "Ruotsi",
    ],
  },
};

/* =========================================
   VÄLKOMMEN-KOMPONENT
========================================= */

function Valkommen({
  showIntro = true,
  showSkills = true,
  sprak = "sv",
}) {
  const text = oversattningar[sprak] || oversattningar.sv;

  return (
    <>
      {/* =====================================
          INTRODUKTION – STARTSIDAN
      ===================================== */}

      {showIntro && (
        <div
          className="startsida-intro"
          id="om-mig"
        >
          <article className="merit-grupp merit-introduktion">
            <ul className="merit-programlista">
              <li>{text.intro}</li>
            </ul>
          </article>

          <blockquote className="hero-text">
            {text.fraga.map((rad, index) => (
              <span key={index}>
                {rad}
              </span>
            ))}
          </blockquote>
        </div>
      )}

      {/* =====================================
          KOMPETENSER
      ===================================== */}

      {showSkills && (
        <div className="merit-grupper">

          {/* ADOBE */}

          <article className="merit-grupp merit-adobe">
            <h3 className="kompetens-rubrik">
              <span>Adobe</span>
            </h3>

            <div className="kompetens-innehall">
              <div
                className="kompetens-bild kompetens-bild-adobe"
                aria-hidden="true"
              />

              <ul className="merit-programlista">
                <li>Illustrator</li>
                <li>InDesign</li>
                <li>Photoshop</li>
              </ul>
            </div>
          </article>

          {/* DIGITAL */}

          <article className="merit-grupp merit-digitalisering">
            <h3 className="kompetens-rubrik">
              <span>{text.digital}</span>
            </h3>

            <div className="kompetens-innehall">
              <div
                className="kompetens-bild kompetens-bild-digital"
                aria-hidden="true"
              />

              <ul className="merit-programlista">
                <li>3DMax</li>
                <li>3D-render</li>
                <li>ArcGIS</li>
                <li>AutoCAD</li>
                <li>SketchUp</li>
              </ul>
            </div>
          </article>

          {/* OFFICE */}

          <article className="merit-grupp merit-office">
            <h3 className="kompetens-rubrik">
              <span>Office</span>
            </h3>

            <div className="kompetens-innehall">
              <div
                className="kompetens-bild kompetens-bild-office"
                aria-hidden="true"
              />

              <ul className="merit-programlista">
                <li>Excel</li>
                <li>PowerPoint</li>
                <li>Word</li>
              </ul>
            </div>
          </article>

          {/* SPRÅK */}

          <article className="merit-grupp merit-sprak">
            <h3 className="kompetens-rubrik">
              <span>{text.sprak}</span>
            </h3>

            <div className="kompetens-innehall">
              <div
                className="kompetens-bild kompetens-bild-sprak"
                aria-hidden="true"
              />

              <ul className="merit-programlista">
                {text.sprakLista.map((sprakNamn) => (
                  <li key={sprakNamn}>
                    {sprakNamn}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* ÖVRIGT */}

          <article className="merit-grupp merit-ovrigt">
            <h3 className="kompetens-rubrik">
              <span>{text.ovrigt}</span>
            </h3>

            <div className="kompetens-innehall">
              <div
                className="kompetens-bild kompetens-bild-ovrigt"
                aria-hidden="true"
              />

              <ul className="merit-programlista">
                <li>{text.korkort}</li>
              </ul>
            </div>
          </article>

        </div>
      )}
    </>
  );
}

export default Valkommen;
