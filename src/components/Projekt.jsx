import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import Hero1 from "../assets/Hero1.jpg";
import Hero2 from "../assets/Hero2.jpg";
import Hero3 from "../assets/Hero3.jpg";

   const projekt = [
  {
    id: 1,
    titel: "Min portfoliosida",
    text: "En visuellt utformad portfolio som presenterar projekt inom arkitektur, stadsutveckling och rumslig gestaltning.",
    teknik: "Analys, Visualisering, Gestaltning",
    bild: Hero1,
    lank: "/projekt/portfoliosida.pdf"
  },
  {
    id: 2,
    titel: "Metodbok - Rosengård",
    text: "Analys av Rosengårds urbana miljö med fokus på platsens kvaliteter, möjligheter och utbud för unga vuxna.",
    teknik: "Workshop, Intervjuer, Platsanalys",
    bild: Hero2,
    lank: "/projekt/projekt2.pdf"
  },
  {
    id: 3,
    titel: "Västra Hamnen",
    text: "Rumslig analys av Västra Hamnens urbana miljö med fokus på stadsstruktur, gestaltning och platsens kvaliteter.",
    teknik: "Plats- och Desginanalys, Skisser",
    bild: Hero3,
    lank: "/projekt/projekt3.pdf"
  }
];

function Projekt() {
  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt;</h2>

      <div className="projekt-lista">
    
      {projekt.map((p) => (
    <ProjektKort
      key={p.id}
      titel={p.titel}
      text={p.text}
      teknik={p.teknik}
      bild={p.bild}
      lank={p.lank}
    />
     ))}

      </div>
    </section>
  );

}

export default Projekt;
