
import { NAMN, EPOST } from "../data/installningar";
import { copyright } from "../utils/text";
import { NavLink } from "react-router-dom";
import Sprakvaljare from "./Sprakvaljare";
import "./Footer.css";

function Footer({ sprak,setSprak }) {

  return (
    <footer className="footer" id="kontakt">

      <div className="footer-inner">

        {/* =====================================
            VÄNSTER – SOCIALA IKONER OCH COPYRIGHT
        ===================================== */}

        <div className="footer-vanster">
     {/* =====================================
          SPRÅKVÄLJARE – SV / ENG / FI
      ===================================== */}

      <Sprakvaljare setSprak={setSprak} />


          <div className="footer-social">

            {/* MEJL */}

            <a
              href={`mailto:${EPOST}`}
              aria-label="Skicka mejl till Emma Lehtinen"
              title="Skicka mejl"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="2"
                />
                <path d="m2 6 10 7 10-7" />
              </svg>
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/emma-lehtinen-956443ab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Emma Lehtinen på LinkedIn"
              title="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="2"
                />
                <path d="M7 10v7" />
                <path d="M7 7h.01" />
                <path d="M11 17v-7" />
                <path d="M11 13a3 3 0 0 1 6 0v4" />
              </svg>
            </a>

          </div>

          {/* COPYRIGHT */}

          <span className="footer-copyright">
          {copyright(NAMN.toUpperCase())}
          </span>

        </div>

        {/* =====================================
            HÖGER – NAVIGATION (OFÖRÄNDRAD)
        ===================================== */}

        <nav
          className="footer-meny"
          aria-label="Sidfotsnavigation"
        >
          <NavLink to="/" end>
            {sprak === "en"
            ? "Home"
          : sprak === "fi"
          ? "Etusivu"
            : "Hem"}
          </NavLink>

          <NavLink to="/om-mig">
            {sprak === "en"
            ? "About me"
          : sprak === "fi"
            ? "Minusta"
          : "Om mig"}
          </NavLink>

          <NavLink to="/#projekt">
                      {sprak === "en"
           ? "Projects"
            : sprak === "fi"
            ? "Projektit"
            : "Projekt"}
          </NavLink>

          <a
            href="/portfoliosida.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>

          <NavLink to="/mitt-bollplank">
                {sprak === "en"
              ? "Sounding board"
            : sprak === "fi"
            ? "Sparraus"
               : "Bollplank"}
          </NavLink>
            <NavLink to="/studio92">
            STUDIO92
          </NavLink>

          <NavLink to="/kontakt">
            {sprak === "en"
            ? "Contact"
          : sprak === "fi"
          ? "Yhteystiedot"
          : "Kontakt"}
          </NavLink>
        </nav>

      </div>

      {/* =====================================
          NEDRE ACCENTLINJE – DOLD VIA CSS
      ===================================== */}

      <div className="footer-accent" aria-hidden="true" />

    </footer>
  );
}

export default Footer;
