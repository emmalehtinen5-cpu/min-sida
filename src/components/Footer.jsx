import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  const år = new Date().getFullYear();  

  return (
    <footer className="footer" id="kontakt">
      <div className="footer-innehall">
        <nav className="footer-lankar" aria-label="Sidnavigering">
          <Link to="/">Hem</Link>
          <a href="/#kontakt">Länkar</a>
          <Link to="/om-mig">Om mig</Link>
          <Link to="/">Portfolio</Link>
          <a href="/#projekt">Projekt</a>
        </nav>
        <div className="footer-kontakt">
          <a href="mailto:emmalehtinen5@gmail.com">
            Mail: emmalehtinen5@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/emma-lehtinen-956443ab/?isSelfProfile=true">
            www.linkedin.com/in/emma-lehtinen-956443ab
          </a>
          <p className="footer-copyright">©{år} Emma Lehtinen 👾</p>
        </div>
      </div>
      
    </footer>
    
  );
}

export default Footer;