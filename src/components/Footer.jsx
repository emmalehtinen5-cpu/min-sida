import { Link } from "react-router-dom";
import blommaBild from "../assets/blomma.png";
import "./Footer.css";

function Footer() {
  const år = new Date().getFullYear();

  return (
    <footer className="footer" id="kontakt">

      <div className="footer-innehall">

        {/* VÄNSTER – PERSONLIG IDENTITET */}
        <div className="footer-presentation">

          {/* NY BLOMSTERBILD */}
          <div className="footer-profilbild">
            <img
              src={blommaBild}
              alt="Botanisk illustration av en blomma"
              className="footer-blomma"
            />
          </div>

          <div className="footer-profiltext">

            <Link to="/" className="footer-namn">
              <span>Emma Lehtinen</span>
              <span className="footer-namn-pil" aria-hidden="true">
                ↗
              </span>
            </Link>

            <p className="footer-titel">
              ARKITEKTUR. KOMMUNIKATION. VISUALISERING.
            </p>

            <div
              className="footer-dekorlinje"
              aria-hidden="true"
            />

            <p className="footer-plats">
              <svg
                className="footer-platsikon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>

              <span>Helsingborg, Sverige</span>
            </p>

          </div>
        </div>

        {/* MITTEN – UTFORSKA */}
        <nav
          className="footer-navigation"
          aria-label="Sidfotsnavigation"
        >
          <h2 className="footer-rubrik">
            <span>UTFORSKA</span>
          </h2>

          <div className="footer-lankar">

            <Link to="/">
              <span>Hem</span>
              <span className="footer-pil" aria-hidden="true">↗</span>
            </Link>

            <Link to="/om-mig">
              <span>Om mig</span>
              <span className="footer-pil" aria-hidden="true">↗</span>
            </Link>

            <Link to="/projekt">
              <span>Projekt</span>
              <span className="footer-pil" aria-hidden="true">↗</span>
            </Link>

            <a
              href="/portfoliosida.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Portfolio</span>
              <span className="footer-pil" aria-hidden="true">↗</span>
            </a>

          </div>
        </nav>

        {/* HÖGER – KONTAKT */}
        <div className="footer-kontakt">

          <h2 className="footer-rubrik">
            <span>KONTAKT</span>
          </h2>

          <p className="footer-kontakt-intro">
            Har du en idé eller vill komma i kontakt?
            Jag hör gärna från dig.
          </p>

          <div className="footer-kontaktlankar">

            <a href="mailto:emmalehtinen5@gmail.com">
              <svg
                className="footer-kontaktikon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="0" />
                <path d="m2 5 10 8 10-8" />
              </svg>

              <span>Skicka ett mejl</span>
              <span className="footer-pil" aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/emma-lehtinen-956443ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="footer-linkedinikon"
                aria-hidden="true"
              >
                in
              </span>

              <span>LinkedIn</span>
              <span className="footer-pil" aria-hidden="true">↗</span>
            </a>

          </div>
        </div>

      </div>

      {/* SALVIAGRÖN NEDERDEL */}
      <div className="footer-nederdel">
        <p>© {år} Emma Lehtinen</p>

        <span
          className="footer-nederdel-symbol"
          aria-hidden="true"
        >
          ✳
        </span>
      </div>

    </footer>
  );
}

export default Footer;
