
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Helsingborg from "../assets/minhbgbild.png";
import "./Navbar.css";

function Navbar({ sprak }) {
  const [oppen, setOppen] = useState(false);

  const stangMeny = () => setOppen(false);

  return (
    <nav className="navbar" aria-label="Huvudnavigation">

      <div className="navbar-inner">

        {/* =====================================
            VÄNSTER – HELSINGBORG OCH BILD
        ===================================== */}

        <div className="navbar-vanster">

          <Link
            to="/"
            className="logo"
            onClick={stangMeny}
          >
            HELSINGBORG
          </Link>

          <Link
            to="/"
            className="navbar-stadslank"
            onClick={stangMeny}
            aria-label="Till startsidan"
          >
            <img
              className="navbar-siluett"
              src={Helsingborg}
              alt="Helsingborgs stadssiluett"
            />
          </Link>

        </div>

        {/* =====================================
            MOBILMENY
        ===================================== */}

        <button
          type="button"
          className="meny-knapp"
          onClick={() => setOppen(!oppen)}
          aria-expanded={oppen}
          aria-controls="huvudmeny"
          aria-label={oppen ? "Stäng meny" : "Öppna meny"}
        >
          <span aria-hidden="true">
            {oppen ? "✕" : "☰"}
          </span>
        </button>

        {/* =====================================
            HÖGER – NAVIGERING
        ===================================== */}

        <div
          id="huvudmeny"
          className={oppen ? "lankar oppen" : "lankar"}
        >

          {/* HEM */}

          <NavLink
            to="/"
            end
            onClick={stangMeny}
          >
             {sprak === "en"
              ? "Home"
              : sprak === "fi"
              ? "Etusivu"
              : "Hem"}
          </NavLink>

          {/* OM MIG */}

          <NavLink
            to="/om-mig"
            onClick={stangMeny}
          >
             {sprak === "en"
            ? "About me"
            : sprak === "fi"
             ? "Minusta"
            : "Om mig"}
          </NavLink>

          {/* PROJEKT – DIREKT TILL MINA PROJEKT */}

          <Link
            to="/#projekt"
            onClick={stangMeny}
          >
              {sprak === "en"
              ? "Projects"
              : sprak === "fi"
            ? "Projektit"
              : "Projekt"}
                  </Link>

          {/* PORTFOLIO */}

          <a
            href="/portfoliosida.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={stangMeny}
          >
            Portfolio
          </a>

          {/* BOLLPLANK */}

          <NavLink
            to="/mitt-bollplank"
            onClick={stangMeny}
          >
          {sprak === "en"
         ? "Sounding board"
          : sprak === "fi"
         ? "Sparraus"
          : "Bollplank"}
          </NavLink>

        {/* STUDIO92 */}
        <NavLink
        to="/studio92"
      onClick={stangMeny}
        >
        STUDIO92
        </NavLink>

          {/* KONTAKT */}

          <NavLink
            to="/kontakt"
            onClick={stangMeny}
          >   {sprak === "en"
            ? "Contact"
          : sprak === "fi"
          ? "Yhteystiedot"
          : "Kontakt"}
          </NavLink>

        </div>

      </div>

      {/* =====================================
          DEKORATIV ACCENTLINJE
      ===================================== */}

      <div
        className="navbar-accent"
        aria-hidden="true"
      />

    </nav>
  );
}

export default Navbar;
