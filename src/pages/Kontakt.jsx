import { useState } from "react";
import "./Kontakt.css";

function Kontakt() {
    const [namn, setNamn] = useState("");
    const [epost, setEpost] = useState("");
    const [meddelande, setMeddelande] = useState("");
    const [skickat, setSkickat] = useState(false);
    const [fel, setFel] = useState("");

    const hanteraKlick = (e) => {
      e.preventDefault();
    if (!namn.trim() || !epost.trim() || !meddelande.trim()) {
    setFel("Du måste fylla i alla fält innan du skickar!");
    return;
  }
if (!epost.includes("@")) {
  setFel("Ange en giltig e-postadress med @.");
  return;
}
 setFel("");
 console.log(namn, epost, meddelande);
 setSkickat(true); 
 setEpost("");
 setMeddelande("");
};

  return (
    <section className="kontakt1">

      <div className="kontakt-info">
        <h2>Kontakta mig</h2>
        <p className="kontakt-text">
          Har du en fråga? Skriv ett meddelande!
        </p>
      </div>
       {!skickat && (
      <form className="kontakt-form" onSubmit={hanteraKlick} noValidate>

        <label htmlFor="namn">Namn</label>
        <input
          type="text"
          id="namn"
          name="namn"
           autoComplete="name"
          placeholder="Ditt namn"
          value={namn}
           onChange={(e) => setNamn(e.target.value)}
        />

        <label htmlFor="epost">E-post</label>
        <input
          type="email"
          id="epost"
          name="epost"
          placeholder="namn@exempel.se"
          value={epost}
          onChange={(e) => setEpost(e.target.value)}
        />

        <label htmlFor="meddelande">Meddelande</label>
        <textarea
          id="meddelande"
          name="meddelande"
          rows="5"
           value={meddelande}
           onChange={(e) => setMeddelande(e.target.value)}
        />

        <div className="hero-underdel">
          <button
          type="submit"
          className="hero-knapp"
          >
          Skicka
          </button>
        </div>
        {fel && (
        <p className="kontakt-fel">{fel}</p>
        )}
        </form> 
      )}
        {skickat && (
          <p className="kontakt-bekraftelse">
            Tack {namn}! Ditt meddelande är ifyllt och redo att skickas.
          </p>
        )}

    </section>
  );
}

export default Kontakt;