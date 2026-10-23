import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Hem from "./pages/Hem";
import OmMig from "./pages/OmMig";
import Kontakt from "./pages/Kontakt";
import ProjektSida from "./pages/ProjektSida";
import EjHittad from "./pages/EjHittad";

function App() {
  return (
    <div className="app">
  <Navbar />
  <Routes>
    <Route path="/" element={<Hem />} />
    <Route path="/om-mig" element={<OmMig />} />
    <Route path="/kontakt" element={<Kontakt />} />
    <Route path="/projekt" element={<ProjektSida />} />
    <Route path="*" element={<EjHittad />} />
  </Routes>
  <Footer />
</div>

  );
}

export default App;