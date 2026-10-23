import Header from "../components/Header";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import Raknare from "../components/Raknare";
import VisaMer from "../components/VisaMer";

function Hem() {
  return (
    <>
      <Header
        namn="Emma Lehtinen"
        titel="arkitektur. kommunikation. visualisering."
      />
      <Hero />
      <Projekt />
      <VisaMer />
      <Raknare />
    </>
  );
}

export default Hem;
