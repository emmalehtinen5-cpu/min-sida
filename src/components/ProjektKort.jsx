import "./ProjektKort.css";

function ProjektKort({ titel, text, bild, lank }) {
  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt="" />
      <div className="projekt-info">
        <h3>{titel}</h3>
        <p>{text}</p>
        <a className="hero-knapp" href={lank}>
            Se projektet
          </a>
      </div>
    </article>
    
  );
}

export default ProjektKort;