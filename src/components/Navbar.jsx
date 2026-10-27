
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import hbgBild from "../assets/hbg.jpg";
import "./Navbar.css";

function Navbar() {
  const [oppen, setOppen] = useState(false);

  const stangMeny = () => setOppen(false);

  return (
    <nav className="navbar" aria-label="Huvudnavigation">

      <div className="navbar-inner">

        {/* VÄNSTER – HELSINGBORG OCH BILD */}
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
              src={hbgBild}
              alt="Helsingborgs stadssiluett"
              className="navbar-stadsbild"

            />
          </Link>

        </div>

        {/* MOBILMENY */}
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

        {/* HÖGER – NAVIGERING */}
        <div
          id="huvudmeny"
          className={oppen ? "lankar oppen" : "lankar"}
        >
          <NavLink
            to="/kontakt"
            onClick={stangMeny}
          >
            Kontakt
          </NavLink>

          <NavLink
            to="/om-mig"
            onClick={stangMeny}
          >
            Om mig
          </NavLink>

          <a
            href="/portfoliosida.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={stangMeny}
          >
            Portfolio
          </a>

          <NavLink
            to="/projekt"
            onClick={stangMeny}
          >
            Projekt
          </NavLink>
        </div>

      </div>

      <div className="navbar-accent" aria-hidden="true" />

    </nav>
  );
}

export default Navbar;
