import "./KontaktFormular.css";

function KontaktFormular() {
  return (
    <form className="kontakt-formular">
      <h2>Kontakta mig</h2>

      <p className="kontakt-intro">
        Har du en fråga, ett projekt eller vill diskutera
        ett framtida samarbete? Hör gärna av dig.
      </p>

      <div className="kontakt-falt">
        <label htmlFor="namn">NAMN</label>
        <input
          type="text"
          id="namn"
          placeholder="Ditt namn"
          required
        />
      </div>

      <div className="kontakt-falt">
        <label htmlFor="epost">E-POST</label>
        <input
          type="email"
          id="epost"
          placeholder="Din e-postadress"
          required
        />
      </div>

      <div className="kontakt-falt">
        <label htmlFor="meddelande">MEDDELANDE</label>
        <textarea
          id="meddelande"
          rows="5"
          placeholder="Skriv ditt meddelande..."
          required
        />
      </div>

      <button type="submit" className="hero-knapp">
        Skicka meddelande →
      </button>
    </form>
  );
}

export default KontaktFormular;