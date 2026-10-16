import Header from "../components/Header";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";

function Hem() {
  return (
    <>
      <Header
        namn="Emma Lehtinen"
        titel="arkitektur. kommunikation. visualisering."
      />
      <Hero />
      <Projekt />
    </>
  );
}

export default Hem;
