
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import VisaMer from "../components/VisaMer";
import Raknare from "../components/Raknare";

function Hem({
  endastHero = false,
  utanHero = false
}) {
  if (endastHero) {
    return (
      <div className="hem-innehall">
        <Hero />
      </div>
    );
  }

  if (utanHero) {
    return (
      <div className="hem-innehall">
        <Projekt />
        <VisaMer />
        <Raknare />
      </div>
    );
  }

  return (
    <div className="hem-innehall">
      <Hero />
      <Projekt />
      <VisaMer />
      <Raknare />
    </div>
  );
}

export default Hem;
