
import { useEffect, useState } from "react";
import { snyggtDatum, kortText } from "../utils/text";
import { GITHUB_ANVANDARE } from "../data/installningar";

function GitHubRepon() {
  const [repon, setRepon] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamtaRepon() {
    try {
    const API_URL = `https://api.github.com/users/${GITHUB_ANVANDARE}/repos`;
    const svar = await fetch(API_URL);
    
        if (!svar.ok) {
          throw new Error("Kunde inte hämta GitHub-projekt");
        }

        const data = await svar.json();
        setRepon(data);
      } catch (error) {
        setFel("Kunde inte hämta GitHub-projekten.");
      } finally {
        setLaddar(false);
      }
    }

    hamtaRepon();
  }, []);

  if (laddar) return <p>Laddar GitHub-projekt...</p>;
  if (fel) return <p>{fel}</p>;

  return (
    <section className="github-repon">
      <h2>Mina GitHub-projekt</h2>

      <div className="github-lista">
        {repon.map((r) => (
          <article className="github-kort" key={r.id}>
            <h3>{r.name}</h3>

            <p>
              {kortText(
                r.description || "Ingen beskrivning än.",
                100
              )}
            </p>

            <p className="github-datum">
              Uppdaterad {snyggtDatum(r.updated_at)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GitHubRepon;
