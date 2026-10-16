import "./Hero.css";
import heroBild from "../assets/Hero1-motiv.jpg";
import Valkommen from "./Valkommen";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-intro">
      <div className="hero-innehall">
        <h1 className="hero-intro" id="hero-intro">Välkommen</h1>
        <Valkommen showSkills={false} />
      </div>
      <div className="hero-bildkolumn">
        <div className="hero-bildram">
          <div className="hero-bildram-inre">
            <img
              className="hero-bild"
              src={heroBild}
              alt="Retro affisch för Feria de Sevilla, 1969"
            />
          </div>
        </div>
      </div>
      <div className="hero-underdel">
        <a className="hero-knapp" href="#sommar">
          läs vidare
        </a>
        <blockquote className="hero-text">
          En kreativ plats där data blir till stad och analys blir till form.
        </blockquote>
      </div>
    </section>
  );
}

export default Hero;