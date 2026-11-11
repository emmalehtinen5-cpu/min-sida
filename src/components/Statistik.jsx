
/* =========================================
   STATISTIK – TEKNIKER OCH KUNSKAPSNIVÅ
   SVENSKA / ENGELSKA / FINSKA
========================================= */

import projektLista from "../data/projekt.json";
import "./Statistik.css";

/* =========================================
   ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    rubrik: "STATISTIK.",
    etikett: "METODER / KUNSKAP",
    metoder: "DET HÄR HAR JAG ANVÄNT MEST",
    kunskapsniva: "MIN KUNSKAPSNIVÅ",
    aterkommande: "ÅTERKOMMANDE",
    sprak: [
      "Svenska",
      "Engelska",
      "Danska",
      "Norska",
      "Spanska",
    ],
  },

  en: {
    rubrik: "STATISTICS.",
    etikett: "METHODS / SKILLS",
    metoder: "MY MOST USED METHODS",
    kunskapsniva: "MY SKILL LEVELS",
    aterkommande: "RECURRING",
    sprak: [
      "Swedish",
      "English",
      "Danish",
      "Norwegian",
      "Spanish",
    ],
  },

  fi: {
    rubrik: "TILASTOT.",
    etikett: "MENETELMÄT / OSAAMINEN",
    metoder: "ENITEN KÄYTTÄMÄNI MENETELMÄT",
    kunskapsniva: "OMA OSAAMISTASONI",
    aterkommande: "TOISTUVA",
    sprak: [
      "Ruotsi",
      "Englanti",
      "Tanska",
      "Norja",
      "Espanja",
    ],
  },
};

/* =========================================
   KOMPETENSER – SJÄLVSKATTADE NIVÅER
========================================= */

const kompetensKategorier = [
  {
    namn: "ADOBE",
    kompetenser: [
      { namn: "Illustrator", procent: 100 },
      { namn: "Photoshop", procent: 55 },
      { namn: "InDesign", procent: 100 },
    ],
  },
  {
    namn: "DIGITAL",
    kompetenser: [
      { namn: "3ds Max", procent: 80 },
      { namn: "3D-rendering", procent: 90 },
      { namn: "ArcGIS", procent: 100 },
      { namn: "AutoCAD", procent: 100 },
      { namn: "SketchUp", procent: 100 },
    ],
  },
  {
    namn: "OFFICE",
    kompetenser: [
      { namn: "Excel", procent: 75 },
      { namn: "PowerPoint", procent: 100 },
      { namn: "Word", procent: 100 },
    ],
  },
  {
    namn: "SPRÅK",
    kompetenser: [
      { namn: "Svenska", procent: 100 },
      { namn: "Engelska", procent: 95 },
      { namn: "Danska", procent: 65 },
      { namn: "Norska", procent: 65 },
      { namn: "Spanska", procent: 55 },
    ],
  },
];

/* =========================================
   ÖVERSÄTT PROJEKTMETODER
========================================= */

function oversattTeknik(teknik, sprak) {
  if (sprak === "sv") {
    return teknik;
  }

  for (const projekt of projektLista) {
    const index = projekt.teknik.indexOf(teknik);

    if (index !== -1) {
      return (
        projekt.oversattningar?.[sprak]?.teknik?.[index] ||
        teknik
      );
    }
  }

  return teknik;
}

/* =========================================
   STATISTIKKOMPONENT
========================================= */

function Statistik({ sprak = "sv" }) {

  const text =
    oversattningar[sprak] || oversattningar.sv;

  /* =====================================
     PROJEKTSTATISTIK
  ===================================== */

  const totaltAntalProjekt = projektLista.length;

  const antalTekniker = projektLista.reduce(
    (resultat, projekt) => {
      projekt.teknik.forEach((teknik) => {
        resultat[teknik] = (resultat[teknik] || 0) + 1;
      });

      return resultat;
    },
    {}
  );

  const sorteradStatistik = Object.entries(antalTekniker)
    .sort((a, b) => b[1] - a[1]);

  /* =====================================
     SAMLA ALLA KOMPETENSER
  ===================================== */

  const allaKompetenser = kompetensKategorier.flatMap(
    (kategori) => kategori.kompetenser
  );

  const oversattaKompetenser = allaKompetenser.map(
    (kompetens) => {
      const sprakIndex =
        oversattningar.sv.sprak.indexOf(kompetens.namn);

      return {
        ...kompetens,
        namn:
          sprakIndex !== -1
            ? text.sprak[sprakIndex]
            : kompetens.namn,
      };
    }
  );

  return (
    <section className="statistik">

      {/* =====================================
          HUVUDRUBRIK
      ===================================== */}

      <div className="statistik-header">

        <div className="statistik-header-vanster">
          <span
            className="statistik-dekor"
            aria-hidden="true"
          />

          <h2>{text.rubrik}</h2>
        </div>

        <span className="statistik-etikett">
          {text.etikett}
        </span>

      </div>

      {/* =====================================
          TVÅ HUVUDKOLUMNER
      ===================================== */}

      <div className="statistik-layout">

        {/* VÄNSTER – PROJEKTMETODER */}

        <div className="statistik-metoder">

          <h3>{text.metoder}</h3>

          <ul className="statistik-grid">
            {sorteradStatistik.map(([teknik, antal]) => {

              const procent =
                totaltAntalProjekt > 0
                  ? (antal / totaltAntalProjekt) * 100
                  : 0;

              return (
                <li
                  className="statistik-rad"
                  key={teknik}
                >
                  <div className="statistik-rad-info">
                    <span>
                      {oversattTeknik(teknik, sprak)}
                    </span>
                    <span>
                      {procent.toFixed(1)} %
                    </span>
                  </div>

                  <div className="statistik-stapel">
                    <div
                      className="statistik-stapel-fyllning"
                      style={{
                        width: `${procent}%`,
                      }}
                    />
                  </div>

                  {antal >= 2 && (
                    <span className="statistik-markering">
                      {text.aterkommande}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>

        </div>

        {/* HÖGER – KUNSKAPSNIVÅ */}

        <div className="statistik-kunskapsniva">

          <h3>{text.kunskapsniva}</h3>

          <ul className="statistik-grid">
            {oversattaKompetenser.map((kompetens) => (
              <li
                className="statistik-rad"
                key={kompetens.namn}
              >
                <div className="statistik-rad-info">
                  <span>{kompetens.namn}</span>
                  <span>{kompetens.procent} %</span>
                </div>

                <div className="statistik-stapel">
                  <div
                    className="statistik-stapel-fyllning"
                    style={{
                      width: `${kompetens.procent}%`,
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>

        </div>

      </div>

    </section>
  );
}

export default Statistik;
