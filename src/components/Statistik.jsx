
/* =========================================
   STATISTIK – TEKNIKER OCH METODER
========================================= */

import projektLista from "../data/projekt.json";

function Statistik() {

  // Totalt antal projekt
  const totaltAntalProjekt = projektLista.length;

  // Räkna hur ofta varje teknik förekommer
  const antalTekniker = projektLista.reduce(
    (resultat, projekt) => {
      projekt.teknik.forEach((teknik) => {
        resultat[teknik] = (resultat[teknik] || 0) + 1;
      });

      return resultat;
    },
    {}
  );

  // Omvandla objektet till en lista och sortera
  const sorteradStatistik = Object.entries(antalTekniker)
    .sort((a, b) => b[1] - a[1]);

  return (
    <section className="statistik">
      <h2>Det här har jag använt mest</h2>

      <ul>
        {sorteradStatistik.map(([teknik, antal]) => {

          // Beräkna procentandel
          const procent =
            totaltAntalProjekt > 0
              ? (antal / totaltAntalProjekt) * 100
              : 0;

          return (
           <li key={teknik}>
            {teknik}: {antal} projekt
            {" – "}
            {procent.toFixed(1)} %

            {antal >= 2 && (
            <span className="statistik-markering">
             {" "}ÅTERKOMMANDE
            </span>
                 )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Statistik;
