
import { useState, useEffect } from "react";
import "./DagensTanke.css";

function hamtaTankar() {
  try {
    const sparat = localStorage.getItem("studio92-tankar");
    return sparat ? JSON.parse(sparat) : [];
  } catch {
    return [];
  }
}

function DagensTanke() {
  const [tankar, setTankar] = useState(hamtaTankar);
  const [nyTanke, setNyTanke] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "studio92-tankar",
      JSON.stringify(tankar)
    );
  }, [tankar]);

  function sparaTanke() {
    const text = nyTanke.trim();
    if (!text) return;

    const tanke = {
      id: crypto.randomUUID(),
      text,
      datum: new Date().toLocaleDateString("sv-SE"),
    };

    setTankar((tidigare) => [tanke, ...tidigare]);
    setNyTanke("");
  }

  function taBortTanke(id) {
    setTankar((tidigare) =>
      tidigare.filter((tanke) => tanke.id !== id)
    );
  }

  return (
    <section className="dagens-tanke">
      <div className="tanke-rubrik">
        <span className="tanke-nummer">03</span>
        <h2>DAGENS TANKE.</h2>
      </div>

      <div className="tanke-innehall">
        <label htmlFor="ny-tanke">
          EN IDÉ, EN REFLEKTION ELLER EN TANKE.
        </label>

        <textarea
          id="ny-tanke"
          placeholder="Vad tänker du på idag?"
          value={nyTanke}
          onChange={(e) => setNyTanke(e.target.value)}
          rows={4}
        />

        <button type="button" onClick={sparaTanke}>
          SPARA TANKE
        </button>
      </div>

      <div className="tanke-lista">
        {tankar.map((tanke) => (
          <article className="tanke-kort" key={tanke.id}>
            <span className="tanke-datum">{tanke.datum}</span>
            <p>{tanke.text}</p>

            <button
              type="button"
              onClick={() => taBortTanke(tanke.id)}
            >
              TA BORT
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DagensTanke;
