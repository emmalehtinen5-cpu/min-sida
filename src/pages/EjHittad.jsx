import "./EjHittad.css";
import { Link, useNavigate } from "react-router-dom";

function EjHittad() {
     const navigate = useNavigate();
  return (
    <section className="ej-hittad">
      <h1>404 – Sidan hittades inte</h1>
      <p>Adressen du söker finns inte.</p>

      <Link to="/" className="hero-knapp">
        Till startsidan
      </Link>
      <button
        type="button"
        className="hero-knapp"
        onClick={() => navigate(-1)}
        >
        Gå tillbaka
        </button>
    </section>
  );
}

export default EjHittad;