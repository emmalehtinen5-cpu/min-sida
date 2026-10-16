import { Link } from "react-router-dom";
import './Navbar.css'; 

function Navbar (){
 return (
    <nav className="navbar">
      <span className="logo">HELSINGBORG</span>
      <div className="lankar">
        <a href="/#kontakt">Länkar</a>
        <Link to="/om-mig">Om mig</Link>
        <Link to="/">Portfolio</Link>
        <a href="/#projekt">Projekt</a>
      </div>
      
    </nav>
  );
}

export default Navbar;