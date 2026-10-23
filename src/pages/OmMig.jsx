import { useState } from "react";
import Header from "../components/Header";
import Valkommen from "../components/Valkommen";
import emmaBild from "../assets/emma.JPG";
import "./OmMig.css";

function OmMig() {
  const [visas, setVisas] = useState(false);
  const [morkt, setMorkt] = useState(false);
  return (
    <>
      <Header
        namn="Emma Lehtinen"
        titel="arkitektur. kommunikation. visualisering."
      />
      <main className={`om-mig-innehall ${morkt ? "morkt-lage" : ""}`}>
        <span className="om-mig-avdelare-kopia-vänster" aria-hidden="true" />
        <div className="om-mig-bildkolumn">
          <img
            className="om-mig-bild"
            src={emmaBild}
            alt="Porträtt av Emma Lehtinen"
          />
           <button
            type="button"
            className="hero-knapp"
            onClick={() => setMorkt(!morkt)}
             >
             {morkt ? "Ljust läge" : "Mörkt läge"}
            </button>
        </div>
        <section className="om-mig-sektion" aria-labelledby="om-mig-rubrik">
          <h2 id="om-mig-rubrik">Om mig</h2>
          <p>
            Jag har ett stort intresse för arkitektur, design och hållbar
            stadsutveckling, med fokus på hur den byggda miljön kan utformas
            för att skapa funktionella, visuella och hållbara lösningar. 
            </p>

            <button 
            className="hero-knapp"
            onClick={() => setVisas(!visas)}
            >
            {visas ? "Visa mindre" : "Läs mer om mig"}
            </button>

            {visas && (
            <p className="om-mig-extra-text"
            style={{ marginTop: "25px" }}
            >
            Med kunskaper inom GIS, rumslig analys och visualisering kombinerar
            jag analytiskt tänkande med teknisk och kreativ kompetens. Jag
            tycker om att utforska hur data, form och samhällsstrukturer
            samverkar och hur komplex information kan omvandlas till tydliga
            analyser, kartor och visuella presentationer. Min bakgrund inom
            administration och kundservice har gett mig en god förmåga att
            arbeta strukturerat, noggrant och självständigt. Jag drivs av att
            utvecklas, lära mig nya verktyg och hitta lösningar där analys,
            design och samhällsutveckling möts.

            Min kreativa sida präglas av ett intresse för form, färg och gestaltning, 
            där både naturen och den byggda miljön är viktiga inspirationskällor. 
            Samspelet mellan naturliga och skapade miljöer väcker min nyfikenhet och 
            inspirerar till nya perspektiv och idéer.
          </p>
          )}
        </section>
        <div className="om-mig-avdelare" aria-hidden="true">
          <svg
            className="om-mig-avdelare-sväng"
            viewBox="0 0 8 192"
            focusable="false"
          >
            <path d="M 2 2 V 186 A 3 3 0 0 0 5 189" />
          </svg>
          <span className="om-mig-avdelare-fortsättning" />
          <div className="om-mig-avdelare-kopia">
            <span className="om-mig-avdelare-kopia-vänster" />
            <svg
              className="om-mig-avdelare-sväng"
              viewBox="0 0 8 192"
              focusable="false"
            >
              <path d="M 1 1 V 186 A 3 3 0 0 0 4 189" />
            </svg>
            <span className="om-mig-avdelare-fortsättning" />
          </div>
        </div>
        <section className="om-mig-kompetenser" aria-label="Kompetenser">
          <Valkommen showIntro={false} />
        </section>
      </main>
    </>
  );
}

export default OmMig;
