
import { useParams, Link } from "react-router-dom";
import projektLista from "../data/projekt.json";

function ProjektDetalj() {
  // Hämta projektets ID från webbadressen
  const { id } = useParams();

  // Hitta rätt projekt i projekt.json
  const projekt = projektLista.find(
    (p) => p.id === Number(id)
  );

  // Om projektet inte finns
  if (!projekt) {
    return (
      <section className="projekt-detalj">
        <h1>Projektet hittades inte</h1>

        <Link to="/projekt">
          Tillbaka till alla projekt
        </Link>
      </section>
    );
  }

  // Hämta projektets information
  const { titel, text, teknik } = projekt;

  return (
    <section className="projekt-detalj">
      <h1>{titel}</h1>

      <p>{text}</p>

      <h2>Tekniker och metoder</h2>

      <ul>
        {teknik.map((namn) => (
          <li key={namn}>{namn}</li>
        ))}
      </ul>

      <Link to="/projekt">
        Tillbaka till alla projekt
      </Link>
    </section>
  );
}

export default ProjektDetalj;
