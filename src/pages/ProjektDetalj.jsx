
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
      {projekt.dokument?.length > 0 && (
        <div className="projekt-dokument">
          <h2>Projektdokument</h2>

          <ul>
            {projekt.dokument.map((dokument) => (
              <li key={dokument.fil}>
                <a
                  href={dokument.fil}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dokument.titel} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
            {projekt.grupparbete && (
        <div className="projekt-grupparbete">
          <h2>GRUPPARBETE</h2>
          <p>{projekt.grupparbete}</p>
        </div>
      )}

      {projekt.video && (
        <div className="projekt-video">
          <h2>REKLAMFILM – TEATER I SEGE PARK</h2>

          <video controls preload="metadata" width="100%">
            <source src={projekt.video} type="video/mp4" />
            Din webbläsare stöder inte videouppspelning.
          </video>
        </div>
      )}
      <Link to="/projekt">
        Tillbaka till alla projekt
      </Link>
    </section>
  );
}

export default ProjektDetalj;
