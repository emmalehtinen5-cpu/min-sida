import "./Hero.css";
import heroBild from "../assets/Hero1-motiv.jpg";
import Valkommen from "./Valkommen";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-intro">
      <div className="hero-innehall">
        <h1 className="hero-intro" id="hero-intro">Välkommen in!</h1>
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
        <Link className="hero-knapp" to="/projekt">
          Se mina projekt
        </Link>
        <blockquote className="hero-text">
          En kreativ plats där data blir till stad och analys blir till form.
        </blockquote>
      </div>
    </section>
  );
}

export default Hero;