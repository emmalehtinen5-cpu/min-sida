import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [oppen, setOppen] = useState(false);
  return (
      <nav className="navbar">
      <span className="logo">HELSINGBORG</span>
      <button
  type="button"
  className="meny-knapp"
  onClick={() => setOppen(!oppen)}
  aria-expanded={oppen}
  aria-controls="huvudmeny"
  aria-label="Meny"
>
  {oppen ? "✕" : "☰"}
</button>

      <div id="huvudmeny"
    className={oppen ? "lankar oppen" : "lankar"}
      >
        <NavLink to="/kontakt"onClick={() => setOppen(false)}>
        Kontakt
      </NavLink>
        <NavLink to="/om-mig"onClick={() => setOppen(false)}>
        Om mig
      </NavLink>

       <a href="/portfoliosida.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => setOppen(false)}
            >

          Portfolio
          </a>  

        <NavLink to="/projekt" onClick={() => setOppen(false)}>
        Projekt</NavLink>
        </div>
      </nav>
  );
}

export default Navbar;