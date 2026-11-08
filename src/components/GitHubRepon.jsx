
import { useEffect, useState } from "react";
import { GITHUB_ANVANDARE } from "../data/installningar";
import "./GitHubRepon.css";
import { FileCode2, Box, Workflow, ArrowRight } from "lucide-react";
/* =========================================
   GITHUB – INSTÄLLNINGAR
========================================= */

const REPO_NAMN = "min-sida";

const REPO_URL =
  `https://github.com/${GITHUB_ANVANDARE}/${REPO_NAMN}`;

/* =========================================
   KATEGORIER OCH PROJEKT
========================================= */

const kategorier = {
  kod: [
    {
      namn: "Min React-portfolio",
      fil: null,
    },
  ],

  visualisering: [
    {
      namn: "Portfolio – Visualisering",
      fil: "portfoliosida.pdf",
    },
    {
      namn: "Projekt 2 – Visualisering",
      fil: "projekt2.pdf",
    },
    {
      namn: "Projekt 3 – Visualisering",
      fil: "projekt3.pdf",
    },
  ],

  teknik: [
    {
      namn: "HTML – Webbstruktur",
      fil: "index.html",
    },
    {
      namn: "Vite – Projektkonfiguration",
      fil: "vite.config.js",
    },
    {
      namn: "ESLint – Kodkontroll",
      fil: "eslint.config.js",
    },
  ],
};


/* =========================================
   HUVUDKOMPONENT
========================================= */

function GitHubRepon() {
  const [repon, setRepon] = useState([]);
  const [aktivKategori, setAktivKategori] = useState(null);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");
  const [aktuellTid, setAktuellTid] = useState(new Date());

  /* =====================================
     UPPDATERA AKTUELL TID
  ===================================== */

  useEffect(() => {
    const timer = setInterval(() => {
      setAktuellTid(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* =====================================
     HÄMTA GITHUB-PROJEKT
  ===================================== */

  useEffect(() => {
    async function hamtaRepon() {
      try {
        const API_URL =
          `https://api.github.com/users/${GITHUB_ANVANDARE}/repos?per_page=100`;

        const svar = await fetch(API_URL);

        if (!svar.ok) {
          throw new Error("Kunde inte hämta GitHub-projekt");
        }

        const data = await svar.json();
        setRepon(data);
      } catch {
        setFel("Kunde inte hämta GitHub-projekten.");
      } finally {
        setLaddar(false);
      }
    }

    hamtaRepon();
  }, []);

  /* =====================================
     VISA / DÖLJ KATEGORI
  ===================================== */

  function visaKategori(kategori) {
    setAktivKategori((tidigare) =>
      tidigare === kategori ? null : kategori
    );
  }

  /* =====================================
     SKAPA LÄNK TILL GITHUB-FIL
  ===================================== */

  function skapaLank(fil) {
    if (!fil) {
      return REPO_URL;
    }

    const repo = repon.find(
      (r) => r.name === REPO_NAMN
    );

    const gren = repo?.default_branch || "main";

    return `${REPO_URL}/blob/${encodeURIComponent(gren)}/${encodeURIComponent(fil)}`;
  }

  return (
    <>

      {/* =====================================
          BEFINTLIG GITHUB-SEKTION
      ===================================== */}

      <section className="github-repon">

        {/* VÄNSTRA SIDAN */}

        <div className="github-innehall">

          <h2>MINA GITHUB-PROJEKT</h2>

          <div className="github-linje"></div>

          {/* KATEGORIKNAPPAR */}

          <div className="github-kategorier">

            <button
              type="button"
              className="github-kategori kod"
              onClick={() => visaKategori("kod")}
              aria-expanded={aktivKategori === "kod"}
              aria-controls="github-projektlista"
            >
              <FileCode2 className="github-ny-ikon" aria-hidden="true" />

              <span>KODPROJEKT</span>
              <ArrowRight className="github-pil" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="github-kategori visualisering"
              onClick={() => visaKategori("visualisering")}
              aria-expanded={aktivKategori === "visualisering"}
              aria-controls="github-projektlista"
            >
              <Box className="github-ny-ikon" aria-hidden="true" />
              <span>VISUALISERINGAR</span>
              <ArrowRight className="github-pil" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="github-kategori teknik"
              onClick={() => visaKategori("teknik")}
              aria-expanded={aktivKategori === "teknik"}
              aria-controls="github-projektlista"
            >
              <Workflow className="github-ny-ikon" aria-hidden="true" />
              <span>TEKNISKA UPPGIFTER</span>
              <ArrowRight className="github-pil" aria-hidden="true" />
            </button>

          </div>

          {/* PROJEKTLISTA */}

          {aktivKategori && (
            <div
              className="github-projektlista"
              id="github-projektlista"
            >
              {kategorier[aktivKategori].map((projekt) => (
                <a
                  key={projekt.fil || projekt.namn}
                  href={skapaLank(projekt.fil)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {projekt.namn} →
                </a>
              ))}
            </div>
          )}

          {/* LADDNING OCH FEL */}

          {laddar && (
            <p>Laddar GitHub-projekt...</p>
          )}

          {fel && (
            <p role="alert">{fel}</p>
          )}

          {/* DATUM – VISAS ENDAST HÄR */}

          <p className="github-datum">
            {aktuellTid.toLocaleDateString("sv-SE", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "Europe/Stockholm",
            }).toUpperCase()}
          </p>

        </div>

        {/* HÖGRA SIDAN – ARKITEKTURFOTO */}

        <div className="github-bild">

          <a
            href={`https://github.com/${GITHUB_ANVANDARE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-lank"
          >

            {/* GITHUB-LOGOTYP */}

            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.12c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.95 10.95 0 0 1 12 6.32c.97 0 1.95.13 2.86.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.41-2.68 5.39-5.24 5.68.41.35.77 1.02.77 2.06v2.93c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>

            <span>VISA PÅ GITHUB</span>
            <ArrowRight className="github-lank-pil" aria-hidden="true" />

          </a>

        </div>

      </section>

    </>
  );
}

export default GitHubRepon;
