
/* =========================================
   HEADER – MODERN & STRUKTURERAD
========================================= */

import "./Header.css";

import bildspelBild from "../assets/bildsspel.png";

function Header({ namn, titel }) {
  return (
    <header className="header">

      <div className="header-innehall">

        {/* VÄNSTER – NAMN OCH PRESENTATION */}
        <div className="header-vanster">

          <p className="header-underrubrik">
            {titel}
          </p>
          <h1>{namn}</h1>
          <span
              className="header-linje"
              aria-hidden="true"
            />

          <div className="header-intro">

            <p>
              Arkitektur, kommunikation och
              visualisering med fokus på rumslig
              förståelse och kreativ gestaltning.
            </p>

          </div>

        </div>

        {/* HÖGER – ARKITEKTURILLUSTRATION */}
        <div className="header-hoger">

          <img
            src={bildspelBild}
            alt="Arkitektur och visualisering"
            className="header-huvudbild"
          />

        </div>

      </div>

    </header>
  );
}

export default Header;
