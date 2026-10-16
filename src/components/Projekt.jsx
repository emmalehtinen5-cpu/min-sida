import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import Hero1 from "../assets/Hero1.jpg";
import Hero2 from "../assets/Hero2.jpg";
import Hero3 from "../assets/Hero3.jpg";

function Projekt() {
  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-lista">
        <ProjektKort
          titel="Min portfoliosida"
          text="Sidan du tittar på nu. Byggd med React och CSS."
          bild={Hero1}
          lank="/projekt/portfoliosida.pdf"

        />
        <ProjektKort 
        titel="Projekt 2" 
        text="Kommer snart." 
        bild={Hero2}
        lank="/projekt/projekt2.pdf"

         />
        <ProjektKort 
        titel="Projekt 3" 
        text="Kommer snart." 
        bild={Hero3}
        lank="/projekt/projekt3.pdf"

         />
      </div>
    </section>
  );

}

export default Projekt;