
/* =========================================
   LOGIK.JSX – JAVASCRIPT
   VILLKOR OCH LOOPAR
========================================= */

function Logik() {

  /* =====================================
     IF / ELSE IF / ELSE
  ===================================== */

  const temperatur = 18;
let vaderText;

  if (temperatur >= 25) {
    vaderText = "Det är varmt ute.";
  } else if (temperatur >= 15) {
    vaderText = "Det är behagligt ute.";
  } else {
    vaderText = "Det är kallt ute.";
  }

  /* =====================================
     === OCH FALSY
  ===================================== */

  const antal = 0;
  const arNoll = antal === 0;
  const arFalsy = !antal;

  /* =====================================
     FOR-LOOP
  ===================================== */

  const nummer = [];

  for (let i = 1; i <= 5; i++) {
    nummer.push(i);
  }

  /* =====================================
     FOR...OF
  ===================================== */

  const stader = [
    "Helsingborg",
    "Malmö",
    "Lund"
  ];

  const stadLista = [];

  for (const stad of stader) {
    stadLista.push(stad);
  }

  /* =====================================
     WHILE-LOOP
  ===================================== */

  const rakning = [];
  let raknare = 1;

  while (raknare <= 5) {
    rakning.push(raknare);
    raknare++;
  }

  /* =====================================
     SIDANS INNEHÅLL
  ===================================== */

  return (
    <section className="logik logik-sida">

      <h1>JAVASCRIPT – LOGIK</h1>

      <h2>Villkor</h2>
      <p>{vaderText}</p>

      <h2>Strikt jämförelse</h2>
      <p>Är antal exakt noll? {String(arNoll)}</p>

      <h2>Falsy</h2>
      <p>Är antal falsy? {String(arFalsy)}</p>

      <h2>For-loop</h2>
      <p>{nummer.join(", ")}</p>

      <h2>For...of</h2>
      <p>{stadLista.join(", ")}</p>

      <h2>While-loop</h2>
      <p>{rakning.join(", ")}</p>

    </section>
  );
}

export default Logik;
