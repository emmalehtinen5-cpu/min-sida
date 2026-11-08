
import { useState } from "react";
import "./MittBollplank.css";
import bollplank1Bild from "../assets/bollplank1.png";
import ide1Bild from "../assets/ide1-arkitektur-staden.png";
import ide2Bild from "../assets/ide2-tankar-reflektioner.png";
import ide3Bild from "../assets/ide3-bilder-inspiration.png";

/* =========================================
   1. IDÉINLÄGG
========================================= */

const ideer = [
  {
    id: 1,
    kategori: "ARKITEKTUR & STADEN",
    datum: "IDÉ 001",
    rubrik: "Hur formar vi framtidens stad?",
    text: "Tankar kring arkitektur, offentliga rum och hur vi skapar hållbara och levande stadsmiljöer.",
    bild: ide1Bild,
  },
  {
    id: 2,
    kategori: "TANKAR & REFLEKTIONER",
    datum: "IDÉ 002",
    rubrik: "En idé behöver inte vara färdig.",
    text: "Ett utrymme för frågor, reflektioner och tankar som fortfarande håller på att ta form.",
    bild: ide2Bild,
  },
  {
    id: 3,
    kategori: "BILDER & INSPIRATION",
    datum: "IDÉ 003",
    rubrik: "Det visuella arkivet.",
    text: "Fotografier, skisser, detaljer och visuella upptäckter som väcker nya idéer.",
    bild: ide3Bild,
  },
];

/* =========================================
   2. HUVUDKOMPONENT
========================================= */

function MittBollplank({ morkt, setMorkt }) {
  const [aktivFlik, setAktivFlik] = useState("ideer");
  const [valdIde, setValdIde] = useState(null);
  const [kategori, setKategori] = useState("ALLA");

  const kategorier = [
    "ALLA",
    "ARKITEKTUR & STADEN",
    "TANKAR & REFLEKTIONER",
    "BILDER & INSPIRATION",
  ];

  const filtreradeIdeer =
    kategori === "ALLA"
      ? ideer
      : ideer.filter((ide) => ide.kategori === kategori);

  function bytFlik(flik) {
    setAktivFlik(flik);
    setValdIde(null);
  }

  return (
    <main className="bollplank bollplank-sida">

      {/* =====================================
          3. INTRODUKTION
      ===================================== */}

      <header className="bollplank-header">

        <p className="bollplank-overrubrik">
          EMMA LEHTINEN / KREATIVT ARKIV
        </p>

        <h1>MITT BOLLPLANK.</h1>

        <p className="bollplank-intro">
          En plats för ord, bilder, idéer och samtal.
        </p>
        <p className="bollplank-intro">
          Här samlar jag tankar, inspiration och
          perspektiv som får utvecklas över tid.
        </p>

        <div className="bollplank-headerlinje" />

        <p className="bollplank-underrubrik">
          ORD. BILDER. IDÉER. SAMTAL.
        </p>
        <img
        src={bollplank1Bild}
        alt="Arkitektur med betongtrappor och grönska"
        className="bollplank-headerbild"
        />

      </header>

      {/* =====================================
          4. HUVUDNAVIGATION
      ===================================== */}

      <nav
        className="bollplank-flikar"
        aria-label="Mitt Bollplanks sektioner"
      >

        <button
          type="button"
          className={aktivFlik === "ideer" ? "aktiv" : ""}
          aria-pressed={aktivFlik === "ideer"}
          onClick={() => bytFlik("ideer")}
        >
          01 / IDÉARKIV
        </button>

        <button
          type="button"
          className={aktivFlik === "forum" ? "aktiv" : ""}
          aria-pressed={aktivFlik === "forum"}
          onClick={() => bytFlik("forum")}
        >
          02 / DISKUSSIONSFORUM
        </button>

      </nav>

      {/* =====================================
          5. IDÉARKIV
      ===================================== */}

      {aktivFlik === "ideer" && (
        <section className="bollplank-sektion">

          <div className="bollplank-sektionshuvud">
            <div>
              <p className="bollplank-arkiv-underrubrik">
          ARKITEKTUR. KOMMUNIKATION. VISUALISERING.
        </p>
              <span className="bollplank-nummer">
                01 / ARKIV
              </span>

              <h2>IDÉARKIV.</h2>

              <p>
                Ett organiserat arkiv för ord,
                bilder, reflektioner och idéer.
              </p>
            </div>

            <span className="bollplank-antal">
              {ideer.length} INLÄGG
            </span>
          </div>

          {/* KATEGORIER */}

          <div className="bollplank-kategorier">

            {kategorier.map((namn) => (
              <button
                type="button"
                key={namn}
                className={
                  kategori === namn ? "aktiv" : ""
                }
                aria-pressed={kategori === namn}
                onClick={() => {
                  setKategori(namn);
                  setValdIde(null);
                }}
              >
                {namn}
              </button>
            ))}

          </div>

          {/* ENSKILT IDÉINLÄGG */}

          {valdIde ? (

            <article className="bollplank-detalj">

              <button
                type="button"
                className="bollplank-tillbaka"
                onClick={() => setValdIde(null)}
              >
                ← TILLBAKA TILL ARKIVET
              </button>

              <span className="bollplank-nummer">
                {valdIde.datum} / {valdIde.kategori}
              </span>

              <h2>{valdIde.rubrik}</h2>

              {valdIde.bild && (
                <img
                  src={valdIde.bild}
                  alt={valdIde.rubrik}
                  className="bollplank-detaljbild"
                />
              )}

              <p>{valdIde.text}</p>

              <div className="bollplank-kommentarer">

                <h3>DISKUSSION & KOMMENTARER.</h3>

                <p>
                  Här kommer besökare att kunna
                  kommentera och diskutera
                  det här inlägget.
                </p>

                <button type="button" disabled>
                  SKRIV EN KOMMENTAR – KOMMER SNART
                </button>

              </div>

            </article>

          ) : (

            <div className="bollplank-arkiv">

              {filtreradeIdeer.map((ide) => (

                <article
                  className="bollplank-kort"
                  key={ide.id}
                >

                  {ide.bild ? (
                    <img
                      src={ide.bild}
                      alt={ide.rubrik}
                      className="bollplank-bild"
                    />
                  ) : (
                    <div className="bollplank-bildplats">
                      <span>{ide.datum}</span>
                      <span>↗</span>
                    </div>
                  )}

                  <div className="bollplank-kortinnehall">

                    <span className="bollplank-nummer">
                      {ide.kategori}
                    </span>

                    <h3>{ide.rubrik}</h3>

                    <p>{ide.text}</p>

                    <button
                      type="button"
                      className="bollplank-lasmer"
                      onClick={() => setValdIde(ide)}
                    >
                      LÄS INLÄGGET
                      <span aria-hidden="true">↗</span>
                    </button>

                  </div>

                </article>

              ))}

            </div>

          )}

        </section>
      )}

      {/* =====================================
          6. DISKUSSIONSFORUM
      ===================================== */}

      {aktivFlik === "forum" && (

        <section className="bollplank-sektion">

          <div className="bollplank-sektionshuvud">

            <div>
              <span className="bollplank-nummer">
                02 / SAMTAL
              </span>

              <h2>SAMTALSRUMMET.</h2>

              <p>
                Ett öppet rum för frågor,
                diskussioner och nya perspektiv.
              </p>
            </div>

          </div>

          <div className="bollplank-forumintro">

            <span className="bollplank-nummer">
              VÄLKOMMEN TILL SAMTALSRUMMET
            </span>

            <h3>Alla idéer börjar någonstans.</h3>

            <p>
              Här vill jag skapa en plats där
              människor kan mötas genom tankar,
              frågor och idéer.

              Ett forum för samtal om arkitektur,
              design, staden och allt däremellan.
            </p>

          </div>

          <div className="bollplank-forumkort">

            <span className="bollplank-nummer">
              DISKUSSION / 001
            </span>

            <h3>Vad gör en stad levande?</h3>

            <p>
              Vilka platser, miljöer och möten
              gör att en stad känns levande?
            </p>

            <button type="button" disabled>
              DELTA I DISKUSSIONEN – KOMMER SNART
            </button>

          </div>

          <div className="bollplank-nydiskussion">

            <h3>HAR DU EN EGEN IDÉ?</h3>

            <p>
              Här kommer du att kunna starta
              en egen diskussion och bjuda in
              andra att dela sina perspektiv.
            </p>

            <button type="button" disabled>
              + STARTA NY DISKUSSION – KOMMER SNART
            </button>

          </div>

        </section>

      )}

      {/* =====================================
          7. MÖRKT / LJUST LÄGE
          LÄNGST NER TILL HÖGER
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

    </main>
  );
}

export default MittBollplank;