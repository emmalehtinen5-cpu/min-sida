
import { useState, useEffect } from "react";

/* =========================================
   ADMIN – KONTAKTMEDDELANDEN
   REACT / JAVASCRIPT
========================================= */

function AdminMeddelanden() {

  /* =====================================
     01 – STATE
  ===================================== */

  const [meddelanden, setMeddelanden] = useState([]);
  const [fel, setFel] = useState("");
  const [laddar, setLaddar] = useState(true);

  /* =====================================
     02 – HÄMTA TESTMEDDELANDEN FRÅN EXPRESS
  ===================================== */

  useEffect(() => {

    async function hamtaMeddelanden() {
      try {
        const svar = await fetch(
          "http://localhost:3001/admin/testmeddelanden"
        );

        if (!svar.ok) {
          throw new Error(
            "Kunde inte hämta testmeddelanden."
          );
        }

        const data = await svar.json();

        setMeddelanden(data);

      } catch (error) {
        setFel(error.message);

      } finally {
        setLaddar(false);
      }
    }

    hamtaMeddelanden();

  }, []);

  /* =====================================
     03 – VISA TESTMEDDELANDEN
  ===================================== */

  return (
    <section className="admin-meddelanden">

      <h1>INKOMNA MEDDELANDEN</h1>

      <p>Här visas testmeddelanden från Express.</p>

      {laddar && <p>Hämtar meddelanden...</p>}

      {fel && <p role="alert">{fel}</p>}

      {!laddar && !fel && meddelanden.length === 0 && (
        <p>Inga testmeddelanden hittades.</p>
      )}

      {!fel && meddelanden.map((meddelande, index) => (
        <div key={index}>
          <h2>{meddelande.namn}</h2>
          <p>E-post: {meddelande.email}</p>
          <p>Meddelande: {meddelande.text}</p>
        </div>
      ))}

    </section>
  );
}

export default AdminMeddelanden;
