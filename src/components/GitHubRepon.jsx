
/* =========================================
   GITHUB – EMMA LEHTINEN
   SVENSKA / ENGELSKA / FINSKA
========================================= */

import { useEffect, useState } from "react";
import { GITHUB_ANVANDARE } from "../data/installningar";
import {
  FileCode2,
  Box,
  Workflow,
  ArrowRight,
} from "lucide-react";

import "./GitHubRepon.css";

/* =========================================
   GITHUB – INSTÄLLNINGAR
========================================= */

const REPO_NAMN = "min-sida";

const REPO_URL =
  `https://github.com/${GITHUB_ANVANDARE}/${REPO_NAMN}`;

/* =========================================
   ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    rubrik: "MINA GITHUB-PROJEKT",
    kod: "KODPROJEKT",
    visualisering: "VISUALISERINGAR",
    teknik: "TEKNISKA UPPGIFTER",
    visaGithub: "VISA PÅ GITHUB",
    laddar: "Laddar GitHub-projekt...",
    fel: "Kunde inte hämta GitHub-projekten.",
    datum: "sv-SE",

    projekt: {
      portfolio: "Min React-portfolio",
      visualisering1: "Portfolio – Visualisering",
      visualisering2: "Projekt 2 – Visualisering",
      visualisering3: "Projekt 3 – Visualisering",
      html: "HTML – Webbstruktur",
      vite: "Vite – Projektkonfiguration",
      eslint: "ESLint – Kodkontroll",
    },
  },

  en: {
    rubrik: "MY GITHUB PROJECTS",
    kod: "CODE PROJECTS",
    visualisering: "VISUALIZATIONS",
    teknik: "TECHNICAL TASKS",
    visaGithub: "VIEW ON GITHUB",
    laddar: "Loading GitHub projects...",
    fel: "Could not load GitHub projects.",
    datum: "en-GB",

    projekt: {
      portfolio: "My React portfolio",
      visualisering1: "Portfolio – Visualization",
      visualisering2: "Project 2 – Visualization",
      visualisering3: "Project 3 – Visualization",
      html: "HTML – Web structure",
      vite: "Vite – Project configuration",
      eslint: "ESLint – Code checking",
    },
  },

  fi: {
    rubrik: "GITHUB-PROJEKTINI",
    kod: "KOODIPROJEKTIT",
    visualisering: "VISUALISOINNIT",
    teknik: "TEKNISET TEHTÄVÄT",
    visaGithub: "KATSO GITHUBISSA",
    laddar: "Ladataan GitHub-projekteja...",
    fel: "GitHub-projektien lataaminen epäonnistui.",
    datum: "fi-FI",

    projekt: {
      portfolio: "React-portfolioni",
      visualisering1: "Portfolio – Visualisointi",
      visualisering2: "Projekti 2 – Visualisointi",
      visualisering3: "Projekti 3 – Visualisointi",
      html: "HTML – Verkkosivun rakenne",
      vite: "Vite – Projektin asetukset",
      eslint: "ESLint – Koodin tarkistus",
    },
  },
};

/* =========================================
   KATEGORIER OCH PROJEKT
========================================= */

const kategorier = {
  kod: [
    {
      namnNyckel: "portfolio",
      fil: null,
    },
  ],

  visualisering: [
    {
      namnNyckel: "visualisering1",
      fil: "portfoliosida.pdf",
    },
    {
      namnNyckel: "visualisering2",
      fil: "projekt2.pdf",
    },
    {
      namnNyckel: "visualisering3",
      fil: "projekt3.pdf",
    },
  ],

  teknik: [
    {
      namnNyckel: "html",
      fil: "index.html",
    },
    {
      namnNyckel: "vite",
      fil: "vite.config.js",
    },
    {
      namnNyckel: "eslint",
      fil: "eslint.config.js",
    },
  ],
};

/* =========================================
   HUVUDKOMPONENT
========================================= */

function GitHubRepon({ sprak = "sv" }) {
  const [repon, setRepon] = useState([]);
  const [aktivKategori, setAktivKategori] =
    useState(null);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");
  const [aktuellTid, setAktuellTid] =
    useState(new Date());

  const text =
    oversattningar[sprak] || oversattningar.sv;

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
          throw new Error(
            "Kunde inte hämta GitHub-projekt"
          );
        }

        const data = await svar.json();
        setRepon(data);
      } catch {
        setFel("hamtningsfel");
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

  /* =====================================
     FORMATERA DATUM EFTER SPRÅK
  ===================================== */

  const datumText = aktuellTid
    .toLocaleDateString(text.datum, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/Stockholm",
    })
    .toUpperCase();

  /* =====================================
     VISA GITHUB-SEKTIONEN
  ===================================== */

  return (
    <section className="github-repon">

      {/* =====================================
          VÄNSTRA SIDAN
      ===================================== */}

      <div className="github-innehall">

        <h2>{text.rubrik}</h2>

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
            <FileCode2
              className="github-ny-ikon"
              aria-hidden="true"
            />

            <span>{text.kod}</span>

            <ArrowRight
              className="github-pil"
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            className="github-kategori visualisering"
            onClick={() =>
              visaKategori("visualisering")
            }
            aria-expanded={
              aktivKategori === "visualisering"
            }
            aria-controls="github-projektlista"
          >
            <Box
              className="github-ny-ikon"
              aria-hidden="true"
            />

            <span>{text.visualisering}</span>

            <ArrowRight
              className="github-pil"
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            className="github-kategori teknik"
            onClick={() => visaKategori("teknik")}
            aria-expanded={aktivKategori === "teknik"}
            aria-controls="github-projektlista"
          >
            <Workflow
              className="github-ny-ikon"
              aria-hidden="true"
            />

            <span>{text.teknik}</span>

            <ArrowRight
              className="github-pil"
              aria-hidden="true"
            />
          </button>

        </div>

        {/* =====================================
            PROJEKTLISTA
        ===================================== */}

        {aktivKategori && (
          <div
            className="github-projektlista"
            id="github-projektlista"
          >
            {kategorier[aktivKategori].map(
              (projekt) => (
                <a
                  key={projekt.namnNyckel}
                  href={skapaLank(projekt.fil)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text.projekt[projekt.namnNyckel]} →
                </a>
              )
            )}
          </div>
        )}

        {/* =====================================
            LADDNING OCH FEL
        ===================================== */}

        {laddar && (
          <p>{text.laddar}</p>
        )}

        {fel && (
          <p role="alert">{text.fel}</p>
        )}

        {/* =====================================
            DATUM
        ===================================== */}

        <p className="github-datum">
          {datumText}
        </p>

      </div>

      {/* =====================================
          HÖGRA SIDAN – GITHUB-LÄNK
      ===================================== */}

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

          <span>{text.visaGithub}</span>

          <ArrowRight
            className="github-lank-pil"
            aria-hidden="true"
          />

        </a>

      </div>

    </section>
  );
}

export default GitHubRepon;
