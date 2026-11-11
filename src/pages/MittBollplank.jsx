
import { useState } from "react";
import "./MittBollplank.css";

import bollplank1Bild from "../assets/bollplank1.png";
import ide1Bild from "../assets/ide1-arkitektur-staden.png";
import ide2Bild from "../assets/ide2-tankar-reflektioner.png";
import ide3Bild from "../assets/ide3-bilder-inspiration.png";

import { NAMN } from "../data/installningar";

/* =========================================
   1. ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    kreativtArkiv: "KREATIVT ARKIV",
    rubrik: "MITT BOLLPLANK.",
    intro1: "En plats för ord, bilder, idéer och samtal.",
    intro2:
      "Här samlar jag tankar, inspiration och perspektiv som får utvecklas över tid.",
    nyckelord: "ORD. BILDER. IDÉER. SAMTAL.",
    bildAlt: "Arkitektur med betongtrappor och grönska",

    navigation: "Mitt Bollplanks sektioner",
    ideFlik: "IDÉARKIV",
    forumFlik: "DISKUSSIONSFORUM",

    arkitekturEtikett:
      "ARKITEKTUR. KOMMUNIKATION. VISUALISERING.",
    arkivEtikett: "ARKIV",
    arkivRubrik: "IDÉARKIV.",
    arkivBeskrivning:
      "Ett organiserat arkiv för ord, bilder, reflektioner och idéer.",
    inlagg: "INLÄGG",
    alla: "ALLA",
    tillbaka: "TILLBAKA TILL ARKIVET",
    lasInlagg: "LÄS INLÄGGET",

    kommentarer: "DISKUSSION & KOMMENTARER.",
    kommentarBeskrivning:
      "Här kommer besökare att kunna kommentera och diskutera det här inlägget.",
    skrivKommentar: "SKRIV EN KOMMENTAR – KOMMER SNART",

    samtal: "SAMTAL",
    samtalsrum: "SAMTALSRUMMET.",
    samtalsBeskrivning:
      "Ett öppet rum för frågor, diskussioner och nya perspektiv.",
    valkommen: "VÄLKOMMEN TILL SAMTALSRUMMET",
    allaIdeer: "Alla idéer börjar någonstans.",
    forumIntro:
      "Här vill jag skapa en plats där människor kan mötas genom tankar, frågor och idéer. Ett forum för samtal om arkitektur, design, staden och allt däremellan.",

    diskussion: "DISKUSSION",
    diskussionRubrik: "Vad gör en stad levande?",
    diskussionText:
      "Vilka platser, miljöer och möten gör att en stad känns levande?",
    delta: "DELTA I DISKUSSIONEN – KOMMER SNART",

    egenIde: "HAR DU EN EGEN IDÉ?",
    egenIdeText:
      "Här kommer du att kunna starta en egen diskussion och bjuda in andra att dela sina perspektiv.",
    starta: "+ STARTA NY DISKUSSION – KOMMER SNART",

    ljust: "LJUST LÄGE",
    morkt: "MÖRKT LÄGE",

    kategorier: [
      "ARKITEKTUR & STADEN",
      "TANKAR & REFLEKTIONER",
      "BILDER & INSPIRATION",
    ],

    ideer: [
      {
        rubrik: "Hur formar vi framtidens stad?",
        text: "Tankar kring arkitektur, offentliga rum och hur vi skapar hållbara och levande stadsmiljöer.",
      },
      {
        rubrik: "En idé behöver inte vara färdig.",
        text: "Ett utrymme för frågor, reflektioner och tankar som fortfarande håller på att ta form.",
      },
      {
        rubrik: "Det visuella arkivet.",
        text: "Fotografier, skisser, detaljer och visuella upptäckter som väcker nya idéer.",
      },
    ],
  },

  en: {
    kreativtArkiv: "CREATIVE ARCHIVE",
    rubrik: "MY SOUNDING BOARD.",
    intro1: "A place for words, images, ideas and conversations.",
    intro2:
      "Here I collect thoughts, inspiration and perspectives that can develop over time.",
    nyckelord: "WORDS. IMAGES. IDEAS. CONVERSATIONS.",
    bildAlt: "Architecture with concrete steps and greenery",

    navigation: "My Sounding Board sections",
    ideFlik: "IDEA ARCHIVE",
    forumFlik: "DISCUSSION FORUM",

    arkitekturEtikett:
      "ARCHITECTURE. COMMUNICATION. VISUALIZATION.",
    arkivEtikett: "ARCHIVE",
    arkivRubrik: "IDEA ARCHIVE.",
    arkivBeskrivning:
      "An organized archive for words, images, reflections and ideas.",
    inlagg: "POSTS",
    alla: "ALL",
    tillbaka: "BACK TO ARCHIVE",
    lasInlagg: "READ POST",

    kommentarer: "DISCUSSION & COMMENTS.",
    kommentarBeskrivning:
      "Here visitors will be able to comment on and discuss this post.",
    skrivKommentar: "WRITE A COMMENT – COMING SOON",

    samtal: "CONVERSATION",
    samtalsrum: "THE CONVERSATION ROOM.",
    samtalsBeskrivning:
      "An open space for questions, discussions and new perspectives.",
    valkommen: "WELCOME TO THE CONVERSATION ROOM",
    allaIdeer: "Every idea starts somewhere.",
    forumIntro:
      "Here I want to create a place where people can connect through thoughts, questions and ideas. A forum for conversations about architecture, design, the city and everything in between.",

    diskussion: "DISCUSSION",
    diskussionRubrik: "What makes a city vibrant?",
    diskussionText:
      "Which places, environments and encounters make a city feel alive?",
    delta: "JOIN THE DISCUSSION – COMING SOON",

    egenIde: "DO YOU HAVE AN IDEA OF YOUR OWN?",
    egenIdeText:
      "Here you will be able to start your own discussion and invite others to share their perspectives.",
    starta: "+ START NEW DISCUSSION – COMING SOON",

    ljust: "LIGHT MODE",
    morkt: "DARK MODE",

    kategorier: [
      "ARCHITECTURE & THE CITY",
      "THOUGHTS & REFLECTIONS",
      "IMAGES & INSPIRATION",
    ],

    ideer: [
      {
        rubrik: "How do we shape the city of the future?",
        text: "Thoughts on architecture, public spaces and how we create sustainable and vibrant urban environments.",
      },
      {
        rubrik: "An idea does not have to be finished.",
        text: "A space for questions, reflections and thoughts that are still taking shape.",
      },
      {
        rubrik: "The visual archive.",
        text: "Photographs, sketches, details and visual discoveries that spark new ideas.",
      },
    ],
  },

  fi: {
    kreativtArkiv: "LUOVA ARKISTO",
    rubrik: "OMA IDEAPAJANI.",
    intro1: "Paikka sanoille, kuville, ideoille ja keskusteluille.",
    intro2:
      "Tänne kokoan ajatuksia, inspiraatiota ja näkökulmia, jotka saavat kehittyä ajan myötä.",
    nyckelord: "SANAT. KUVAT. IDEAT. KESKUSTELUT.",
    bildAlt: "Arkkitehtuuria, betoniportaita ja vehreyttä",

    navigation: "Ideapajani osiot",
    ideFlik: "IDEA-ARKISTO",
    forumFlik: "KESKUSTELUFOORUMI",

    arkitekturEtikett:
      "ARKKITEHTUURI. VIESTINTÄ. VISUALISOINTI.",
    arkivEtikett: "ARKISTO",
    arkivRubrik: "IDEA-ARKISTO.",
    arkivBeskrivning:
      "Järjestetty arkisto sanoille, kuville, pohdinnoille ja ideoille.",
    inlagg: "JULKAISUA",
    alla: "KAIKKI",
    tillbaka: "TAKAISIN ARKISTOON",
    lasInlagg: "LUE JULKAISU",

    kommentarer: "KESKUSTELU & KOMMENTIT.",
    kommentarBeskrivning:
      "Täällä vierailijat voivat tulevaisuudessa kommentoida ja keskustella tästä julkaisusta.",
    skrivKommentar: "KIRJOITA KOMMENTTI – TULOSSA PIAN",

    samtal: "KESKUSTELU",
    samtalsrum: "KESKUSTELUTILA.",
    samtalsBeskrivning:
      "Avoin tila kysymyksille, keskusteluille ja uusille näkökulmille.",
    valkommen: "TERVETULOA KESKUSTELUTILAAN",
    allaIdeer: "Jokainen idea alkaa jostakin.",
    forumIntro:
      "Haluan luoda paikan, jossa ihmiset voivat kohdata ajatusten, kysymysten ja ideoiden kautta. Keskustelufoorumin arkkitehtuurista, muotoilusta, kaupungista ja kaikesta siltä väliltä.",

    diskussion: "KESKUSTELU",
    diskussionRubrik: "Mikä tekee kaupungista elävän?",
    diskussionText:
      "Mitkä paikat, ympäristöt ja kohtaamiset saavat kaupungin tuntumaan elävältä?",
    delta: "OSALLISTU KESKUSTELUUN – TULOSSA PIAN",

    egenIde: "ONKO SINULLA OMA IDEA?",
    egenIdeText:
      "Täällä voit tulevaisuudessa aloittaa oman keskustelun ja kutsua muita jakamaan näkökulmiaan.",
    starta: "+ ALOITA UUSI KESKUSTELU – TULOSSA PIAN",

    ljust: "VAALEA TILA",
    morkt: "TUMMA TILA",

    kategorier: [
      "ARKKITEHTUURI & KAUPUNKI",
      "AJATUKSET & POHDINNAT",
      "KUVAT & INSPIRAATIO",
    ],

    ideer: [
      {
        rubrik: "Miten muovaamme tulevaisuuden kaupunkia?",
        text: "Ajatuksia arkkitehtuurista, julkisista tiloista ja siitä, miten luomme kestäviä ja eläviä kaupunkiympäristöjä.",
      },
      {
        rubrik: "Idean ei tarvitse olla valmis.",
        text: "Tilaa kysymyksille, pohdinnoille ja ajatuksille, jotka ovat vielä muotoutumassa.",
      },
      {
        rubrik: "Visuaalinen arkisto.",
        text: "Valokuvia, luonnoksia, yksityiskohtia ja visuaalisia löytöjä, jotka herättävät uusia ideoita.",
      },
    ],
  },
};

/* =========================================
   2. IDÉINLÄGG – BILDER OCH ID
========================================= */

const ideer = [
  { id: 1, bild: ide1Bild },
  { id: 2, bild: ide2Bild },
  { id: 3, bild: ide3Bild },
];

/* =========================================
   3. HUVUDKOMPONENT
========================================= */

function MittBollplank({
  morkt,
  setMorkt,
  sprak = "sv",
}) {
  const [aktivFlik, setAktivFlik] = useState("ideer");
  const [valdIde, setValdIde] = useState(null);
  const [kategori, setKategori] = useState("ALLA");

  const text = oversattningar[sprak] || oversattningar.sv;

  /* =====================================
     ÖVERSATTA IDÉINLÄGG
  ===================================== */

  const oversattaIdeer = ideer.map((ide, index) => ({
    ...ide,
    kategori: text.kategorier[index],
    datum: `IDÉ ${String(ide.id).padStart(3, "0")}`,
    rubrik: text.ideer[index].rubrik,
    text: text.ideer[index].text,
  }));

  const kategorier = [
    text.alla,
    ...text.kategorier,
  ];

  const filtreradeIdeer =
    kategori === "ALLA"
      ? oversattaIdeer
      : oversattaIdeer.filter((ide) =>
          ide.kategori === text.kategorier[
            ["ARKITEKTUR & STADEN", "TANKAR & REFLEKTIONER", "BILDER & INSPIRATION"]
              .indexOf(kategori)
          ]
        );

  function bytFlik(flik) {
    setAktivFlik(flik);
    setValdIde(null);
  }

  return (
    <main className="bollplank bollplank-sida">

      {/* INTRODUKTION */}

      <header className="bollplank-header">

        <p className="bollplank-overrubrik">
          {NAMN.toUpperCase()} / {text.kreativtArkiv}
        </p>

        <h1>{text.rubrik}</h1>

        <p className="bollplank-intro">
          {text.intro1}
        </p>

        <p className="bollplank-intro">
          {text.intro2}
        </p>

        <div className="bollplank-headerlinje" />

        <p className="bollplank-underrubrik">
          {text.nyckelord}
        </p>

        <img
          src={bollplank1Bild}
          alt={text.bildAlt}
          className="bollplank-headerbild"
        />

      </header>

      {/* HUVUDNAVIGATION */}

      <nav
        className="bollplank-flikar"
        aria-label={text.navigation}
      >
        <button
          type="button"
          className={aktivFlik === "ideer" ? "aktiv" : ""}
          aria-pressed={aktivFlik === "ideer"}
          onClick={() => bytFlik("ideer")}
        >
          01 / {text.ideFlik}
        </button>

        <button
          type="button"
          className={aktivFlik === "forum" ? "aktiv" : ""}
          aria-pressed={aktivFlik === "forum"}
          onClick={() => bytFlik("forum")}
        >
          02 / {text.forumFlik}
        </button>
      </nav>

      {/* IDÉARKIV */}

      {aktivFlik === "ideer" && (
        <section className="bollplank-sektion">

          <div className="bollplank-sektionshuvud">
            <div>
              <p className="bollplank-arkiv-underrubrik">
                {text.arkitekturEtikett}
              </p>

              <span className="bollplank-nummer">
                01 / {text.arkivEtikett}
              </span>

              <h2>{text.arkivRubrik}</h2>

              <p>{text.arkivBeskrivning}</p>
            </div>

            <span className="bollplank-antal">
              {oversattaIdeer.length} {text.inlagg}
            </span>
          </div>

          {/* KATEGORIER */}

          <div className="bollplank-kategorier">
            {kategorier.map((namn, index) => (
              <button
                type="button"
                key={index}
                className={
                  kategori === (index === 0 ? "ALLA" : oversattningar.sv.kategorier[index - 1])
                    ? "aktiv"
                    : ""
                }
                aria-pressed={
                  kategori === (index === 0 ? "ALLA" : oversattningar.sv.kategorier[index - 1])
                }
                onClick={() => {
                  setKategori(
                    index === 0
                      ? "ALLA"
                      : oversattningar.sv.kategorier[index - 1]
                  );
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
                ← {text.tillbaka}
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
                <h3>{text.kommentarer}</h3>
                <p>{text.kommentarBeskrivning}</p>
                <button type="button" disabled>
                  {text.skrivKommentar}
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
                      {text.lasInlagg}
                      <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </article>
              ))}

            </div>
          )}
        </section>
      )}

      {/* DISKUSSIONSFORUM */}

      {aktivFlik === "forum" && (
        <section className="bollplank-sektion">

          <div className="bollplank-sektionshuvud">
            <div>
              <span className="bollplank-nummer">
                02 / {text.samtal}
              </span>

              <h2>{text.samtalsrum}</h2>
              <p>{text.samtalsBeskrivning}</p>
            </div>
          </div>

          <div className="bollplank-forumintro">
            <span className="bollplank-nummer">
              {text.valkommen}
            </span>

            <h3>{text.allaIdeer}</h3>
            <p>{text.forumIntro}</p>
          </div>

          <div className="bollplank-forumkort">
            <span className="bollplank-nummer">
              {text.diskussion} / 001
            </span>

            <h3>{text.diskussionRubrik}</h3>
            <p>{text.diskussionText}</p>

            <button type="button" disabled>
              {text.delta}
            </button>
          </div>

          <div className="bollplank-nydiskussion">
            <h3>{text.egenIde}</h3>
            <p>{text.egenIdeText}</p>

            <button type="button" disabled>
              {text.starta}
            </button>
          </div>

        </section>
      )}

      {/* MÖRKT / LJUST LÄGE */}

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

    </main>
  );
}

export default MittBollplank;
